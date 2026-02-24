# Aditya Patel - Portfolio Website

A modern, multi-page portfolio website showcasing experience in Trust & Safety and Network Security.

## 📁 Structure

```
portfolio-site/
├── index.html              # Home page
├── about.html              # About/CV page
├── experience.html         # Detailed experience timeline
├── skills.html            # Skills & certifications
├── blog.html              # Blog listing page
├── projects.html          # Projects showcase
├── contact.html           # Contact information
├── css/
│   └── style.css          # All styles
├── js/
│   └── main.js            # Navigation & interactions
└── blog/
    ├── understanding-10dlc.html
    ├── email-authentication.html
    └── trust-safety-fundamentals.html
```

## 🚀 How to Use

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub repository named `yourusername.github.io`
2. Upload all files (maintaining folder structure)
3. Go to Settings → Pages → Enable from main branch
4. Visit `https://yourusername.github.io`

### Option 2: Netlify
1. Drag and drop the entire folder to netlify.com/drop
2. Get instant live URL

### Option 3: Local Testing
1. Simply open `index.html` in any web browser
2. All pages work locally without a server

## ✏️ How to Update Content

### Adding New Skills
1. Open `skills.html`
2. Find the appropriate skill category (e.g., "Trust & Safety")
3. Add: `<span class="skill-tag">Your New Skill</span>`

### Adding New Experience
1. Open `experience.html`
2. Copy an existing `<div class="timeline-item">` block
3. Update company, role, dates, and responsibilities
4. Paste at the top of the timeline

### Writing New Blog Posts
1. Copy one of the existing blog post files in `blog/` folder
2. Rename it (e.g., `my-new-post.html`)
3. Update the content, title, and metadata
4. Add a card for it in `blog.html` and `index.html`

### Updating Contact Info
1. Open `contact.html`
2. Find the contact cards and update email, phone, or location
3. Also update in footer sections across all pages

### Changing Colors/Theme
1. Open `css/style.css`
2. Edit the CSS variables at the top:
   - `--bg-primary`: Main background
   - `--accent`: Primary accent color
   - `--text-primary`: Main text color

## 📝 Tips

- **Keep it updated**: Add new skills and experiences as you gain them
- **Write regularly**: Blog posts show expertise and improve SEO
- **Test on mobile**: Always check how pages look on different devices
- **Use your own photos**: Replace emoji avatars with actual photos for more professionalism

## 🎨 Customization Ideas

- Add a photo gallery
- Include testimonials from colleagues
- Add downloadable resume PDF
- Create project case studies
- Add social media links
- Integrate analytics (Google Analytics)

## 🛠️ Technical Details

- **No build process needed** - pure HTML/CSS/JS
- **Mobile responsive** - works on all devices
- **Fast loading** - minimal dependencies
- **SEO friendly** - proper meta tags and semantic HTML
- **Accessible** - follows web accessibility guidelines

## 📞 Need Help?

If you need assistance updating or customizing your portfolio, feel free to reach out!

---

**Built with:** HTML5, CSS3, JavaScript
**Fonts:** Google Fonts (Inter, JetBrains Mono)
**Hosting:** GitHub Pages (free & unlimited)
