/**
 * FolioLab – Portfolio Builder
 * Schema-driven form generation, preview modal, and ZIP export
 */

let currentTemplate = null;
let currentSchema = null;
let formData = {};
let profileImageData = null;

document.addEventListener('DOMContentLoaded', () => {
    initBuilder();
});

async function initBuilder() {
    const urlParams = new URLSearchParams(window.location.search);
    const templateId = urlParams.get('id');
    
    if (!templateId) {
        window.location.href = 'template.html';
        return;
    }
    
    currentTemplate = getTemplateById(templateId);
    
    if (!currentTemplate) {
        showToast('Template not found', 'error');
        setTimeout(() => window.location.href = 'template.html', 2000);
        return;
    }
    
    document.getElementById('templateName').textContent = currentTemplate.name;
    document.title = `Build: ${currentTemplate.name} – FolioLab`;
    
    try {
        await loadSchemaAndGenerateForm(templateId);
        loadSavedData();
        setupEventListeners();
    } catch (error) {
        console.error('Error initializing builder:', error);
        showToast('Error loading template', 'error');
    }
}

async function loadSchemaAndGenerateForm(templateId) {
    // Try to get schema from embedded data first (works offline)
    currentSchema = getSchema(templateId);
    
    if (!currentSchema) {
        // Fallback to fetch if not embedded
        try {
            const schemaPath = getSchemaPath(templateId);
            const response = await fetch(schemaPath);
            if (response.ok) {
                currentSchema = await response.json();
            }
        } catch (e) {
            console.warn('Could not fetch schema, using embedded data');
        }
    }
    
    if (!currentSchema) {
        throw new Error('Schema not found for template: ' + templateId);
    }
    
    generateForm(currentSchema);
}

function generateForm(schema) {
    const formContent = document.getElementById('formContent');
    let html = '';
    const sections = groupFieldsBySection(schema.fields);
    
    for (const [sectionName, fields] of Object.entries(sections)) {
        html += `
            <div class="form-section">
                <h2 class="form-section__title">${sectionName}</h2>
                ${fields.map(field => generateField(field)).join('')}
            </div>
        `;
    }
    
    formContent.innerHTML = html;
    setupRepeaters();
}

function groupFieldsBySection(fields) {
    const sections = {};
    fields.forEach(field => {
        const section = field.section || 'General';
        if (!sections[section]) sections[section] = [];
        sections[section].push(field);
    });
    return sections;
}

function generateField(field) {
    const required = field.required ? '<span class="required">*</span>' : '';
    const hint = field.hint ? `<p class="form-hint">${field.hint}</p>` : '';
    
    switch (field.type) {
        case 'text':
        case 'email':
        case 'url':
        case 'tel':
            return `
                <div class="form-group">
                    <label class="form-label" for="${field.name}">${field.label}${required}</label>
                    <input type="${field.type}" id="${field.name}" name="${field.name}" class="form-input" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>
                    ${hint}
                </div>
            `;
        case 'textarea':
            return `
                <div class="form-group">
                    <label class="form-label" for="${field.name}">${field.label}${required}</label>
                    <textarea id="${field.name}" name="${field.name}" class="form-textarea" placeholder="${field.placeholder || ''}" rows="${field.rows || 4}" ${field.required ? 'required' : ''}></textarea>
                    ${hint}
                </div>
            `;
        case 'image':
            return `
                <div class="form-group">
                    <label class="form-label">${field.label}${required}</label>
                    <div class="image-upload">
                        <label class="image-upload__preview" for="${field.name}">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        </label>
                        <input type="file" id="${field.name}" name="${field.name}" class="image-upload__input" accept="image/*">
                        <span class="image-upload__btn" onclick="document.getElementById('${field.name}').click()">Upload Photo</span>
                    </div>
                    ${hint}
                </div>
            `;
        case 'repeater':
            const requiredHint = field.required ? ' (At least 1 required)' : '';
            return `
                <div class="form-group">
                    <label class="form-label">${field.label}${requiredHint}</label>
                    <div class="repeater" id="repeater-${field.name}" data-field="${field.name}" data-required="${field.required || false}">
                        <div class="repeater-items"></div>
                        <button type="button" class="repeater-add" data-field="${field.name}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                            Add ${field.itemLabel || 'Item'}
                        </button>
                    </div>
                    ${hint}
                </div>
            `;
        default:
            return '';
    }
}

function setupRepeaters() {
    document.querySelectorAll('.repeater-add').forEach(btn => {
        btn.addEventListener('click', () => addRepeaterItem(btn.dataset.field));
    });
}

function addRepeaterItem(fieldName) {
    const field = currentSchema.fields.find(f => f.name === fieldName);
    if (!field || !field.fields) return;
    
    const repeater = document.getElementById(`repeater-${fieldName}`);
    const itemsContainer = repeater.querySelector('.repeater-items');
    const itemIndex = itemsContainer.children.length;
    
    const itemHtml = `
        <div class="repeater-item" data-index="${itemIndex}">
            <div class="repeater-item__header">
                <span class="repeater-item__title">${field.itemLabel || 'Item'} ${itemIndex + 1}</span>
                <button type="button" class="repeater-item__remove" title="Remove">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="repeater-item__fields">
                ${field.fields.map(subField => generateRepeaterField(subField, fieldName, itemIndex)).join('')}
            </div>
        </div>
    `;
    
    itemsContainer.insertAdjacentHTML('beforeend', itemHtml);
    
    const newItem = itemsContainer.lastElementChild;
    newItem.querySelector('.repeater-item__remove').addEventListener('click', () => {
        newItem.remove();
        reindexRepeaterItems(fieldName);
        saveFormData();
    });
    
    setupInputListeners(newItem);
    saveFormData();
}

function generateRepeaterField(field, parentName, index) {
    const inputName = `${parentName}[${index}][${field.name}]`;
    const inputId = `${parentName}-${index}-${field.name}`;
    
    if (field.type === 'textarea') {
        return `
            <div class="form-group" style="margin-bottom: 0.75rem;">
                <label class="form-label" for="${inputId}" style="font-size: 0.75rem;">${field.label}</label>
                <textarea id="${inputId}" name="${inputName}" class="form-textarea" placeholder="${field.placeholder || ''}" rows="2" style="padding: 0.625rem; min-height: 60px;"></textarea>
            </div>
        `;
    }
    return `
        <div class="form-group" style="margin-bottom: 0.75rem;">
            <label class="form-label" for="${inputId}" style="font-size: 0.75rem;">${field.label}</label>
            <input type="${field.type}" id="${inputId}" name="${inputName}" class="form-input" placeholder="${field.placeholder || ''}" style="padding: 0.625rem;">
        </div>
    `;
}

function reindexRepeaterItems(fieldName) {
    const repeater = document.getElementById(`repeater-${fieldName}`);
    const items = repeater.querySelectorAll('.repeater-item');
    const field = currentSchema.fields.find(f => f.name === fieldName);
    
    items.forEach((item, index) => {
        item.dataset.index = index;
        item.querySelector('.repeater-item__title').textContent = `${field.itemLabel || 'Item'} ${index + 1}`;
        item.querySelectorAll('input, textarea').forEach(input => {
            const fieldPart = input.name.match(/\]\[([^\]]+)\]$/)?.[1];
            if (fieldPart) {
                input.name = `${fieldName}[${index}][${fieldPart}]`;
                input.id = `${fieldName}-${index}-${fieldPart}`;
            }
        });
    });
}

function setupInputListeners(container = document) {
    container.querySelectorAll('input, textarea, select').forEach(input => {
        if (input.type === 'file') {
            input.addEventListener('change', handleImageUpload);
        } else {
            input.addEventListener('input', saveFormData);
            input.addEventListener('change', saveFormData);
        }
    });
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        profileImageData = event.target.result;
        const preview = document.querySelector(`.image-upload__preview[for="${e.target.id}"]`);
        if (preview) {
            preview.innerHTML = `<img src="${profileImageData}" alt="Profile">`;
        }
        saveFormData();
    };
    reader.readAsDataURL(file);
}

function setupEventListeners() {
    setupInputListeners();
    document.getElementById('previewBtn').addEventListener('click', openPreviewModal);
    document.getElementById('downloadBtn').addEventListener('click', downloadZip);
    document.getElementById('closePreviewModal').addEventListener('click', closePreviewModal);
    
    // Reset functionality
    document.getElementById('resetBtn').addEventListener('click', () => {
        document.getElementById('resetModal').classList.add('active');
    });
    document.getElementById('cancelReset').addEventListener('click', () => {
        document.getElementById('resetModal').classList.remove('active');
    });
    document.getElementById('confirmReset').addEventListener('click', resetForm);
    
    document.getElementById('previewModal').addEventListener('click', (e) => {
        if (e.target.id === 'previewModal') closePreviewModal();
    });
    document.getElementById('resetModal').addEventListener('click', (e) => {
        if (e.target.id === 'resetModal') document.getElementById('resetModal').classList.remove('active');
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePreviewModal();
            document.getElementById('resetModal').classList.remove('active');
        }
    });
}

function resetForm() {
    const storageKey = `foliolab_draft_${currentTemplate.id}`;
    localStorage.removeItem(storageKey);
    profileImageData = null;
    formData = {};
    
    // Reset all inputs
    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.value = '';
    });
    
    // Reset image preview
    document.querySelectorAll('.image-upload__preview').forEach(preview => {
        preview.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    });
    
    // Clear repeater items
    document.querySelectorAll('.repeater-items').forEach(container => {
        container.innerHTML = '';
    });
    
    document.getElementById('resetModal').classList.remove('active');
    showToast('Form has been reset', 'success');
}

async function openPreviewModal() {
    const modal = document.getElementById('previewModal');
    const iframe = document.getElementById('previewIframe');
    
    formData = collectFormData();
    
    try {
        // Try embedded data first (works offline)
        let html = typeof getTemplateHtml === 'function' ? getTemplateHtml(currentTemplate.id) : null;
        let css = typeof getTemplateCss === 'function' ? getTemplateCss(currentTemplate.id) : null;
        
        // Fallback to fetch if embedded data not available
        if (!html) {
            const templatePath = getTemplatePath(currentTemplate.id);
            const response = await fetch(templatePath);
            html = await response.text();
        }
        
        if (!css) {
            const stylesPath = getStylesPath(currentTemplate.id);
            const stylesResponse = await fetch(stylesPath);
            css = await stylesResponse.text();
        }
        
        html = replacePlaceholders(html, formData);
        
        // Remove external stylesheet link and inject CSS inline
        html = html.replace(/<link[^>]*href="styles\.css"[^>]*>/gi, '');
        html = html.replace('</head>', `<style>${css}</style></head>`);
        
        // Handle profile image
        if (profileImageData) {
            html = html.replace(/{{profileImage}}/g, profileImageData);
        } else {
            // Use placeholder SVG for missing profile image
            const placeholderSvg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23374151"/%3E%3Ccircle cx="50" cy="40" r="18" fill="%236B7280"/%3E%3Cellipse cx="50" cy="80" rx="28" ry="20" fill="%236B7280"/%3E%3C/svg%3E';
            html = html.replace(/{{profileImage}}/g, placeholderSvg);
        }
        
        // Add JavaScript to handle internal navigation within preview
        const navScript = `
        <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href^="#"]').forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var targetId = this.getAttribute('href').substring(1);
                    var targetEl = document.getElementById(targetId);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });
        </script>
        `;
        html = html.replace('</body>', navScript + '</body>');
        
        // Use srcdoc for the iframe
        iframe.srcdoc = html;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error opening preview:', error);
        showToast('Error loading preview', 'error');
    }
}

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    const iframe = document.getElementById('previewIframe');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    iframe.srcdoc = '';
}

function collectFormData() {
    const data = {};
    currentSchema.fields.forEach(field => {
        if (field.type === 'repeater') {
            data[field.name] = collectRepeaterData(field.name, field.fields);
        } else if (field.type === 'image') {
            data[field.name] = profileImageData || '';
        } else {
            const input = document.getElementById(field.name);
            if (input) data[field.name] = input.value;
        }
    });
    
    // Extract usernames from URLs for display, keep full URL for linking
    if (data.github) {
        // Ensure it's a full URL
        let url = data.github.trim();
        if (url && !url.match(/^https?:\/\//i)) {
            url = 'https://github.com/' + url;
        }
        data.github = url;
        // Extract username for display
        const match = url.match(/github\.com\/([^\/\?#]+)/i);
        data.githubUsername = match ? match[1] : url;
    }
    
    if (data.linkedin) {
        let url = data.linkedin.trim();
        if (url && !url.match(/^https?:\/\//i)) {
            url = 'https://linkedin.com/in/' + url;
        }
        data.linkedin = url;
        const match = url.match(/linkedin\.com\/in\/([^\/\?#]+)/i);
        data.linkedinUsername = match ? match[1] : url;
    }
    
    if (data.dribbble) {
        let url = data.dribbble.trim();
        if (url && !url.match(/^https?:\/\//i)) {
            url = 'https://dribbble.com/' + url;
        }
        data.dribbble = url;
        const match = url.match(/dribbble\.com\/([^\/\?#]+)/i);
        data.dribbbleUsername = match ? match[1] : url;
    }
    
    if (data.website) {
        let url = data.website.trim();
        if (url && !url.match(/^https?:\/\//i)) {
            url = 'https://' + url;
        }
        data.website = url;
    }
    
    return data;
}

function collectRepeaterData(fieldName, subFields) {
    const repeater = document.getElementById(`repeater-${fieldName}`);
    const items = repeater.querySelectorAll('.repeater-item');
    const data = [];
    
    items.forEach((item, index) => {
        const itemData = {};
        subFields.forEach(subField => {
            const input = item.querySelector(`[name="${fieldName}[${index}][${subField.name}]"]`);
            if (input) itemData[subField.name] = input.value;
        });
        data.push(itemData);
    });
    return data;
}

function saveFormData() {
    formData = collectFormData();
    const storageKey = `foliolab_draft_${currentTemplate.id}`;
    localStorage.setItem(storageKey, JSON.stringify({ ...formData, _profileImage: profileImageData }));
}

function loadSavedData() {
    const storageKey = `foliolab_draft_${currentTemplate.id}`;
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    
    try {
        const data = JSON.parse(saved);
        if (data._profileImage) {
            profileImageData = data._profileImage;
            const imageField = currentSchema.fields.find(f => f.type === 'image');
            if (imageField) {
                const preview = document.querySelector(`.image-upload__preview[for="${imageField.name}"]`);
                if (preview) preview.innerHTML = `<img src="${profileImageData}" alt="Profile">`;
            }
        }
        delete data._profileImage;
        formData = data;
        populateForm(formData);
    } catch (e) {
        console.error('Error loading saved data:', e);
    }
}

function populateForm(data) {
    currentSchema.fields.forEach(field => {
        if (field.type === 'repeater') {
            const items = data[field.name] || [];
            items.forEach(() => addRepeaterItem(field.name));
            const repeater = document.getElementById(`repeater-${field.name}`);
            const itemElements = repeater.querySelectorAll('.repeater-item');
            items.forEach((itemData, index) => {
                const itemEl = itemElements[index];
                if (itemEl) {
                    Object.entries(itemData).forEach(([key, value]) => {
                        const input = itemEl.querySelector(`[name="${field.name}[${index}][${key}]"]`);
                        if (input) input.value = value;
                    });
                }
            });
        } else if (field.type !== 'image') {
            const input = document.getElementById(field.name);
            if (input && data[field.name]) input.value = data[field.name];
        }
    });
}

function replacePlaceholders(html, data) {
    let result = html;
    
    // First pass: Handle arrays (repeaters)
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            const repeaterRegex = new RegExp(`{{#${key}}}([\\s\\S]*?){{/${key}}}`, 'g');
            result = result.replace(repeaterRegex, (match, template) => {
                if (value.length === 0) return '';
                return value.map(item => {
                    let itemHtml = template;
                    // Handle nested conditionals within repeater items
                    for (const [itemKey, itemValue] of Object.entries(item)) {
                        // Handle conditional blocks for item fields
                        const condRegex = new RegExp(`{{#${itemKey}}}([\\s\\S]*?){{/${itemKey}}}`, 'g');
                        itemHtml = itemHtml.replace(condRegex, (m, content) => {
                            return itemValue ? content.replace(new RegExp(`{{${itemKey}}}`, 'g'), escapeHtml(itemValue)) : '';
                        });
                        // Replace direct placeholders
                        itemHtml = itemHtml.replace(new RegExp(`{{${itemKey}}}`, 'g'), escapeHtml(itemValue || ''));
                    }
                    return itemHtml;
                }).join('');
            });
        }
    }
    
    // Second pass: Handle conditional blocks for non-array values
    for (const [key, value] of Object.entries(data)) {
        if (!Array.isArray(value)) {
            const condRegex = new RegExp(`{{#${key}}}([\\s\\S]*?){{/${key}}}`, 'g');
            result = result.replace(condRegex, (match, content) => {
                // Only show content if value exists and is not empty
                if (value && value.toString().trim() !== '') {
                    return content.replace(new RegExp(`{{${key}}}`, 'g'), escapeHtml(value));
                }
                return '';
            });
            // Replace remaining direct placeholders
            result = result.replace(new RegExp(`{{${key}}}`, 'g'), escapeHtml(value || ''));
        }
    }
    
    // Clean up: Remove any remaining empty conditional blocks
    result = result.replace(/{{#[^}]+}}[\s\S]*?{{\/[^}]+}}/g, '');
    // Clean up: Remove any remaining unreplaced placeholders
    result = result.replace(/{{[^#/][^}]*}}/g, '');
    
    return result;
}

function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function downloadZip() {
    const btn = document.getElementById('downloadBtn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<div class="loading-spinner" style="width: 18px; height: 18px;"></div> Generating...`;
    btn.disabled = true;
    
    try {
        formData = collectFormData();
        
        const missingFields = validateRequiredFields();
        if (missingFields.length > 0) {
            showToast(`Please fill in: ${missingFields.join(', ')}`, 'warning');
            btn.innerHTML = originalText;
            btn.disabled = false;
            return;
        }
        
        const zip = new JSZip();
        
        // Try embedded data first (works offline)
        let html = typeof getTemplateHtml === 'function' ? getTemplateHtml(currentTemplate.id) : null;
        let css = typeof getTemplateCss === 'function' ? getTemplateCss(currentTemplate.id) : null;
        
        // Fallback to fetch if embedded data not available
        if (!html) {
            const templatePath = getTemplatePath(currentTemplate.id);
            const templateResponse = await fetch(templatePath);
            html = await templateResponse.text();
        }
        
        if (!css) {
            const stylesPath = getStylesPath(currentTemplate.id);
            const stylesResponse = await fetch(stylesPath);
            css = await stylesResponse.text();
        }
        
        html = replacePlaceholders(html, formData);
        
        if (profileImageData) {
            html = html.replace(/{{profileImage}}/g, profileImageData);
        }
        
        zip.file('index.html', html);
        zip.file('styles.css', css);
        
        // Add README with hosting instructions
        const readme = generateReadme();
        zip.file('README.txt', readme);
        
        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${slugify(formData.fullName || 'portfolio')}-portfolio.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('Portfolio downloaded successfully!', 'success');
    } catch (error) {
        console.error('Error generating ZIP:', error);
        showToast('Error generating download. Please try again.', 'error');
    }
    
    btn.innerHTML = originalText;
    btn.disabled = false;
}

function validateRequiredFields() {
    const missing = [];
    currentSchema.fields.forEach(field => {
        if (field.required) {
            if (field.type === 'repeater') {
                const repeater = document.getElementById(`repeater-${field.name}`);
                const items = repeater.querySelectorAll('.repeater-item');
                if (items.length === 0) {
                    missing.push(field.label);
                }
            } else {
                const input = document.getElementById(field.name);
                if (!input || !input.value.trim()) missing.push(field.label);
            }
        }
    });
    return missing;
}

function generateReadme() {
    return `========================================
${formData.fullName || 'My'} Portfolio
Generated with FolioLab
========================================

FILES INCLUDED:
- index.html  : Your portfolio webpage
- styles.css  : Stylesheet for the design

----------------------------------------
HOW TO HOST YOUR PORTFOLIO
----------------------------------------

OPTION 1: Netlify (Easiest - Free)
1. Go to https://app.netlify.com/drop
2. Drag and drop this entire folder
3. Done! You'll get a live URL instantly

OPTION 2: GitHub Pages (Free)
1. Create a GitHub account at github.com
2. Create a new repository
3. Upload index.html and styles.css
4. Go to Settings > Pages
5. Select "main" branch and save
6. Your site will be live at: username.github.io/repo-name

OPTION 3: Vercel (Free)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository or drag files
4. Deploy with one click

OPTION 4: Any Web Hosting
1. Upload both files to your hosting via FTP
2. Make sure index.html is in the root folder
3. Visit your domain to see the site

----------------------------------------
CUSTOMIZATION TIPS
----------------------------------------
- Edit index.html to change content
- Edit styles.css to change colors/fonts
- All code is clean and well-commented

----------------------------------------
Need help? Visit FolioLab for more templates!

Generated on: ${new Date().toLocaleDateString()}
`;
}

function slugify(str) {
    return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span class="toast__message">${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
