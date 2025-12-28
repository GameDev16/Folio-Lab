# FolioLab – Portfolio Builder

A simple, offline-capable portfolio builder that generates clean HTML/CSS websites you can host anywhere.

🌐 **Live Demo:** [foliolab.netlify.app](https://foliolab.netlify.app)

---

## ✨ Features

- **8 Professional Templates** – Designed for students, developers, and designers
- **100% Offline** – Works without internet after initial load
- **No Framework Lock-in** – Pure HTML/CSS output you own forever
- **Live Preview** – See changes in real-time as you fill the form
- **One-Click Download** – Get a ready-to-deploy ZIP file
- **Mobile Responsive** – All templates work on any device
- **Smart URL Handling** – Enter username or full URL for social links

---

## 📁 Project Structure

```
portfolio-builder/
├── index.html              # Landing page
├── template.html           # Template gallery
├── builder.html            # Form builder page
├── css/
│   └── main.css            # Global styles
├── js/
│   ├── templates.js        # Template registry & schemas
│   ├── template-data.js    # Embedded template HTML/CSS
│   ├── gallery.js          # Template gallery functionality
│   └── builder.js          # Form builder & export logic
├── templates/
│   ├── student-starter/    # Orange accent, activity cards
│   ├── student-sidebar/    # Blue accent, clean sidebar
│   ├── developer-starter/  # Purple accent, experience focus
│   ├── developer-dark/     # GitHub-style dark theme
│   ├── developer-terminal/ # Retro terminal aesthetic
│   ├── designer-studio/    # Gold accent, hero header layout
│   ├── designer-minimal/   # Typography-focused, top nav
│   └── multipurpose/       # Teal accent, multi-section
└── assets/
    └── logo.png            # FolioLab logo
```

---

## 🎨 Available Templates

| Template | Category | Description |
|----------|----------|-------------|
| **Student Starter** | Student | Sidebar layout with orange accents and activity cards |
| **Student Sidebar** | Student | Clean blue sidebar with minimal design |
| **Developer Starter** | Developer | Light theme with purple accents, experience section |
| **Developer Dark** | Developer | GitHub-inspired dark theme |
| **Developer Terminal** | Developer | Retro terminal/command-line aesthetic |
| **Designer Studio** | Designer | Elegant hero header with gold accents and timeline |
| **Designer Minimal** | Designer | Typography-focused with top navigation |
| **Multipurpose** | Multipurpose | Versatile teal theme for any profession |

---

## 🚀 Getting Started

### Option 1: Use Online
Visit [foliolab.netlify.app](https://foliolab.netlify.app) and start building!

### Option 2: Run Locally
1. Download or clone this repository
2. Open `index.html` in your browser
3. No server required – works directly from file system

### Option 3: Self-Host
Deploy the entire folder to any static hosting:
- **Netlify** – Drag & drop the folder
- **Vercel** – Import from GitHub
- **GitHub Pages** – Push to `gh-pages` branch
- **Any web server** – Just upload the files

---

## 📝 How to Use

1. **Choose a Template** – Browse the gallery and pick a design
2. **Fill Your Details** – Complete the form with your information
3. **Preview** – Click "Preview" to see your portfolio
4. **Download** – Click "Download ZIP" to get your files
5. **Deploy** – Upload the ZIP contents to any hosting service

---

## 🔧 Form Fields

### Required Fields (All Templates)
- Profile Photo
- Full Name
- Email
- Date of Birth
- Tagline
- About Me / Bio
- Education (with Start Year & End Year)
- Skills
- Tools

### Optional Fields (Vary by Template)
- Location
- Job Title
- GitHub Profile URL
- LinkedIn Profile URL
- Dribbble Profile URL
- Website URL
- Projects
- Experience
- Contact Message

### Social Links
Enter either format – the builder handles both:
- Username: `GameDev16`
- Full URL: `https://github.com/GameDev16`

The portfolio displays the username but links to the full URL.

---

## 📦 Output Structure

When you download your portfolio, you get:

```
your-portfolio/
├── index.html    # Your portfolio page
└── styles.css    # All styling
```

That's it! Two files, ready to deploy anywhere.

---

## 🛠️ Customization

### After Download
The exported HTML/CSS is fully editable:
- Change colors in `styles.css` (look for CSS variables at the top)
- Modify content directly in `index.html`
- Add new sections as needed

### Template Development
To create a new template:
1. Create a folder in `templates/` with your template ID
2. Add `template.html`, `styles.css`, and `schema.json`
3. Register the template in `js/templates.js`
4. Run the template data generator to embed it

---

## 🌐 Deployment Guide

### Netlify (Recommended)
1. Download your portfolio ZIP
2. Extract the files
3. Go to [netlify.com](https://netlify.com)
4. Drag & drop the folder
5. Your site is live!

### GitHub Pages
1. Create a new repository
2. Upload `index.html` and `styles.css`
3. Go to Settings → Pages
4. Select your branch and save
5. Your site is live at `username.github.io/repo-name`

### Vercel
1. Push your files to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy with default settings

---

## ❓ FAQ

**Q: Do I need to know coding?**
A: No! Just fill the form and download.

**Q: Can I edit the portfolio after downloading?**
A: Yes! It's plain HTML/CSS you can edit in any text editor.

**Q: Is it free?**
A: Yes, completely free and open source.

**Q: Does it work offline?**
A: Yes, after the initial page load, everything works offline.

**Q: Why do I see a security warning on Windows?**
A: Windows flags all files downloaded from the internet. Right-click the ZIP → Properties → Check "Unblock" → Apply, then extract.

---

## 📧 Contact

Have questions or feedback?

📩 **Email:** [foliolab.devs@gmail.com](mailto:foliolab.devs@gmail.com)

---

## 📄 License

MIT License – Use it however you want!

---

Built with ❤️ by the FolioLab team
