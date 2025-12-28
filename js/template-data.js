const TEMPLATE_HTML = {};
const TEMPLATE_CSS = {};
TEMPLATE_HTML['student-starter'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet">
</head>
<body>
<div class="layout">
    <aside class="sidebar">
        <div class="sidebar-inner">
            <div class="brand">
                <div class="brand-tag">PORTFOLIO</div>
                <h1 class="brand-name">{{fullName}}</h1>
                <p class="brand-role">{{tagline}}</p>
            </div>

            <nav class="sidebar-nav">
                <a href="#intro" class="nav-link">Intro</a>
                <a href="#journey" class="nav-link">Journey</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#stack" class="nav-link">Tech Stack</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="sidebar-meta">
                {{#location}}<p class="meta-item">📍 {{location}}</p>{{/location}}
                {{#dob}}<p class="meta-item">🎂 {{dob}}</p>{{/dob}}
            </div>

            <div class="sidebar-links">
                {{#github}}<a href="{{github}}" target="_blank" class="social-link">GitHub ↗</a>{{/github}}
                {{#linkedin}}<a href="{{linkedin}}" target="_blank" class="social-link">LinkedIn ↗</a>{{/linkedin}}
                {{#email}}<a href="mailto:{{email}}" class="social-link">Email ↗</a>{{/email}}
            </div>
        </div>
    </aside>

    <main class="main">
        <section id="intro" class="section intro">
            <div class="intro-top">
                <div class="intro-copy">
                    {{#currentlyLearning}}
                    <div class="intro-header">
                        <span class="label-pill">Currently learning</span>
                        <span class="label-text">{{currentlyLearning}}</span>
                    </div>
                    {{/currentlyLearning}}
                    <h2 class="intro-title">{{headline}}</h2>
                    <p class="intro-text">{{bio}}</p>
                </div>
                <div class="intro-photo">
                    <img src="{{profileImage}}" alt="{{fullName}}">
                </div>
            </div>

            <div class="intro-grid">
                {{#currentWork}}
                <div class="intro-card">
                    <h3>What I'm doing right now</h3>
                    <ul>
                        {{#currentWork}}
                        <li>{{activity}}</li>
                        {{/currentWork}}
                    </ul>
                </div>
                {{/currentWork}}
                {{#lookingFor}}
                <div class="intro-card">
                    <h3>What I'm looking for</h3>
                    <ul>
                        {{#lookingFor}}
                        <li>{{goal}}</li>
                        {{/lookingFor}}
                    </ul>
                </div>
                {{/lookingFor}}
            </div>
        </section>

        <section id="journey" class="section">
            <div class="section-heading">
                <h2>Education & Journey</h2>
                <p>My learning timeline</p>
            </div>

            <div class="timeline">
                {{#education}}
                <article class="timeline-item">
                    <header>
                        <div class="timeline-year">{{startYear}} - {{endYear}}</div>
                        <div class="timeline-tag">{{institution}}</div>
                    </header>
                    <p class="timeline-role">{{degree}}</p>
                    {{#description}}<p class="timeline-text">{{description}}</p>{{/description}}
                </article>
                {{/education}}
            </div>
        </section>

        <section id="projects" class="section">
            <div class="section-heading">
                <h2>Selected Projects</h2>
                <p>Things I've built</p>
            </div>

            <div class="projects-grid">
                {{#projects}}
                <article class="project">
                    <div class="project-header">
                        <h3>{{name}}</h3>
                        {{#tech}}<span class="project-tag">{{tech}}</span>{{/tech}}
                    </div>
                    <p class="project-text">{{description}}</p>
                    <div class="project-footer">
                        {{#techStack}}<span class="project-tech">{{techStack}}</span>{{/techStack}}
                        {{#githubLink}}<a href="{{githubLink}}" target="_blank" class="project-link">View on GitHub ↗</a>{{/githubLink}}
                    </div>
                </article>
                {{/projects}}
            </div>
        </section>

        <section id="stack" class="section">
            <div class="section-heading">
                <h2>Tech Stack</h2>
                <p>Tools I actually use</p>
            </div>

            <div class="stack-grid">
                <div class="stack-column">
                    <h3>Skills</h3>
                    <ul>
                        {{#skills}}
                        <li>{{name}}</li>
                        {{/skills}}
                    </ul>
                </div>
                <div class="stack-column">
                    <h3>Tools</h3>
                    <ul>
                        {{#tools}}
                        <li>{{name}}</li>
                        {{/tools}}
                    </ul>
                </div>
            </div>
        </section>

        <section id="contact" class="section section-contact">
            <div class="section-heading">
                <h2>Let's Talk</h2>
                <p>Want to work together?</p>
            </div>

            <div class="contact-grid">
                <div class="contact-info">
                    {{#contactMessage}}<p>{{contactMessage}}</p>{{/contactMessage}}
                    <ul>
                        {{#email}}<li><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></li>{{/email}}
                        {{#github}}<li><strong>GitHub:</strong> <a href="{{github}}" target="_blank">{{githubUsername}}</a></li>{{/github}}
                        {{#linkedin}}<li><strong>LinkedIn:</strong> <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></li>{{/linkedin}}
                    </ul>
                </div>
            </div>

            <footer class="footer">
                <span>Built with FolioLab</span>
            </footer>
        </section>
    </main>
</div>
</body>
</html>`;
TEMPLATE_CSS['student-starter'] = `/* Student Starter Template - Sidebar Layout */
:root {
    --bg-main: #0f172a;
    --bg-body: #f4f4f5;
    --bg-page: #fafafa;
    --bg-card: #ffffff;
    --accent: #f97316;
    --accent-soft: #ffedd5;
    --text-main: #111827;
    --text-muted: #6b7280;
    --border: #e4e4e7;
    --radius-md: 10px;
    --radius-lg: 16px;
    --shadow-soft: 0 18px 45px rgba(15, 23, 42, 0.10);
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: "Inter", system-ui, sans-serif; color: var(--text-main); background: var(--bg-body); }
a { text-decoration: none; color: inherit; }

/* Layout */
.layout {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    background: var(--bg-page);
}

/* Sidebar */
.sidebar {
    background: var(--bg-main);
    color: #e5e7eb;
    padding: 2rem 1.7rem;
    border-right: 1px solid #1f2937;
    position: sticky;
    top: 0;
    height: 100vh;
}

.sidebar-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2rem;
}

.brand-tag {
    display: inline-block;
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    border: 1px solid #374151;
    margin-bottom: 0.7rem;
    color: var(--accent);
}

.brand-name {
    font-family: "Space Grotesk", system-ui;
    font-weight: 600;
    font-size: 1.7rem;
    margin: 0;
    color: #fff;
}

.brand-role {
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
    color: #9ca3af;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 0.5rem;
}

.sidebar-nav a, .sidebar-nav .nav-link {
    color: #e5e7eb;
    font-size: 0.92rem;
    padding: 0.35rem 0;
    border-bottom: 1px dashed transparent;
    transition: color 0.15s ease, border-color 0.15s ease;
    cursor: pointer;
    display: block;
}

.sidebar-nav a:hover, .sidebar-nav .nav-link:hover {
    color: var(--accent);
    border-color: var(--accent);
}

.sidebar-links .link-item {
    display: block;
    font-size: 0.85rem;
    color: #9ca3af;
    margin-bottom: 0.3rem;
    word-break: break-all;
}

.sidebar-meta {
    font-size: 0.85rem;
    color: #9ca3af;
}

.sidebar-meta .meta-location { margin: 0; }

.sidebar-links {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 0.9rem;
}

.sidebar-links a {
    color: #e5e7eb;
    padding: 0.3rem 0;
    border-bottom: 1px solid transparent;
    transition: color 0.15s ease, border-color 0.15s ease;
}

.sidebar-links a:hover {
    color: var(--accent);
    border-color: var(--accent);
}

.sidebar-links .social-link {
    display: block;
    font-size: 0.85rem;
    color: var(--accent);
    padding: 0.5rem 0.75rem;
    background: rgba(249, 115, 22, 0.1);
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.5rem;
    transition: all 0.2s;
}

.sidebar-links .social-link:hover {
    background: rgba(249, 115, 22, 0.2);
}

.sidebar-meta .meta-item {
    margin: 0 0 0.3rem;
    word-wrap: break-word;
}

/* Main Content */
.main {
    padding: 3rem 4rem;
}

.section {
    max-width: 100%;
    margin: 0 0 3.5rem;
}

.section-heading h2 {
    font-family: "Space Grotesk", system-ui;
    font-size: 1.5rem;
    margin: 0 0 0.3rem;
}

.section-heading p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Intro */
.intro-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.8rem;
}

.intro-copy { flex: 1; min-width: 0; }

.intro-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.label-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    font-size: 0.75rem;
    background: var(--accent-soft);
    color: #9a3412;
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.label-text {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.intro-title {
    font-family: "Space Grotesk", system-ui;
    font-size: 2rem;
    margin: 0 0 0.9rem;
    letter-spacing: 0.01em;
    line-height: 1.3;
}

.intro-text {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.7;
}

.intro-photo {
    flex: 0 0 120px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--accent);
    box-shadow: var(--shadow-soft);
    background: #fff;
}

.intro-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.intro-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.3rem;
    margin-top: 0.5rem;
}

.intro-card {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    border: 1.3px solid var(--border);
    padding: 1.2rem 1.3rem;
    box-shadow: var(--shadow-soft);
}

.intro-card h3 {
    margin: 0 0 0.6rem;
    font-size: 0.98rem;
}

.intro-card ul {
    margin: 0;
    padding-left: 1rem;
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.8;
}

/* Timeline */
.timeline {
    margin-top: 1.5rem;
    display: grid;
    gap: 1rem;
}

.timeline-item {
    border-radius: var(--radius-md);
    border: 1.4px solid var(--border);
    background: #fefefe;
    padding: 1.1rem 1.2rem;
}

.timeline-item header {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: baseline;
    margin-bottom: 0.3rem;
    flex-wrap: wrap;
}

.timeline-year {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--text-muted);
}

.timeline-tag {
    font-size: 0.8rem;
    background: #111827;
    color: #f9fafb;
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
}

.timeline-role {
    margin: 0.1rem 0 0.3rem;
    font-weight: 500;
    font-size: 0.95rem;
}

.timeline-text {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
}

/* Projects */
.projects-grid {
    margin-top: 1.8rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.2rem;
}

.project {
    border-radius: var(--radius-lg);
    border: 1.5px solid var(--border);
    background: #ffffff;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    box-shadow: var(--shadow-soft);
    transition: transform 0.2s, box-shadow 0.2s;
}

.project:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 50px rgba(15, 23, 42, 0.15);
}

.project-header {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: baseline;
}

.project-header h3 {
    margin: 0;
    font-size: 1rem;
}

.project-tag {
    font-size: 0.75rem;
    padding: 0.1rem 0.45rem;
    border-radius: 999px;
    background: var(--accent-soft);
    color: #9a3412;
}

.project-text {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
}

.project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 0.5rem;
}

.project-tech {
    font-size: 0.78rem;
    color: #4b5563;
}

.project-links {
    display: flex;
    gap: 0.6rem;
    font-size: 0.8rem;
}

.project-link {
    font-size: 0.85rem;
    color: var(--accent);
    font-weight: 500;
}

.project-link:hover {
    text-decoration: underline;
}
}

.project-links a {
    color: #111827;
    border-bottom: 1px dashed #111827;
    padding-bottom: 1px;
    transition: color 0.15s ease, border-color 0.15s ease;
}

.project-links a:hover {
    color: var(--accent);
    border-color: var(--accent);
}

/* Stack */
.stack-grid {
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
}

.stack-column {
    border-radius: var(--radius-lg);
    background: #fefefe;
    border: 1.3px solid var(--border);
    padding: 1.1rem 1.2rem;
}

.stack-column h3 {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
}

.stack-column ul {
    margin: 0;
    padding-left: 1rem;
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.8;
}

/* Contact */
.section-contact {
    margin-bottom: 0;
    padding-bottom: 2rem;
}

.contact-grid {
    margin-top: 1.5rem;
}

.contact-info p {
    margin: 0 0 0.8rem;
    color: var(--text-muted);
    font-size: 0.92rem;
    line-height: 1.7;
}

.contact-info ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.88rem;
    color: var(--text-muted);
}

.contact-info li + li { margin-top: 0.3rem; }

.contact-info a {
    color: #111827;
    border-bottom: 1px dashed #111827;
    padding-bottom: 1px;
    transition: color 0.15s ease, border-color 0.15s ease;
}

.contact-info a:hover {
    color: var(--accent);
    border-color: var(--accent);
}

/* Footer */
.footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px dashed #d4d4d8;
    font-size: 0.8rem;
    color: var(--text-muted);
    text-align: right;
}`;
TEMPLATE_HTML['student-sidebar'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
<div class="layout">
    <aside class="sidebar">
        <div class="sidebar-inner">
            <div class="profile">
                <img src="{{profileImage}}" alt="{{fullName}}" class="profile-image">
                <h1 class="profile-name">{{fullName}}</h1>
                <p class="profile-tagline">{{tagline}}</p>
            </div>

            <nav class="sidebar-nav">
                <a href="#about" class="nav-link">About</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="sidebar-info">
                {{#location}}<p class="info-item">📍 {{location}}</p>{{/location}}
                {{#dob}}<p class="info-item">🎂 {{dob}}</p>{{/dob}}
                {{#email}}<p class="info-item">✉️ {{email}}</p>{{/email}}
            </div>

            <div class="sidebar-social">
                {{#github}}<a href="{{github}}" target="_blank" class="social-link">GitHub ↗</a>{{/github}}
                {{#linkedin}}<a href="{{linkedin}}" target="_blank" class="social-link">LinkedIn ↗</a>{{/linkedin}}
            </div>
        </div>
    </aside>

    <main class="main">
        <section id="about" class="section">
            <h2 class="section-title">About Me</h2>
            <p class="about-text">{{bio}}</p>
        </section>

        <section id="education" class="section">
            <h2 class="section-title">Education</h2>
            <div class="education-list">
                {{#education}}
                <div class="education-item">
                    <div class="education-period">{{startYear}} - {{endYear}}</div>
                    <div class="education-content">
                        <h3 class="education-degree">{{degree}}</h3>
                        <p class="education-institution">{{institution}}</p>
                        {{#description}}<p class="education-description">{{description}}</p>{{/description}}
                    </div>
                </div>
                {{/education}}
            </div>
        </section>

        <section id="skills" class="section">
            <h2 class="section-title">Skills & Tools</h2>
            <div class="skills-grid">
                <div class="skills-column">
                    <h3>Skills</h3>
                    <div class="skills-tags">
                        {{#skills}}
                        <span class="skill-tag">{{name}}</span>
                        {{/skills}}
                    </div>
                </div>
                <div class="skills-column">
                    <h3>Tools</h3>
                    <div class="skills-tags">
                        {{#tools}}
                        <span class="skill-tag">{{name}}</span>
                        {{/tools}}
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="section">
            <h2 class="section-title">Projects</h2>
            <div class="projects-grid">
                {{#projects}}
                <div class="project-card">
                    <h3 class="project-name">{{name}}</h3>
                    {{#tech}}<span class="project-tech">{{tech}}</span>{{/tech}}
                    <p class="project-description">{{description}}</p>
                    {{#githubLink}}<a href="{{githubLink}}" target="_blank" class="project-link">View on GitHub ↗</a>{{/githubLink}}
                </div>
                {{/projects}}
            </div>
        </section>

        <section id="contact" class="section">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-info">
                {{#contactMessage}}<p class="contact-message">{{contactMessage}}</p>{{/contactMessage}}
                <div class="contact-details">
                    {{#email}}<p><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    {{#github}}<p><strong>GitHub:</strong> <a href="{{github}}" target="_blank">{{githubUsername}}</a></p>{{/github}}
                    {{#linkedin}}<p><strong>LinkedIn:</strong> <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
                </div>
            </div>
        </section>

        <footer class="footer">
            <span>Built with FolioLab</span>
        </footer>
    </main>
</div>
</body>
</html>`;
TEMPLATE_CSS['student-sidebar'] = `/* Student Sidebar - Blue Accent Theme */
:root {
    --bg-sidebar: #1e293b;
    --bg-main: #f8fafc;
    --bg-card: #ffffff;
    --accent: #3b82f6;
    --accent-light: #dbeafe;
    --text-dark: #0f172a;
    --text-muted: #64748b;
    --text-light: #e2e8f0;
    --border: #e2e8f0;
    --radius: 12px;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif; background: var(--bg-main); color: var(--text-dark); }
a { text-decoration: none; color: inherit; }

.layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    background: var(--bg-sidebar);
    color: var(--text-light);
    padding: 2rem 1.5rem;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.sidebar-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1.5rem;
}

.profile {
    text-align: center;
}

.profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1rem;
    border: 3px solid var(--accent);
    display: block;
}

.profile-name {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
    word-wrap: break-word;
}

.profile-tagline {
    color: var(--accent);
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.4;
}

/* Sidebar Navigation */
.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.sidebar-nav .nav-link {
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #cbd5e1;
    transition: all 0.2s;
    cursor: pointer;
    display: block;
}

.sidebar-nav .nav-link:hover {
    background: rgba(59, 130, 246, 0.2);
    color: var(--accent);
}

/* Sidebar Info */
.sidebar-info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.sidebar-info .info-item {
    font-size: 0.85rem;
    color: #94a3b8;
    margin: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Sidebar Social */
.sidebar-social {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.sidebar-social .social-link {
    font-size: 0.85rem;
    color: var(--accent);
    padding: 0.5rem 0.75rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    transition: all 0.2s;
    display: block;
    text-align: center;
}

.sidebar-social .social-link:hover {
    background: rgba(59, 130, 246, 0.2);
}

/* Main Content - Full Width */
.main {
    padding: 3rem 4rem;
    max-width: 100%;
}

.section {
    margin-bottom: 3.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.section-title::before {
    content: '';
    width: 4px;
    height: 24px;
    background: var(--accent);
    border-radius: 2px;
}

/* About */
.about-text {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0;
}

/* Skills Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.skills-column h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: var(--text-dark);
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    padding: 0.5rem 1rem;
    background: var(--accent-light);
    color: var(--accent);
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Projects Grid - Full Width */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
}

.project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.08);
}

.project-name {
    font-size: 1.15rem;
    margin: 0 0 0.5rem;
    font-weight: 600;
}

.project-tech {
    font-size: 0.75rem;
    color: var(--accent);
    background: var(--accent-light);
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 0.75rem;
}

.project-description {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 0 1rem;
    flex-grow: 1;
}

.project-link {
    font-size: 0.85rem;
    color: var(--accent);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
}

.project-link:hover {
    text-decoration: underline;
}

/* Education */
.education-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.education-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
}

.education-period {
    font-size: 0.85rem;
    color: var(--accent);
    font-weight: 600;
    white-space: nowrap;
}

.education-content {
    min-width: 0;
}

.education-degree {
    font-size: 1.1rem;
    margin: 0 0 0.25rem;
    font-weight: 600;
}

.education-institution {
    color: var(--text-muted);
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
}

.education-description {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
}

/* Contact */
.contact-info {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem;
}

.contact-message {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.7;
    margin: 0 0 1.5rem;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.contact-details p {
    margin: 0;
    font-size: 0.95rem;
}

.contact-details a {
    color: var(--accent);
    word-break: break-all;
}

.contact-details a:hover {
    text-decoration: underline;
}

/* Footer */
.footer {
    text-align: right;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    font-size: 0.8rem;
    color: var(--text-muted);
}

/* Responsive */
@media (max-width: 1024px) {
    .main {
        padding: 2rem;
    }
    .projects-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .layout {
        grid-template-columns: 1fr;
    }
    .sidebar {
        position: relative;
        height: auto;
        padding: 1.5rem;
    }
    .sidebar-inner {
        gap: 1rem;
    }
    .skills-grid {
        grid-template-columns: 1fr;
    }
}`;
TEMPLATE_HTML['developer-starter'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Developer Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
<div class="layout">
    <aside class="sidebar">
        <div class="sidebar-inner">
            <div class="profile">
                <img src="{{profileImage}}" alt="{{fullName}}" class="profile-image">
                <h1 class="profile-name">{{fullName}}</h1>
                {{#title}}<p class="profile-title">{{title}}</p>{{/title}}
                {{#tagline}}<p class="profile-tagline">{{tagline}}</p>{{/tagline}}
            </div>

            <nav class="sidebar-nav">
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="sidebar-meta">
                {{#location}}<p class="meta-item">📍 {{location}}</p>{{/location}}
                {{#dob}}<p class="meta-item">🎂 {{dob}}</p>{{/dob}}
                {{#email}}<p class="meta-item">✉️ {{email}}</p>{{/email}}
            </div>

            <div class="sidebar-links">
                {{#github}}<a href="{{github}}" target="_blank" class="social-link">GitHub ↗</a>{{/github}}
                {{#linkedin}}<a href="{{linkedin}}" target="_blank" class="social-link">LinkedIn ↗</a>{{/linkedin}}
            </div>
        </div>
    </aside>

    <main class="main">
        <section id="about" class="section">
            <h2 class="section-title">About Me</h2>
            <p class="about-text">{{bio}}</p>
        </section>

        <section id="skills" class="section">
            <h2 class="section-title">Skills & Tools</h2>
            <div class="skills-container">
                <div class="skills-group">
                    <h3>Technical Skills</h3>
                    <div class="skills-list">
                        {{#skills}}
                        <span class="skill-item">{{name}}</span>
                        {{/skills}}
                    </div>
                </div>
                <div class="skills-group">
                    <h3>Tools & Technologies</h3>
                    <div class="skills-list">
                        {{#tools}}
                        <span class="skill-item">{{name}}</span>
                        {{/tools}}
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="section">
            <h2 class="section-title">Projects</h2>
            <div class="projects-grid">
                {{#projects}}
                <div class="project-card">
                    <h3 class="project-name">{{name}}</h3>
                    {{#tech}}<span class="project-tech">{{tech}}</span>{{/tech}}
                    <p class="project-description">{{description}}</p>
                    {{#githubLink}}<a href="{{githubLink}}" target="_blank" class="project-link">View on GitHub ↗</a>{{/githubLink}}
                </div>
                {{/projects}}
            </div>
        </section>

        <section id="experience" class="section">
            <h2 class="section-title">Experience</h2>
            <div class="experience-list">
                {{#experience}}
                <div class="experience-item">
                    <div class="experience-header">
                        <h3 class="experience-role">{{role}}</h3>
                        {{#period}}<span class="experience-period">{{period}}</span>{{/period}}
                    </div>
                    {{#company}}<p class="experience-company">{{company}}</p>{{/company}}
                    {{#description}}<p class="experience-description">{{description}}</p>{{/description}}
                </div>
                {{/experience}}
            </div>
        </section>

        <section id="education" class="section">
            <h2 class="section-title">Education</h2>
            <div class="education-list">
                {{#education}}
                <div class="education-item">
                    <div class="education-period">{{startYear}} - {{endYear}}</div>
                    <h3 class="education-degree">{{degree}}</h3>
                    <p class="education-institution">{{institution}}</p>
                    {{#description}}<p class="education-description">{{description}}</p>{{/description}}
                </div>
                {{/education}}
            </div>
        </section>

        <section id="contact" class="section">
            <h2 class="section-title">Contact</h2>
            <div class="contact-info">
                {{#contactMessage}}<p>{{contactMessage}}</p>{{/contactMessage}}
                <div class="contact-details">
                    {{#email}}<p><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    {{#github}}<p><strong>GitHub:</strong> <a href="{{github}}" target="_blank">{{githubUsername}}</a></p>{{/github}}
                    {{#linkedin}}<p><strong>LinkedIn:</strong> <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
                </div>
            </div>
        </section>

        <footer class="footer">
            <span>Built with FolioLab</span>
        </footer>
    </main>
</div>
</body>
</html>`;
TEMPLATE_CSS['developer-starter'] = `/* Developer Starter - Light Purple Theme */
:root {
    --bg-sidebar: #18181b;
    --bg-main: #fafafa;
    --bg-card: #ffffff;
    --accent: #8b5cf6;
    --accent-light: #ede9fe;
    --text-dark: #18181b;
    --text-muted: #71717a;
    --text-light: #e4e4e7;
    --border: #e4e4e7;
    --radius: 10px;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: "Inter", sans-serif; background: var(--bg-main); color: var(--text-dark); }
a { text-decoration: none; color: inherit; }

.layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    background: var(--bg-sidebar);
    color: var(--text-light);
    padding: 2rem;
    position: sticky;
    top: 0;
    height: 100vh;
}

.sidebar-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1.5rem;
}

.profile {
    text-align: center;
}

.profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--accent);
    margin-bottom: 1rem;
}

.profile-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
}

.profile-title {
    color: #a1a1aa;
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
}

.profile-tagline {
    font-family: "Fira Code", monospace;
    font-size: 0.75rem;
    color: var(--accent);
    margin: 0;
}

.profile-meta {
    font-size: 0.85rem;
    color: #a1a1aa;
    text-align: center;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.nav a {
    padding: 0.6rem 0.75rem;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #d4d4d8;
    transition: all 0.15s;
}

.nav a:hover {
    background: #27272a;
    color: var(--accent);
}

.social {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.social a {
    font-size: 0.85rem;
    color: #a1a1aa;
    padding: 0.3rem 0;
}

.social a:hover {
    color: var(--accent);
}

/* Main */
.main {
    padding: 3rem;
    max-width: 850px;
}

.section {
    margin-bottom: 3.5rem;
}

.section h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.section h2::before {
    content: '#';
    color: var(--accent);
    font-family: "Fira Code", monospace;
}

.bio {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.8;
    margin: 0;
}

/* Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
}

.project {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
    transition: all 0.2s;
}

.project:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
}

.project h3 {
    font-size: 1rem;
    margin: 0 0 0.5rem;
}

.project p {
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.6;
    margin: 0 0 1rem;
}

.project-tech {
    font-family: "Fira Code", monospace;
    font-size: 0.7rem;
    color: var(--accent);
    margin-bottom: 1rem;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-links a {
    font-size: 0.8rem;
    color: var(--text-dark);
    border-bottom: 1px solid;
}

.project-links a:hover {
    color: var(--accent);
}

/* Skills */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
}

.skill-category {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
}

.skill-category h3 {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent);
    margin: 0 0 0.75rem;
}

.skill-category p {
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.6;
    margin: 0;
}

/* Experience */
.experience-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.exp-item {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
}

.exp-item:last-child {
    border-bottom: none;
}

.exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
}

.exp-header h3 {
    font-size: 1rem;
    margin: 0;
}

.exp-company {
    color: var(--accent);
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
}

.exp-period {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.exp-desc {
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.6;
    margin: 0;
}

/* Contact */
#contact p {
    color: var(--text-muted);
    margin: 0 0 1.5rem;
}

.contact-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--accent);
    color: #fff;
    border-radius: 999px;
    font-weight: 500;
    transition: opacity 0.2s;
}

.contact-btn:hover {
    opacity: 0.9;
}

.footer {
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    font-size: 0.8rem;
    color: var(--text-muted);
    text-align: right;
}

/* Social Links */
.sidebar-links .social-link, .sidebar-social .social-link, .sidebar-contact .social-link {
    display: block;
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    padding: 0.5rem 0.75rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.5rem;
    transition: all 0.2s;
}

.sidebar-links .social-link:hover, .sidebar-social .social-link:hover, .sidebar-contact .social-link:hover {
    background: rgba(59, 130, 246, 0.2);
}

/* Project Links */
.project-link {
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    font-weight: 500;
    display: inline-block;
    margin-top: 0.5rem;
}

.project-link:hover {
    text-decoration: underline;
}

/* Fix overflow */
.sidebar-info p, .sidebar-meta p {
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Contact links */
.contact-details a {
    color: var(--accent, #3b82f6);
    word-break: break-all;
}

.contact-details a:hover {
    text-decoration: underline;
}`;
TEMPLATE_HTML['developer-dark'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Developer</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
<div class="layout">
    <aside class="sidebar">
        <div class="sidebar-inner">
            <div class="profile">
                <img src="{{profileImage}}" alt="{{fullName}}" class="profile-image">
                <h1 class="profile-name">{{fullName}}</h1>
                {{#username}}<p class="profile-username">{{username}}</p>{{/username}}
                {{#title}}<p class="profile-title">{{title}}</p>{{/title}}
            </div>

            <nav class="sidebar-nav">
                <a href="#about" class="nav-link"># About</a>
                <a href="#skills" class="nav-link"># Skills</a>
                <a href="#projects" class="nav-link"># Projects</a>
                <a href="#experience" class="nav-link"># Experience</a>
                <a href="#education" class="nav-link"># Education</a>
                <a href="#contact" class="nav-link"># Contact</a>
            </nav>

            <div class="sidebar-meta">
                {{#location}}<p class="meta-item">📍 {{location}}</p>{{/location}}
                {{#dob}}<p class="meta-item">🎂 {{dob}}</p>{{/dob}}
            </div>

            <div class="sidebar-links">
                {{#email}}<a href="mailto:{{email}}" class="social-link">Email ↗</a>{{/email}}
                {{#github}}<a href="{{github}}" target="_blank" class="social-link">GitHub ↗</a>{{/github}}
                {{#linkedin}}<a href="{{linkedin}}" target="_blank" class="social-link">LinkedIn ↗</a>{{/linkedin}}
            </div>
        </div>
    </aside>

    <main class="main">
        <section id="about" class="section">
            <h2 class="section-title"># About</h2>
            <p class="about-text">{{bio}}</p>
        </section>

        <section id="skills" class="section">
            <h2 class="section-title"># Skills</h2>
            <div class="skills-grid">
                <div class="skills-column">
                    <h3>Technical Skills</h3>
                    {{#skills}}
                    <div class="skill-row">
                        <span class="skill-name">{{name}}</span>
                        {{#level}}<span class="skill-level">{{level}}</span>{{/level}}
                    </div>
                    {{/skills}}
                </div>
                <div class="skills-column">
                    <h3>Tools</h3>
                    {{#tools}}
                    <div class="skill-row">
                        <span class="skill-name">{{name}}</span>
                    </div>
                    {{/tools}}
                </div>
            </div>
        </section>

        <section id="projects" class="section">
            <h2 class="section-title"># Projects</h2>
            <div class="projects-grid">
                {{#projects}}
                <div class="project-card">
                    <h3 class="project-name">{{name}}</h3>
                    <p class="project-description">{{description}}</p>
                    {{#tech}}<p class="project-tech">{{tech}}</p>{{/tech}}
                    {{#githubLink}}<a href="{{githubLink}}" target="_blank" class="project-link">View Repository ↗</a>{{/githubLink}}
                </div>
                {{/projects}}
            </div>
        </section>

        <section id="experience" class="section">
            <h2 class="section-title"># Experience</h2>
            <div class="experience-list">
                {{#experience}}
                <div class="experience-item">
                    <div class="experience-header">
                        <h3 class="experience-role">{{role}}</h3>
                        {{#period}}<span class="experience-period">{{period}}</span>{{/period}}
                    </div>
                    {{#company}}<p class="experience-company">{{company}}</p>{{/company}}
                    {{#description}}<p class="experience-description">{{description}}</p>{{/description}}
                </div>
                {{/experience}}
            </div>
        </section>

        <section id="education" class="section">
            <h2 class="section-title"># Education</h2>
            <div class="education-list">
                {{#education}}
                <div class="education-item">
                    <span class="education-period">{{startYear}} - {{endYear}}</span>
                    <h3 class="education-degree">{{degree}}</h3>
                    <p class="education-institution">{{institution}}</p>
                    {{#description}}<p class="education-description">{{description}}</p>{{/description}}
                </div>
                {{/education}}
            </div>
        </section>

        <section id="contact" class="section">
            <h2 class="section-title"># Contact</h2>
            <div class="contact-info">
                {{#contactMessage}}<p>{{contactMessage}}</p>{{/contactMessage}}
                <div class="contact-details">
                    {{#email}}<p>Email: <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    {{#github}}<p>GitHub: <a href="{{github}}" target="_blank">{{githubUsername}}</a></p>{{/github}}
                    {{#linkedin}}<p>LinkedIn: <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
                </div>
            </div>
        </section>

        <footer class="footer">
            <span>Built with FolioLab</span>
        </footer>
    </main>
</div>
</body>
</html>`;
TEMPLATE_CSS['developer-dark'] = `/* Developer Dark Template - GitHub-style Dark Theme */
:root {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --bg-tertiary: #21262d;
    --border: #30363d;
    --text-primary: #f0f6fc;
    --text-secondary: #8b949e;
    --text-muted: #6e7681;
    --accent: #58a6ff;
    --accent-green: #3fb950;
    --accent-purple: #a371f7;
    --radius: 6px;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif; background: var(--bg-primary); color: var(--text-primary); }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* Layout */
.layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    background: var(--bg-secondary);
    border-right: 1px solid var(--border);
    padding: 2rem;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.sidebar-inner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.profile {
    text-align: center;
}

.profile-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1rem;
    border: 2px solid var(--border);
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
}

.profile-username {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0 0 0.5rem;
}

.profile-title {
    color: var(--text-secondary);
    margin: 0;
    font-size: 0.95rem;
}

.profile-bio {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    padding: 1rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.profile-bio p { margin: 0; }

.profile-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.meta-item svg { color: var(--text-muted); flex-shrink: 0; }
.meta-item a { color: var(--text-secondary); }
.meta-item a:hover { color: var(--accent); }

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.nav-item {
    display: flex;
    align-items: center;
    padding: 0.6rem 0.75rem;
    border-radius: var(--radius);
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: all 0.15s;
}

.nav-item:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    text-decoration: none;
}

.nav-item.active {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    font-weight: 500;
}

.sidebar-social {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: auto;
}

.social-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 0.75rem;
    background: var(--bg-tertiary);
    border-radius: var(--radius);
    color: var(--text-secondary);
    font-size: 0.85rem;
    transition: all 0.15s;
}

.social-btn:hover {
    background: var(--border);
    color: var(--text-primary);
    text-decoration: none;
}

/* Main Content */
.main {
    padding: 2.5rem 3rem;
    max-width: 900px;
}

.section {
    margin-bottom: 3rem;
}

.section-header {
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
}

.section-header h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.hash {
    color: var(--accent);
    font-family: "JetBrains Mono", monospace;
}

.about-content {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
}

.about-content p { margin: 0; }

/* Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.project-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
    transition: border-color 0.2s;
}

.project-card:hover {
    border-color: var(--text-muted);
}

.project-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    color: var(--text-muted);
}

.project-links {
    display: flex;
    gap: 0.75rem;
}

.project-links a {
    color: var(--text-muted);
    transition: color 0.15s;
}

.project-links a:hover {
    color: var(--accent);
}

.project-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: var(--accent);
}

.project-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0 0 1rem;
}

.project-tech {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    color: var(--text-muted);
}

/* Experience */
.experience-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.experience-item {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
}

.experience-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.exp-period {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    color: var(--text-muted);
}

.exp-role {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
}

.exp-company {
    color: var(--accent);
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
}

.exp-desc {
    color: var(--text-secondary);
    font-size: 0.85rem;
    line-height: 1.6;
    margin: 0;
}

/* Skills */
.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    font-size: 0.85rem;
}

.skill-name {
    color: var(--text-primary);
}

.skill-level {
    font-size: 0.7rem;
    color: var(--accent-green);
    background: rgba(63, 185, 80, 0.15);
    padding: 0.15rem 0.4rem;
    border-radius: 3px;
}

/* Contact */
.contact-content {
    text-align: center;
    padding: 2rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius);
}

.contact-content p {
    color: var(--text-secondary);
    margin: 0 0 1.5rem;
}

.contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--accent);
    color: var(--bg-primary);
    border-radius: var(--radius);
    font-weight: 500;
    transition: opacity 0.2s;
}

.contact-btn:hover {
    opacity: 0.9;
    text-decoration: none;
}

/* Footer */
.footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    text-align: center;
    color: var(--text-muted);
    font-size: 0.8rem;
}

/* Social Links */
.sidebar-links .social-link, .sidebar-social .social-link, .sidebar-contact .social-link {
    display: block;
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    padding: 0.5rem 0.75rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.5rem;
    transition: all 0.2s;
}

.sidebar-links .social-link:hover, .sidebar-social .social-link:hover, .sidebar-contact .social-link:hover {
    background: rgba(59, 130, 246, 0.2);
}

/* Project Links */
.project-link {
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    font-weight: 500;
    display: inline-block;
    margin-top: 0.5rem;
}

.project-link:hover {
    text-decoration: underline;
}

/* Fix overflow */
.sidebar-info p, .sidebar-meta p {
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Contact links */
.contact-details a {
    color: var(--accent, #3b82f6);
    word-break: break-all;
}

.contact-details a:hover {
    text-decoration: underline;
}`;
TEMPLATE_HTML['developer-terminal'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Terminal Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
<div class="terminal">
    <div class="terminal-header">
        <div class="terminal-buttons">
            <span class="btn-close"></span>
            <span class="btn-minimize"></span>
            <span class="btn-maximize"></span>
        </div>
        <div class="terminal-title">{{fullName}} — portfolio</div>
    </div>

    <div class="terminal-body">
        <aside class="sidebar">
            <div class="profile">
                <div class="ascii-border">
                    <img src="{{profileImage}}" alt="{{fullName}}" class="profile-image">
                </div>
                <p class="profile-name">{{fullName}}</p>
                {{#handle}}<p class="profile-handle">{{handle}}</p>{{/handle}}
                {{#title}}<p class="profile-title">{{title}}</p>{{/title}}
            </div>

            <nav class="sidebar-nav">
                <a href="#about" class="nav-link">\$ cat about.txt</a>
                <a href="#skills" class="nav-link">\$ ls skills/</a>
                <a href="#projects" class="nav-link">\$ ls projects/</a>
                <a href="#education" class="nav-link">\$ cat education.txt</a>
                <a href="#contact" class="nav-link">\$ cat contact.txt</a>
            </nav>

            <div class="sidebar-info">
                {{#location}}<p>location: {{location}}</p>{{/location}}
                {{#dob}}<p>dob: {{dob}}</p>{{/dob}}
                {{#email}}<p>email: <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                {{#github}}<p>github: <a href="{{github}}" target="_blank">{{githubUsername}}</a></p>{{/github}}
                {{#linkedin}}<p>linkedin: <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
            </div>
        </aside>

        <main class="main">
            <section id="about" class="section">
                <div class="command">\$ cat about.txt</div>
                <div class="output">
                    <p>{{bio}}</p>
                </div>
            </section>

            <section id="skills" class="section">
                <div class="command">\$ ls -la ./skills/</div>
                <div class="output">
                    <div class="skills-section">
                        <p class="dir-header">drwxr-xr-x  skills/</p>
                        {{#skills}}
                        <p class="file-item">-rw-r--r--  {{name}}</p>
                        {{/skills}}
                    </div>
                    <div class="skills-section">
                        <p class="dir-header">drwxr-xr-x  tools/</p>
                        {{#tools}}
                        <p class="file-item">-rw-r--r--  {{name}}</p>
                        {{/tools}}
                    </div>
                </div>
            </section>

            <section id="projects" class="section">
                <div class="command">\$ ls -la ./projects/</div>
                <div class="output">
                    {{#projects}}
                    <div class="project-item">
                        <p class="project-name">drwxr-xr-x  {{name}}/</p>
                        <p class="project-desc">{{description}}</p>
                        {{#tech}}<p class="project-tech">tech: {{tech}}</p>{{/tech}}
                        {{#githubLink}}<p class="project-link">repo: <a href="{{githubLink}}" target="_blank">{{githubLink}}</a></p>{{/githubLink}}
                    </div>
                    {{/projects}}
                </div>
            </section>

            <section id="education" class="section">
                <div class="command">\$ cat education.txt</div>
                <div class="output">
                    {{#education}}
                    <div class="edu-item">
                        <p class="edu-period">[{{startYear}} - {{endYear}}]</p>
                        <p class="edu-degree">{{degree}}</p>
                        <p class="edu-institution">@ {{institution}}</p>
                        {{#description}}<p class="edu-desc">{{description}}</p>{{/description}}
                    </div>
                    {{/education}}
                </div>
            </section>

            <section id="contact" class="section">
                <div class="command">\$ cat contact.txt</div>
                <div class="output">
                    {{#contactMessage}}<p>{{contactMessage}}</p>{{/contactMessage}}
                    <br>
                    {{#email}}<p>email: <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    {{#github}}<p>github: <a href="{{github}}" target="_blank">{{githubUsername}}</a></p>{{/github}}
                    {{#linkedin}}<p>linkedin: <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
                </div>
            </section>

            <footer class="footer">
                <span>\$ echo "Built with FolioLab"</span>
            </footer>
        </main>
    </div>
</div>
</body>
</html>`;
TEMPLATE_CSS['developer-terminal'] = `/* Developer Terminal - Retro Green Theme */
:root {
    --bg: #0c0c0c;
    --bg-light: #1a1a1a;
    --green: #00ff00;
    --green-dim: #00aa00;
    --green-dark: #006600;
    --text: #00ff00;
    --text-dim: #008800;
    --border: #333;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { 
    margin: 0; 
    font-family: "JetBrains Mono", monospace; 
    background: var(--bg); 
    color: var(--text); 
    font-size: 14px;
    line-height: 1.6;
}
a { color: var(--green); text-decoration: none; }
a:hover { text-decoration: underline; }

.terminal {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.terminal-header {
    background: var(--bg-light);
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid var(--border);
}

.terminal-buttons {
    display: flex;
    gap: 8px;
}

.terminal-buttons span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.btn-close { background: #ff5f56; }
.btn-minimize { background: #ffbd2e; }
.btn-maximize { background: #27ca40; }

.terminal-title {
    color: var(--text-dim);
    font-size: 0.85rem;
}

.terminal-body {
    flex: 1;
    display: grid;
    grid-template-columns: 260px 1fr;
}

/* Sidebar */
.sidebar {
    background: var(--bg-light);
    padding: 1.5rem;
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.ascii-border {
    width: 120px;
    height: 120px;
    border: 2px solid var(--green);
    padding: 4px;
    margin: 0 auto;
}

.profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
}

.profile-info {
    font-size: 0.85rem;
    line-height: 1.8;
}

.prompt {
    color: var(--green-dim);
}

.comment {
    color: var(--text-dim);
    font-style: italic;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav a {
    padding: 0.25rem 0;
    color: var(--text);
    transition: color 0.15s;
}

.nav a:hover {
    color: #fff;
}

.links {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.links a {
    color: var(--text-dim);
}

.links a:hover {
    color: var(--text);
}

/* Main */
.main {
    padding: 2rem 2.5rem;
    max-width: 800px;
}

.section {
    margin-bottom: 3rem;
}

.command {
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px dashed var(--border);
}

.output {
    padding-left: 1rem;
    border-left: 2px solid var(--green-dark);
}

.output p {
    margin: 0 0 1rem;
    color: var(--text-dim);
}

/* Projects */
.projects-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.project {
    padding: 1rem;
    background: var(--bg-light);
    border: 1px solid var(--border);
}

.project-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.file {
    color: var(--text);
    font-weight: 500;
}

.permissions {
    color: var(--text-dim);
    font-size: 0.8rem;
}

.project-desc {
    color: var(--text-dim);
    margin: 0 0 0.75rem;
    font-size: 0.9rem;
}

.project-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tech {
    color: var(--green-dim);
    font-size: 0.8rem;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-links a {
    color: var(--text-dim);
    font-size: 0.85rem;
}

/* Experience */
.exp-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px dashed var(--border);
}

.exp-item:last-child {
    border-bottom: none;
}

.exp-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
}

.exp-role {
    color: var(--text);
    font-weight: 500;
}

.exp-period {
    color: var(--text-dim);
    font-size: 0.85rem;
}

.exp-company {
    color: var(--green-dim);
    font-size: 0.9rem;
}

.exp-desc {
    color: var(--text-dim);
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
}

/* Skills */
.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill {
    padding: 0.4rem 0.8rem;
    background: var(--bg-light);
    border: 1px solid var(--green-dark);
    font-size: 0.85rem;
}

/* Contact */
.contact-link {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--green);
    transition: all 0.2s;
}

.contact-link:hover {
    background: var(--green);
    color: var(--bg);
    text-decoration: none;
}

/* Footer */
.footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px dashed var(--border);
}

/* Social Links */
.sidebar-links .social-link, .sidebar-social .social-link, .sidebar-contact .social-link {
    display: block;
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    padding: 0.5rem 0.75rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.5rem;
    transition: all 0.2s;
}

.sidebar-links .social-link:hover, .sidebar-social .social-link:hover, .sidebar-contact .social-link:hover {
    background: rgba(59, 130, 246, 0.2);
}

/* Project Links */
.project-link {
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    font-weight: 500;
    display: inline-block;
    margin-top: 0.5rem;
}

.project-link:hover {
    text-decoration: underline;
}

/* Fix overflow */
.sidebar-info p, .sidebar-meta p {
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Contact links */
.contact-details a {
    color: var(--accent, #3b82f6);
    word-break: break-all;
}

.contact-details a:hover {
    text-decoration: underline;
}`;
TEMPLATE_HTML['designer-studio'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Designer Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
</head>
<body>
<div class="layout">
    <aside class="sidebar">
        <div class="sidebar-inner">
            <div class="profile">
                <img src="{{profileImage}}" alt="{{fullName}}" class="profile-image">
                <h1 class="profile-name">{{fullName}}</h1>
                {{#title}}<p class="profile-title">{{title}}</p>{{/title}}
                {{#tagline}}<p class="profile-tagline">{{tagline}}</p>{{/tagline}}
            </div>

            <nav class="sidebar-nav">
                <a href="#about" class="nav-link">About</a>
                <a href="#work" class="nav-link">Work</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#education" class="nav-link">Background</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="sidebar-info">
                {{#location}}<p class="info-item">📍 {{location}}</p>{{/location}}
                {{#dob}}<p class="info-item">🎂 {{dob}}</p>{{/dob}}
            </div>

            <div class="sidebar-contact">
                {{#email}}<a href="mailto:{{email}}" class="social-link">Email ↗</a>{{/email}}
                {{#linkedin}}<a href="{{linkedin}}" target="_blank" class="social-link">LinkedIn ↗</a>{{/linkedin}}
                {{#dribbble}}<a href="{{dribbble}}" target="_blank" class="social-link">Dribbble ↗</a>{{/dribbble}}
            </div>
        </div>
    </aside>

    <main class="main">
        <section id="about" class="section">
            <h2 class="section-title">About</h2>
            <p class="about-text">{{bio}}</p>
        </section>

        <section id="work" class="section">
            <h2 class="section-title">Selected Work</h2>
            <div class="projects-grid">
                {{#projects}}
                <div class="project-card">
                    {{#category}}<span class="project-category">{{category}}</span>{{/category}}
                    <h3 class="project-name">{{name}}</h3>
                    <p class="project-description">{{description}}</p>
                </div>
                {{/projects}}
            </div>
        </section>

        <section id="skills" class="section">
            <h2 class="section-title">Expertise & Tools</h2>
            <div class="skills-grid">
                <div class="skills-column">
                    <h3>Skills</h3>
                    <ul class="skills-list">
                        {{#skills}}
                        <li>{{name}}</li>
                        {{/skills}}
                    </ul>
                </div>
                <div class="skills-column">
                    <h3>Tools</h3>
                    <ul class="skills-list">
                        {{#tools}}
                        <li>{{name}}</li>
                        {{/tools}}
                    </ul>
                </div>
            </div>
        </section>

        <section id="education" class="section">
            <h2 class="section-title">Background</h2>
            <div class="education-list">
                {{#education}}
                <div class="education-item">
                    <span class="education-year">{{startYear}} - {{endYear}}</span>
                    <h3 class="education-degree">{{degree}}</h3>
                    <p class="education-school">{{institution}}</p>
                    {{#description}}<p class="education-description">{{description}}</p>{{/description}}
                </div>
                {{/education}}
            </div>
        </section>

        <section id="contact" class="section">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-info">
                {{#contactMessage}}<p>{{contactMessage}}</p>{{/contactMessage}}
                <div class="contact-details">
                    {{#email}}<p>Email: <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    {{#linkedin}}<p>LinkedIn: <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
                    {{#dribbble}}<p>Dribbble: <a href="{{dribbble}}" target="_blank">{{dribbbleUsername}}</a></p>{{/dribbble}}
                </div>
            </div>
        </section>

        <footer class="footer">
            <span>Built with FolioLab</span>
        </footer>
    </main>
</div>
</body>
</html>`;
TEMPLATE_CSS['designer-studio'] = `/* Designer Studio Template - Warm Elegant Theme */
:root {
    --bg-sidebar: #1c1917;
    --bg-main: #faf7f5;
    --bg-card: #ffffff;
    --accent: #b45309;
    --accent-light: #fef3c7;
    --text-dark: #1c1917;
    --text-muted: #78716c;
    --text-light: #e7e5e4;
    --border: #e7e5e4;
    --radius: 12px;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: "DM Sans", system-ui, sans-serif; background: var(--bg-main); color: var(--text-dark); }
a { text-decoration: none; color: inherit; }

/* Layout */
.layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    background: var(--bg-sidebar);
    color: var(--text-light);
    padding: 2.5rem 1.75rem;
    position: sticky;
    top: 0;
    height: 100vh;
}

.sidebar-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2rem;
}

.brand-tag {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.5rem;
}

.brand-name {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
    color: #fff;
}

.brand-title {
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
    color: #a8a29e;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav a {
    padding: 0.5rem 0;
    font-size: 0.9rem;
    color: #d6d3d1;
    border-bottom: 1px dashed transparent;
    transition: all 0.2s;
}

.nav a:hover {
    color: var(--accent);
    border-color: var(--accent);
}

.sidebar-location {
    font-size: 0.85rem;
    color: #a8a29e;
}

.sidebar-contact {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.sidebar-contact a {
    font-size: 0.85rem;
    color: #d6d3d1;
    padding: 0.3rem 0;
    transition: color 0.2s;
}

.sidebar-contact a:hover {
    color: var(--accent);
}

/* Main */
.main {
    padding: 3rem 3.5rem;
    max-width: 900px;
}

.section {
    margin-bottom: 4rem;
}

.section-header {
    margin-bottom: 2rem;
}

.section-header h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
}

.section-header p {
    color: var(--text-muted);
    margin: 0;
    font-size: 0.9rem;
}

/* Intro */
.intro-content {
    display: flex;
    gap: 2.5rem;
    align-items: flex-start;
}

.intro-text {
    flex: 1;
}

.tagline {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2rem;
    line-height: 1.3;
    margin: 0 0 1.5rem;
    font-weight: 500;
}

.bio {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.8;
    margin: 0;
}

.intro-photo {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--accent);
}

.intro-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Work */
.work-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.work-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
}

.work-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

.work-meta {
    margin-bottom: 0.75rem;
}

.work-category {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    background: var(--accent-light);
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
}

.work-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.25rem;
    margin: 0 0 0.5rem;
    font-weight: 600;
}

.work-desc {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 0 1rem;
}

.work-link {
    font-size: 0.85rem;
    color: var(--text-dark);
    font-weight: 500;
    border-bottom: 1px solid var(--text-dark);
    padding-bottom: 2px;
}

.work-link:hover {
    color: var(--accent);
    border-color: var(--accent);
}

/* Expertise */
.expertise-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.expertise-col h3 {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.tag-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag-list li {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-size: 0.85rem;
}

/* Education */
.education-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.edu-item {
    display: flex;
    gap: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
}

.edu-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.edu-year {
    font-size: 0.8rem;
    color: var(--text-muted);
    min-width: 100px;
}

.edu-content h4 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    font-weight: 600;
}

.edu-content p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Contact */
.section-contact {
    margin-bottom: 0;
}

.contact-box {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2.5rem;
    text-align: center;
}

.contact-box p {
    color: var(--text-muted);
    margin: 0 0 1.5rem;
    font-size: 1rem;
}

.contact-cta {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: var(--accent);
    color: #fff;
    border-radius: 999px;
    font-weight: 500;
    transition: opacity 0.2s;
}

.contact-cta:hover {
    opacity: 0.9;
}

/* Footer */
.footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px dashed var(--border);
    text-align: right;
    font-size: 0.8rem;
    color: var(--text-muted);
}

/* Social Links */
.sidebar-links .social-link, .sidebar-social .social-link, .sidebar-contact .social-link {
    display: block;
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    padding: 0.5rem 0.75rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.5rem;
    transition: all 0.2s;
}

.sidebar-links .social-link:hover, .sidebar-social .social-link:hover, .sidebar-contact .social-link:hover {
    background: rgba(59, 130, 246, 0.2);
}

/* Project Links */
.project-link {
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    font-weight: 500;
    display: inline-block;
    margin-top: 0.5rem;
}

.project-link:hover {
    text-decoration: underline;
}

/* Fix overflow */
.sidebar-info p, .sidebar-meta p {
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Contact links */
.contact-details a {
    color: var(--accent, #3b82f6);
    word-break: break-all;
}

.contact-details a:hover {
    text-decoration: underline;
}`;
TEMPLATE_HTML['designer-minimal'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
<div class="layout">
    <header class="header">
        <div class="header-left">
            <h1 class="site-name">{{fullName}}</h1>
            {{#title}}<p class="site-title">{{title}}</p>{{/title}}
        </div>
        <nav class="header-nav">
            <a href="#about" class="nav-link">About</a>
            <a href="#work" class="nav-link">Work</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#contact" class="nav-link">Contact</a>
        </nav>
    </header>

    <main class="main">
        <section id="about" class="section section-hero">
            <div class="hero-content">
                <img src="{{profileImage}}" alt="{{fullName}}" class="hero-image">
                <div class="hero-text">
                    {{#tagline}}<h2 class="hero-title">{{tagline}}</h2>{{/tagline}}
                    <p class="hero-bio">{{bio}}</p>
                    <div class="hero-meta">
                        {{#location}}<p>📍 {{location}}</p>{{/location}}
                        {{#dob}}<p>🎂 {{dob}}</p>{{/dob}}
                        {{#email}}<p>✉️ <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    </div>
                </div>
            </div>
        </section>

        <section id="work" class="section">
            <h2 class="section-title">Selected Work</h2>
            <div class="work-list">
                {{#projects}}
                <div class="work-item">
                    {{#year}}<span class="work-year">{{year}}</span>{{/year}}
                    <h3 class="work-name">{{name}}</h3>
                    <p class="work-description">{{description}}</p>
                </div>
                {{/projects}}
            </div>
        </section>

        <section id="skills" class="section">
            <h2 class="section-title">Skills & Tools</h2>
            <div class="skills-container">
                <div class="skills-group">
                    <h3>Skills</h3>
                    <div class="skills-list">
                        {{#skills}}
                        <span class="skill-tag">{{name}}</span>
                        {{/skills}}
                    </div>
                </div>
                <div class="skills-group">
                    <h3>Tools</h3>
                    <div class="skills-list">
                        {{#tools}}
                        <span class="skill-tag">{{name}}</span>
                        {{/tools}}
                    </div>
                </div>
            </div>
        </section>

        <section id="education" class="section">
            <h2 class="section-title">Education</h2>
            <div class="education-list">
                {{#education}}
                <div class="education-item">
                    <span class="education-year">{{startYear}} - {{endYear}}</span>
                    <h3 class="education-degree">{{degree}}</h3>
                    <p class="education-school">{{institution}}</p>
                </div>
                {{/education}}
            </div>
        </section>

        <section id="contact" class="section section-contact">
            <h2 class="section-title">Contact</h2>
            <div class="contact-info">
                {{#contactMessage}}<p class="contact-message">{{contactMessage}}</p>{{/contactMessage}}
                <div class="contact-details">
                    {{#email}}<p>Email: <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    {{#linkedin}}<p>LinkedIn: <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
                    {{#website}}<p>Website: <a href="{{website}}" target="_blank">{{website}}</a></p>{{/website}}
                </div>
            </div>
        </section>

        <footer class="footer">
            <span>Built with FolioLab</span>
        </footer>
    </main>
</div>
</body>
</html>`;
TEMPLATE_CSS['designer-minimal'] = `/* Designer Minimal - Elegant Serif Theme */
:root {
    --bg: #fefefe;
    --text: #1a1a1a;
    --text-muted: #666;
    --border: #e5e5e5;
    --accent: #1a1a1a;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { 
    margin: 0; 
    font-family: "Inter", sans-serif; 
    background: var(--bg); 
    color: var(--text);
    font-size: 16px;
    line-height: 1.7;
}
a { color: var(--text); text-decoration: none; }

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 3rem;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3rem 0;
    border-bottom: 1px solid var(--border);
}

.name {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    letter-spacing: -0.02em;
}

.title {
    color: var(--text-muted);
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav a {
    font-size: 0.9rem;
    color: var(--text-muted);
    transition: color 0.2s;
}

.nav a:hover {
    color: var(--text);
}

/* Hero */
.hero {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 4rem;
    padding: 5rem 0;
    align-items: center;
}

.hero-bio {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 2.25rem;
    line-height: 1.4;
    margin: 0;
    font-weight: 400;
}

.hero-image {
    aspect-ratio: 1;
    overflow: hidden;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
}

/* Sections */
.section {
    padding: 4rem 0;
    border-top: 1px solid var(--border);
}

.section-title {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 0.85rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin: 0 0 3rem;
}

/* Work */
.work-list {
    display: flex;
    flex-direction: column;
}

.work-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem 0;
    border-bottom: 1px solid var(--border);
}

.work-item:last-child {
    border-bottom: none;
}

.work-year {
    font-size: 0.8rem;
    color: var(--text-muted);
    display: block;
    margin-bottom: 0.5rem;
}

.work-name {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 0 0.5rem;
}

.work-desc {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin: 0;
    max-width: 500px;
}

.work-link {
    font-size: 0.9rem;
    border-bottom: 1px solid var(--text);
    padding-bottom: 2px;
    transition: opacity 0.2s;
}

.work-link:hover {
    opacity: 0.6;
}

/* About */
.about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}

.about-col h3 {
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0 0 1.5rem;
    color: var(--text-muted);
}

.skills-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.skills-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border);
    font-size: 0.9rem;
}

.edu-item {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.6;
}

.edu-item span {
    color: var(--text-muted);
}

.about-col p {
    margin: 0;
    font-size: 0.9rem;
}

/* Contact */
.section-contact {
    text-align: center;
    padding: 5rem 0;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.contact-link {
    font-size: 0.9rem;
    border-bottom: 1px solid var(--text);
    padding-bottom: 2px;
    transition: opacity 0.2s;
}

.contact-link:hover {
    opacity: 0.6;
}

/* Footer */
.footer {
    padding: 2rem 0;
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
}`;
TEMPLATE_HTML['multipurpose'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{fullName}} | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet">
</head>
<body>
<div class="layout">
    <aside class="sidebar">
        <div class="sidebar-inner">
            <div class="profile">
                <img src="{{profileImage}}" alt="{{fullName}}" class="profile-image">
                <h1 class="profile-name">{{fullName}}</h1>
                {{#title}}<p class="profile-title">{{title}}</p>{{/title}}
                {{#tagline}}<p class="profile-tagline">{{tagline}}</p>{{/tagline}}
            </div>

            <nav class="sidebar-nav">
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#work" class="nav-link">Work</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="sidebar-info">
                {{#location}}<p class="info-item">📍 {{location}}</p>{{/location}}
                {{#dob}}<p class="info-item">🎂 {{dob}}</p>{{/dob}}
                {{#email}}<p class="info-item">✉️ {{email}}</p>{{/email}}
            </div>

            <div class="sidebar-social">
                {{#linkedin}}<a href="{{linkedin}}" target="_blank" class="social-link">LinkedIn ↗</a>{{/linkedin}}
                {{#website}}<a href="{{website}}" target="_blank" class="social-link">Website ↗</a>{{/website}}
            </div>
        </div>
    </aside>

    <main class="main">
        <section id="about" class="section">
            <h2 class="section-title">About Me</h2>
            <p class="about-text">{{bio}}</p>
        </section>

        <section id="skills" class="section">
            <h2 class="section-title">Skills & Tools</h2>
            <div class="skills-grid">
                <div class="skills-column">
                    <h3>Skills</h3>
                    <div class="skills-list">
                        {{#skills}}
                        <span class="skill-tag">{{name}}</span>
                        {{/skills}}
                    </div>
                </div>
                <div class="skills-column">
                    <h3>Tools</h3>
                    <div class="skills-list">
                        {{#tools}}
                        <span class="skill-tag">{{name}}</span>
                        {{/tools}}
                    </div>
                </div>
            </div>
        </section>

        <section id="work" class="section">
            <h2 class="section-title">Work & Projects</h2>
            <div class="projects-grid">
                {{#projects}}
                <div class="project-card">
                    {{#category}}<span class="project-category">{{category}}</span>{{/category}}
                    <h3 class="project-name">{{name}}</h3>
                    <p class="project-description">{{description}}</p>
                </div>
                {{/projects}}
            </div>
        </section>

        <section id="experience" class="section">
            <h2 class="section-title">Experience</h2>
            <div class="experience-list">
                {{#experience}}
                <div class="experience-item">
                    {{#period}}<span class="experience-period">{{period}}</span>{{/period}}
                    <h3 class="experience-role">{{role}}</h3>
                    {{#organization}}<p class="experience-org">{{organization}}</p>{{/organization}}
                    {{#description}}<p class="experience-description">{{description}}</p>{{/description}}
                </div>
                {{/experience}}
            </div>
        </section>

        <section id="education" class="section">
            <h2 class="section-title">Education</h2>
            <div class="education-list">
                {{#education}}
                <div class="education-item">
                    <span class="education-year">{{startYear}} - {{endYear}}</span>
                    <h3 class="education-degree">{{degree}}</h3>
                    <p class="education-institution">{{institution}}</p>
                    {{#description}}<p class="education-description">{{description}}</p>{{/description}}
                </div>
                {{/education}}
            </div>
        </section>

        <section id="contact" class="section">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-info">
                {{#contactMessage}}<p class="contact-message">{{contactMessage}}</p>{{/contactMessage}}
                <div class="contact-details">
                    {{#email}}<p>Email: <a href="mailto:{{email}}">{{email}}</a></p>{{/email}}
                    {{#phone}}<p>Phone: {{phone}}</p>{{/phone}}
                    {{#linkedin}}<p>LinkedIn: <a href="{{linkedin}}" target="_blank">{{linkedinUsername}}</a></p>{{/linkedin}}
                    {{#website}}<p>Website: <a href="{{website}}" target="_blank">{{website}}</a></p>{{/website}}
                </div>
            </div>
        </section>

        <footer class="footer">
            <span>Built with FolioLab</span>
        </footer>
    </main>
</div>
</body>
</html>`;
TEMPLATE_CSS['multipurpose'] = `/* Multipurpose Template - Teal Accent Theme */
:root {
    --bg-sidebar: #0f172a;
    --bg-main: #f8fafc;
    --bg-card: #ffffff;
    --accent: #14b8a6;
    --accent-light: #ccfbf1;
    --text-dark: #0f172a;
    --text-muted: #64748b;
    --text-light: #e2e8f0;
    --border: #e2e8f0;
    --radius: 12px;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: "DM Sans", sans-serif; background: var(--bg-main); color: var(--text-dark); }
a { text-decoration: none; color: inherit; }

.layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    background: var(--bg-sidebar);
    color: var(--text-light);
    padding: 2.5rem 2rem;
    position: sticky;
    top: 0;
    height: 100vh;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2rem;
}

.brand {
    text-align: center;
}

.brand-img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--accent);
    margin-bottom: 1rem;
}

.brand-name {
    font-family: "DM Serif Display", Georgia, serif;
    font-size: 1.5rem;
    margin: 0 0 0.25rem;
}

.brand-title {
    color: var(--accent);
    margin: 0;
    font-size: 0.9rem;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav a {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #cbd5e1;
    transition: all 0.2s;
}

.nav a:hover {
    background: rgba(20, 184, 166, 0.15);
    color: var(--accent);
}

.sidebar-info {
    font-size: 0.85rem;
    color: #94a3b8;
}

.sidebar-info p { margin: 0; }

.sidebar-links {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.sidebar-links a {
    font-size: 0.85rem;
    color: #94a3b8;
    padding: 0.3rem 0;
}

.sidebar-links a:hover {
    color: var(--accent);
}

/* Main */
.main {
    padding: 3.5rem 4rem;
    max-width: 900px;
}

.section {
    margin-bottom: 4rem;
}

.section h2 {
    font-family: "DM Serif Display", Georgia, serif;
    font-size: 1.5rem;
    margin: 0 0 2rem;
}

/* Hero */
.hero {
    padding-top: 0;
}

.tagline {
    font-family: "DM Serif Display", Georgia, serif;
    font-size: 2rem;
    line-height: 1.3;
    margin: 0 0 1.5rem;
}

.bio {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0 0 2rem;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill {
    padding: 0.5rem 1rem;
    background: var(--accent-light);
    color: #0d9488;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Work */
.work-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.work-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    transition: all 0.2s;
}

.work-card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.06);
}

.work-category {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    background: var(--accent-light);
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
}

.work-card h3 {
    font-size: 1.1rem;
    margin: 0.75rem 0 0.5rem;
}

.work-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 0 1rem;
}

.work-link {
    font-size: 0.85rem;
    color: var(--text-dark);
    font-weight: 500;
    border-bottom: 1px solid;
}

.work-link:hover {
    color: var(--accent);
}

/* Timeline */
.timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.timeline-item {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 2rem;
}

.timeline-period {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.timeline-content h3 {
    font-size: 1rem;
    margin: 0 0 0.25rem;
}

.timeline-org {
    color: var(--accent);
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
}

.timeline-desc {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
}

/* Education */
.edu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.edu-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
}

.edu-item h3 {
    font-size: 1rem;
    margin: 0 0 0.25rem;
}

.edu-item p {
    color: var(--text-muted);
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
}

.edu-item span {
    font-size: 0.8rem;
    color: var(--accent);
}

/* Contact */
.section-contact {
    text-align: center;
    padding: 3rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
}

.contact-email {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 500;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 4px;
    margin-bottom: 0.5rem;
}

.contact-email:hover {
    color: var(--accent);
}

.contact-info p {
    color: var(--text-muted);
    margin: 0;
}

.footer {
    padding-top: 2rem;
    text-align: right;
    font-size: 0.8rem;
    color: var(--text-muted);
}

/* Social Links */
.sidebar-links .social-link, .sidebar-social .social-link, .sidebar-contact .social-link {
    display: block;
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    padding: 0.5rem 0.75rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.5rem;
    transition: all 0.2s;
}

.sidebar-links .social-link:hover, .sidebar-social .social-link:hover, .sidebar-contact .social-link:hover {
    background: rgba(59, 130, 246, 0.2);
}

/* Project Links */
.project-link {
    font-size: 0.85rem;
    color: var(--accent, #3b82f6);
    font-weight: 500;
    display: inline-block;
    margin-top: 0.5rem;
}

.project-link:hover {
    text-decoration: underline;
}

/* Fix overflow */
.sidebar-info p, .sidebar-meta p {
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Contact links */
.contact-details a {
    color: var(--accent, #3b82f6);
    word-break: break-all;
}

.contact-details a:hover {
    text-decoration: underline;
}`;
function getTemplateHtml(id) { return TEMPLATE_HTML[id] || null; }
function getTemplateCss(id) { return TEMPLATE_CSS[id] || null; }
