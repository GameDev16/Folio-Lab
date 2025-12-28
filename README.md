# FolioLab – Portfolio Builder

A schema-driven, client-side static portfolio website generator. Select a template, fill your details, and download a ready-to-host website.

*A simpler way to stand out.*

![FolioLab](https://img.shields.io/badge/Version-1.0.0-22d3ee) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **No Backend Required** – 100% client-side, runs entirely in the browser
- **Schema-Driven** – Templates define their own form fields via `schema.json`
- **Live Preview** – See changes in real-time as you fill the form
- **ZIP Export** – Download a complete, ready-to-deploy website
- **LocalStorage** – Your progress is saved automatically
- **Clean Code** – Pure HTML/CSS output you can customize forever
- **Responsive** – All templates are mobile-friendly

## 🚀 Quick Start

1. Open `index.html` in your browser (or use a local server)
2. Browse available templates
3. Select a template and fill in your details
4. Preview your portfolio in real-time
5. Download the ZIP and deploy anywhere!

```bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node's http-server
npx http-server
```

## 📁 Project Structure

```
portfolio-builder/
├── index.html              # Landing page
├── template.html           # Template gallery
├── builder.html            # Portfolio builder
├── css/
│   └── main.css            # Main stylesheet
├── js/
│   ├── templates.js        # Template registry
│   ├── gallery.js          # Gallery page logic
│   └── builder.js          # Builder logic (form, preview, export)
└── templates/
    ├── developer/          # Developer Pro template
    │   ├── schema.json     # Form field definitions
    │   ├── template.html   # HTML with placeholders
    │   └── styles.css      # Template styles
    ├── designer/           # Creative Studio template
    │   ├── schema.json
    │   ├── template.html
    │   └── styles.css
    └── minimal/            # Clean Slate template
        ├── schema.json
        ├── template.html
        └── styles.css
```

## 🎨 Available Templates

| Template | Category | Description |
|----------|----------|-------------|
| **Developer Pro** | Developer | Modern dark theme for software engineers |
| **Creative Studio** | Designer | Elegant, gallery-style for creatives |
| **Clean Slate** | Minimal | Typography-focused for any professional |

## 🔧 How It Works

### Schema-Driven Forms

Each template includes a `schema.json` that defines form fields:

```json
{
  "name": "Template Name",
  "fields": [
    {
      "name": "fullName",
      "label": "Full Name",
      "type": "text",
      "required": true,
      "section": "Personal Info"
    },
    {
      "name": "projects",
      "label": "Projects",
      "type": "repeater",
      "fields": [
        { "name": "projectName", "type": "text" },
        { "name": "projectDescription", "type": "textarea" }
      ]
    }
  ]
}
```

### Placeholder Syntax

Templates use Mustache-style placeholders:

```html
<!-- Simple placeholder -->
<h1>{{fullName}}</h1>

<!-- Repeater/loop -->
{{#projects}}
<div class="project">
  <h3>{{projectName}}</h3>
  <p>{{projectDescription}}</p>
</div>
{{/projects}}
```

## 📦 Adding New Templates

1. Create a new folder in `templates/`
2. Add the required files:
   - `schema.json` – Form field definitions
   - `template.html` – HTML with placeholders
   - `styles.css` – Template styles
3. Register the template in `js/templates.js`

```javascript
const TEMPLATES = {
    // ...existing templates
    mytemplate: {
        id: 'mytemplate',
        name: 'My Template',
        category: 'custom',
        description: 'Description here',
        path: 'templates/mytemplate/'
    }
};
```

## 🌐 Deployment

The generated portfolio is a static site. Deploy it anywhere:

- **Netlify** – Drag & drop at [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** – Import at [vercel.com/new](https://vercel.com/new)
- **GitHub Pages** – Push to repo, enable Pages in settings
- **Any Web Host** – Just upload the files

## 🛠️ Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – Modern styling with CSS Variables
- **Vanilla JavaScript (ES6+)** – No frameworks
- **JSZip** – ZIP file generation
- **Google Fonts** – Typography

## 📄 License

MIT License – feel free to use, modify, and distribute.

---

Built with ❤️ by FolioLab
