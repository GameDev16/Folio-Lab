/**
 * FolioLab – Template Registry
 * Contains all template metadata AND embedded schemas
 */

const TEMPLATES = [
    {
        id: 'student-starter',
        name: 'Student Starter',
        category: 'student',
        description: 'Perfect for students with sidebar navigation and orange accents'
    },
    {
        id: 'student-sidebar',
        name: 'Student Sidebar',
        category: 'student',
        description: 'Clean sidebar layout with blue accents for students'
    },
    {
        id: 'developer-starter',
        name: 'Developer Starter',
        category: 'developer',
        description: 'Clean light theme with purple accents for developers'
    },
    {
        id: 'developer-dark',
        name: 'Developer Dark',
        category: 'developer',
        description: 'Modern GitHub-style dark theme for developers'
    },
    {
        id: 'developer-terminal',
        name: 'Developer Terminal',
        category: 'developer',
        description: 'Retro terminal-inspired theme with green text'
    },
    {
        id: 'designer-studio',
        name: 'Designer Studio',
        category: 'designer',
        description: 'Elegant warm tones for creative professionals'
    },
    {
        id: 'designer-minimal',
        name: 'Designer Minimal',
        category: 'designer',
        description: 'Clean minimal design with serif typography'
    },
    {
        id: 'multipurpose',
        name: 'Multipurpose',
        category: 'multipurpose',
        description: 'Versatile template that works for any profession'
    }
];

// Standard required fields for ALL templates
const BASE_FIELDS = {
    personal: [
        {name: 'profileImage', label: 'Profile Photo', type: 'image', section: 'Personal Info', required: true},
        {name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe', section: 'Personal Info', required: true},
        {name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', section: 'Personal Info', required: true},
        {name: 'dob', label: 'Date of Birth', type: 'text', placeholder: 'January 1, 2000', section: 'Personal Info', required: true},
        {name: 'tagline', label: 'Tagline', type: 'text', placeholder: 'Your one-line intro', section: 'Personal Info', required: true},
        {name: 'bio', label: 'About Me', type: 'textarea', placeholder: 'Tell about yourself...', section: 'Personal Info', required: true},
        {name: 'location', label: 'Location', type: 'text', placeholder: 'City, Country', section: 'Personal Info'}
    ],
    education: {
        name: 'education', label: 'Education', type: 'repeater', itemLabel: 'Education', section: 'Education', required: true, 
        fields: [
            {name: 'degree', label: 'Degree/Course', type: 'text', placeholder: 'B.Tech Computer Science'},
            {name: 'institution', label: 'Institution', type: 'text', placeholder: 'University Name'},
            {name: 'startYear', label: 'Start Year', type: 'text', placeholder: '2020'},
            {name: 'endYear', label: 'End Year', type: 'text', placeholder: '2024 or Present'},
            {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What you learned...'}
        ]
    },
    skills: {
        name: 'skills', label: 'Skills', type: 'repeater', itemLabel: 'Skill', section: 'Skills & Tools', required: true,
        fields: [{name: 'name', label: 'Skill Name', type: 'text', placeholder: 'JavaScript'}]
    },
    tools: {
        name: 'tools', label: 'Tools', type: 'repeater', itemLabel: 'Tool', section: 'Skills & Tools', required: true,
        fields: [{name: 'name', label: 'Tool Name', type: 'text', placeholder: 'VS Code'}]
    },
    projects: {
        name: 'projects', label: 'Projects', type: 'repeater', itemLabel: 'Project', section: 'Projects',
        fields: [
            {name: 'name', label: 'Project Name', type: 'text', placeholder: 'My Project'},
            {name: 'tech', label: 'Technologies', type: 'text', placeholder: 'React, Node.js'},
            {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What it does...'},
            {name: 'techStack', label: 'Tech Stack Details', type: 'text', placeholder: 'React, Node.js, MongoDB'},
            {name: 'githubLink', label: 'GitHub Link', type: 'text', placeholder: 'https://github.com/user/repo'}
        ]
    }
};

// Embedded schemas for offline functionality
const SCHEMAS = {
    'student-starter': {
        name: 'Student Starter',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'github', label: 'GitHub Profile URL', type: 'text', placeholder: 'https://github.com/username', section: 'Social'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            {name: 'currentlyLearning', label: 'Currently Learning', type: 'text', placeholder: 'React, DSA', section: 'Intro'},
            {name: 'headline', label: 'Intro Headline', type: 'text', placeholder: 'I build things for the web...', section: 'Intro'},
            {name: 'currentWork', label: 'What I\'m Doing Now', type: 'repeater', itemLabel: 'Activity', section: 'Intro', fields: [{name: 'activity', label: 'Activity', type: 'text', placeholder: 'Learning React'}]},
            {name: 'lookingFor', label: 'What I\'m Looking For', type: 'repeater', itemLabel: 'Goal', section: 'Intro', fields: [{name: 'goal', label: 'Goal', type: 'text', placeholder: 'Internships'}]},
            BASE_FIELDS.education,
            BASE_FIELDS.projects,
            BASE_FIELDS.skills,
            BASE_FIELDS.tools,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'I\'m open to opportunities...', section: 'Contact'}
        ]
    },
    'student-sidebar': {
        name: 'Student Sidebar',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'github', label: 'GitHub Profile URL', type: 'text', placeholder: 'https://github.com/username', section: 'Social'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            BASE_FIELDS.education,
            BASE_FIELDS.skills,
            BASE_FIELDS.tools,
            BASE_FIELDS.projects,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'Feel free to reach out...', section: 'Contact'}
        ]
    },
    'developer-starter': {
        name: 'Developer Starter',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'title', label: 'Job Title', type: 'text', placeholder: 'Full Stack Developer', section: 'Personal Info'},
            {name: 'github', label: 'GitHub Profile URL', type: 'text', placeholder: 'https://github.com/username', section: 'Social'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            BASE_FIELDS.skills,
            BASE_FIELDS.tools,
            BASE_FIELDS.projects,
            {name: 'experience', label: 'Experience', type: 'repeater', itemLabel: 'Job', section: 'Experience', fields: [
                {name: 'role', label: 'Role', type: 'text', placeholder: 'Software Developer'},
                {name: 'company', label: 'Company', type: 'text', placeholder: 'Tech Corp'},
                {name: 'period', label: 'Period', type: 'text', placeholder: '2022 - Present'},
                {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What you did...'}
            ]},
            BASE_FIELDS.education,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'Let\'s connect...', section: 'Contact'}
        ]
    },
    'developer-dark': {
        name: 'Developer Dark',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'title', label: 'Job Title', type: 'text', placeholder: 'Full Stack Developer', section: 'Personal Info'},
            {name: 'username', label: 'Username/Handle', type: 'text', placeholder: '@johndoe', section: 'Personal Info'},
            {name: 'github', label: 'GitHub Profile URL', type: 'text', placeholder: 'https://github.com/username', section: 'Social'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            {name: 'skills', label: 'Skills', type: 'repeater', itemLabel: 'Skill', section: 'Skills', required: true, fields: [
                {name: 'name', label: 'Skill Name', type: 'text', placeholder: 'JavaScript'},
                {name: 'level', label: 'Level', type: 'text', placeholder: 'Advanced'}
            ]},
            BASE_FIELDS.tools,
            BASE_FIELDS.projects,
            {name: 'experience', label: 'Experience', type: 'repeater', itemLabel: 'Job', section: 'Experience', fields: [
                {name: 'role', label: 'Role', type: 'text', placeholder: 'Software Developer'},
                {name: 'company', label: 'Company', type: 'text', placeholder: 'Tech Corp'},
                {name: 'period', label: 'Period', type: 'text', placeholder: '2022 - Present'},
                {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What you did...'}
            ]},
            BASE_FIELDS.education,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'Let\'s connect...', section: 'Contact'}
        ]
    },
    'developer-terminal': {
        name: 'Developer Terminal',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'title', label: 'Job Title', type: 'text', placeholder: 'Full Stack Developer', section: 'Personal Info'},
            {name: 'handle', label: 'Handle', type: 'text', placeholder: '@coder', section: 'Personal Info'},
            {name: 'github', label: 'GitHub Profile URL', type: 'text', placeholder: 'https://github.com/username', section: 'Social'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            BASE_FIELDS.skills,
            BASE_FIELDS.tools,
            BASE_FIELDS.projects,
            BASE_FIELDS.education,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'Let\'s connect...', section: 'Contact'}
        ]
    },
    'designer-studio': {
        name: 'Designer Studio',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'title', label: 'Job Title', type: 'text', placeholder: 'UI/UX Designer', section: 'Personal Info'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            {name: 'dribbble', label: 'Dribbble Profile URL', type: 'text', placeholder: 'https://dribbble.com/username', section: 'Social'},
            BASE_FIELDS.skills,
            BASE_FIELDS.tools,
            {name: 'projects', label: 'Projects', type: 'repeater', itemLabel: 'Project', section: 'Work', fields: [
                {name: 'name', label: 'Project Name', type: 'text', placeholder: 'Brand Redesign'},
                {name: 'category', label: 'Category', type: 'text', placeholder: 'Branding'},
                {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What you created...'}
            ]},
            BASE_FIELDS.education,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'Let\'s create something...', section: 'Contact'}
        ]
    },
    'designer-minimal': {
        name: 'Designer Minimal',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'title', label: 'Job Title', type: 'text', placeholder: 'Designer', section: 'Personal Info'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            {name: 'website', label: 'Website URL', type: 'text', placeholder: 'https://yoursite.com', section: 'Social'},
            BASE_FIELDS.skills,
            BASE_FIELDS.tools,
            {name: 'projects', label: 'Projects', type: 'repeater', itemLabel: 'Project', section: 'Work', fields: [
                {name: 'name', label: 'Project Name', type: 'text', placeholder: 'Portfolio Site'},
                {name: 'year', label: 'Year', type: 'text', placeholder: '2024'},
                {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What you created...'}
            ]},
            BASE_FIELDS.education,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'Let\'s work together...', section: 'Contact'}
        ]
    },
    'multipurpose': {
        name: 'Multipurpose',
        fields: [
            ...BASE_FIELDS.personal,
            {name: 'title', label: 'Job Title', type: 'text', placeholder: 'Professional', section: 'Personal Info'},
            {name: 'phone', label: 'Phone', type: 'text', placeholder: '+1 234 567 890', section: 'Contact Info'},
            {name: 'linkedin', label: 'LinkedIn Profile URL', type: 'text', placeholder: 'https://linkedin.com/in/username', section: 'Social'},
            {name: 'website', label: 'Website URL', type: 'text', placeholder: 'https://yoursite.com', section: 'Social'},
            BASE_FIELDS.skills,
            BASE_FIELDS.tools,
            {name: 'projects', label: 'Work/Projects', type: 'repeater', itemLabel: 'Project', section: 'Work', fields: [
                {name: 'name', label: 'Project Name', type: 'text', placeholder: 'My Project'},
                {name: 'category', label: 'Category', type: 'text', placeholder: 'Web Development'},
                {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What you did...'}
            ]},
            {name: 'experience', label: 'Experience', type: 'repeater', itemLabel: 'Position', section: 'Experience', fields: [
                {name: 'role', label: 'Role', type: 'text', placeholder: 'Manager'},
                {name: 'organization', label: 'Organization', type: 'text', placeholder: 'Company Name'},
                {name: 'period', label: 'Period', type: 'text', placeholder: '2022 - Present'},
                {name: 'description', label: 'Description', type: 'textarea', placeholder: 'What you did...'}
            ]},
            BASE_FIELDS.education,
            {name: 'contactMessage', label: 'Contact Message', type: 'textarea', placeholder: 'Let\'s connect...', section: 'Contact'}
        ]
    }
};

// Sample data for previews
const SAMPLE_DATA = {
    fullName: 'Alex Johnson',
    title: 'Full Stack Developer',
    tagline: 'Building modern web experiences',
    username: '@alexj',
    handle: '@alexj',
    location: 'San Francisco, CA',
    dob: 'January 15, 1998',
    bio: 'Passionate developer with 5+ years of experience building scalable web applications. I love solving complex problems and creating elegant solutions.',
    email: 'alex@example.com',
    github: 'https://github.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    dribbble: 'https://dribbble.com/alexjohnson',
    website: 'https://alexjohnson.dev',
    phone: '+1 234 567 890',
    currentlyLearning: 'Advanced React · System Design',
    headline: 'I build modern web applications with clean, maintainable code.',
    contactMessage: 'I\'m open to new opportunities and collaborations. Feel free to reach out!'
};

/**
 * Get all templates
 */
function getAllTemplates() {
    return TEMPLATES;
}

/**
 * Get template by ID
 */
function getTemplateById(id) {
    return TEMPLATES.find(t => t.id === id);
}

/**
 * Get templates by category
 */
function getTemplatesByCategory(category) {
    if (category === 'all') return TEMPLATES;
    return TEMPLATES.filter(t => t.category === category);
}

/**
 * Get schema for template (from embedded data)
 */
function getSchema(templateId) {
    return SCHEMAS[templateId] || null;
}

/**
 * Get sample data
 */
function getSampleData() {
    return SAMPLE_DATA;
}

/**
 * Get template file paths
 */
function getTemplatePath(templateId) {
    return `templates/${templateId}/template.html`;
}

function getStylesPath(templateId) {
    return `templates/${templateId}/styles.css`;
}

function getSchemaPath(templateId) {
    return `templates/${templateId}/schema.json`;
}
