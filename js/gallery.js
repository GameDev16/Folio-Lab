/**
 * FolioLab – Template Gallery
 * Handles template browsing, filtering, search, and preview
 */

let currentCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
});

function initGallery() {
    renderTemplates();
    setupCategoryFilters();
    setupSearch();
    setupPreviewModal();
}

function renderTemplates() {
    const grid = document.getElementById('templateGrid');
    let templates = getTemplatesByCategory(currentCategory);
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        templates = templates.filter(t => 
            t.name.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query) ||
            t.category.toLowerCase().includes(query)
        );
    }
    
    if (templates.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
                <p>No templates found matching your search.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = templates.map(template => createTemplateCard(template)).join('');
    
    // Load live previews into iframes
    grid.querySelectorAll('.template-card').forEach(card => {
        const templateId = card.dataset.templateId;
        const iframe = card.querySelector('.preview-iframe');
        if (iframe && templateId) {
            loadMiniPreview(iframe, templateId);
        }
    });
    
    grid.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openPreviewModal(btn.dataset.template);
        });
    });
}

function createTemplateCard(template) {
    return `
        <article class="template-card" data-category="${template.category}" data-template-id="${template.id}">
            <div class="template-card__preview">
                <div class="template-card__preview-frame">
                    <iframe class="preview-iframe" sandbox="allow-same-origin" scrolling="no"></iframe>
                </div>
                <div class="template-card__preview-overlay">
                    <button class="btn btn--secondary btn--sm preview-btn" data-template="${template.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        Preview
                    </button>
                    <a href="builder.html?id=${template.id}" class="btn btn--primary btn--sm">Use Template</a>
                </div>
            </div>
            <div class="template-card__info">
                <span class="template-card__category">${template.category}</span>
                <h3 class="template-card__name">${template.name}</h3>
                <p class="template-card__desc">${template.description}</p>
            </div>
        </article>
    `;
}

async function loadMiniPreview(iframe, templateId) {
    try {
        const html = await generatePreviewHtml(templateId);
        iframe.srcdoc = html;
    } catch (e) {
        console.warn('Could not load preview for', templateId);
        // Show fallback mockup
        iframe.parentElement.innerHTML = getMockupHtml(templateId);
    }
}

async function generatePreviewHtml(templateId) {
    // Try embedded data first (works offline)
    let html = typeof getTemplateHtml === 'function' ? getTemplateHtml(templateId) : null;
    let css = typeof getTemplateCss === 'function' ? getTemplateCss(templateId) : null;
    
    // Fallback to fetch if embedded data not available
    if (!html) {
        const templatePath = getTemplatePath(templateId);
        const templateResponse = await fetch(templatePath);
        if (!templateResponse.ok) throw new Error('Template not found');
        html = await templateResponse.text();
    }
    
    if (!css) {
        const stylesPath = getStylesPath(templateId);
        const stylesResponse = await fetch(stylesPath);
        css = stylesResponse.ok ? await stylesResponse.text() : '';
    }
    
    // Get sample data
    const sampleData = getSampleData();
    const schema = getSchema(templateId);
    
    // Generate sample arrays for repeaters
    const fullData = { ...sampleData };
    if (schema && schema.fields) {
        schema.fields.forEach(field => {
            if (field.type === 'repeater') {
                fullData[field.name] = generateSampleRepeaterData(field);
            }
        });
    }
    
    // Replace placeholders
    html = replacePlaceholders(html, fullData);
    
    // Inject CSS inline
    html = html.replace(/<link[^>]*href="styles\.css"[^>]*>/gi, '');
    html = html.replace('</head>', `<style>${css}</style></head>`);
    
    // Add scaling styles for mini preview
    const scaleStyle = `
        <style>
            html { 
                transform: scale(0.35); 
                transform-origin: top left; 
                width: 285%; 
                height: 285%;
                overflow: hidden;
            }
            body {
                overflow: hidden;
            }
        </style>
    `;
    html = html.replace('</head>', scaleStyle + '</head>');
    
    // Handle missing profile image
    html = html.replace(/{{profileImage}}/g, 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23374151"/%3E%3Ccircle cx="50" cy="40" r="18" fill="%236B7280"/%3E%3Cellipse cx="50" cy="80" rx="28" ry="20" fill="%236B7280"/%3E%3C/svg%3E');
    
    return html;
}

function generateSampleRepeaterData(field) {
    const samples = {
        'skills': [{name: 'JavaScript'}, {name: 'Python'}, {name: 'React'}],
        'skillsCore': [{skill: 'JavaScript'}, {skill: 'Python'}, {skill: 'Java'}],
        'skillsConcepts': [{concept: 'Data Structures'}, {concept: 'Algorithms'}],
        'skillsTools': [{tool: 'VS Code'}, {tool: 'Git'}, {tool: 'Docker'}],
        'projects': [
            {name: 'E-Commerce Platform', tech: 'React · Node', description: 'Full-stack shopping platform with payment integration.', techStack: 'React, Node.js, MongoDB', github: '#', githubLink: '#', live: '#', liveLink: '#', demo: '#', link: '#', category: 'Web App', year: '2024'},
            {name: 'Task Manager', tech: 'Python · Django', description: 'Productivity app with task tracking and reminders.', techStack: 'Python, Django', github: '#', githubLink: '#', live: '#', liveLink: '#', demo: '#', link: '#', category: 'Productivity', year: '2023'}
        ],
        'experience': [
            {role: 'Senior Developer', company: 'Tech Corp', organization: 'Tech Corp', period: '2022 - Present', description: 'Leading frontend development team.'},
            {role: 'Developer', company: 'Startup Inc', organization: 'Startup Inc', period: '2020 - 2022', description: 'Built scalable web applications.'}
        ],
        'education': [
            {course: 'B.Tech Computer Science', degree: 'B.Tech Computer Science', institution: 'MIT', school: 'MIT', period: '2016 - 2020', year: '2020', description: 'Computer Science and Engineering'},
        ],
        'currentWork': [{activity: 'Building full-stack applications'}, {activity: 'Learning system design'}],
        'lookingFor': [{goal: 'Senior developer roles'}, {goal: 'Interesting projects'}],
        'expertise': [{area: 'UI/UX Design'}, {area: 'Brand Identity'}, {area: 'Web Design'}],
        'tools': [{tool: 'Figma'}, {tool: 'Photoshop'}, {tool: 'Illustrator'}]
    };
    
    return samples[field.name] || [{[field.fields?.[0]?.name || 'item']: 'Sample Item'}];
}

function replacePlaceholders(html, data) {
    let result = html;
    
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            const repeaterRegex = new RegExp(`{{#${key}}}([\\s\\S]*?){{/${key}}}`, 'g');
            result = result.replace(repeaterRegex, (match, template) => {
                if (value.length === 0) return '';
                return value.map(item => {
                    let itemHtml = template;
                    for (const [itemKey, itemValue] of Object.entries(item)) {
                        itemHtml = itemHtml.replace(new RegExp(`{{${itemKey}}}`, 'g'), itemValue || '');
                    }
                    return itemHtml;
                }).join('');
            });
        } else {
            result = result.replace(new RegExp(`{{${key}}}`, 'g'), value || '');
        }
    }
    
    // Clean up remaining placeholders
    result = result.replace(/{{[^#/][^}]*}}/g, '');
    result = result.replace(/{{#[^}]+}}[\s\S]*?{{\/[^}]+}}/g, '');
    
    return result;
}

function getMockupHtml(templateId) {
    return `
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #1a1a1a; color: #666; font-size: 12px;">
            Preview unavailable offline
        </div>
    `;
}

function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderTemplates();
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTemplates();
    });
}

function setupPreviewModal() {
    const modal = document.getElementById('previewModal');
    const closeBtn = document.getElementById('closePreviewModal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closePreviewModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closePreviewModal();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePreviewModal();
    });
}

async function openPreviewModal(templateId) {
    const modal = document.getElementById('previewModal');
    const iframe = document.getElementById('previewIframe');
    const title = document.getElementById('previewTemplateName');
    const useBtn = document.getElementById('useTemplateBtn');
    
    if (!modal || !iframe) return;
    
    const template = getTemplateById(templateId);
    if (title) title.textContent = template?.name || 'Preview';
    if (useBtn) useBtn.href = `builder.html?id=${templateId}`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    try {
        const html = await generateFullPreviewHtml(templateId);
        iframe.srcdoc = html;
    } catch (e) {
        console.error('Preview error:', e);
        iframe.srcdoc = '<html><body style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#666;">Error loading preview. Try using a local server.</body></html>';
    }
}

async function generateFullPreviewHtml(templateId) {
    // Try embedded data first (works offline)
    let html = typeof getTemplateHtml === 'function' ? getTemplateHtml(templateId) : null;
    let css = typeof getTemplateCss === 'function' ? getTemplateCss(templateId) : null;
    
    // Fallback to fetch if embedded data not available
    if (!html) {
        const templatePath = getTemplatePath(templateId);
        const templateResponse = await fetch(templatePath);
        if (!templateResponse.ok) throw new Error('Template not found');
        html = await templateResponse.text();
    }
    
    if (!css) {
        const stylesPath = getStylesPath(templateId);
        const stylesResponse = await fetch(stylesPath);
        css = stylesResponse.ok ? await stylesResponse.text() : '';
    }
    
    const sampleData = getSampleData();
    const schema = getSchema(templateId);
    
    const fullData = { ...sampleData };
    if (schema && schema.fields) {
        schema.fields.forEach(field => {
            if (field.type === 'repeater') {
                fullData[field.name] = generateSampleRepeaterData(field);
            }
        });
    }
    
    html = replacePlaceholders(html, fullData);
    
    html = html.replace(/<link[^>]*href="styles\.css"[^>]*>/gi, '');
    html = html.replace('</head>', `<style>${css}</style></head>`);
    
    // Add navigation script
    const navScript = `
        <script>
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = document.getElementById(link.getAttribute('href').substring(1));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });
        </script>
    `;
    html = html.replace('</body>', navScript + '</body>');
    
    html = html.replace(/{{profileImage}}/g, 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23374151"/%3E%3Ccircle cx="50" cy="40" r="18" fill="%236B7280"/%3E%3Cellipse cx="50" cy="80" rx="28" ry="20" fill="%236B7280"/%3E%3C/svg%3E');
    
    return html;
}

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    const iframe = document.getElementById('previewIframe');
    
    if (modal) modal.classList.remove('active');
    if (iframe) iframe.srcdoc = '';
    document.body.style.overflow = '';
}
