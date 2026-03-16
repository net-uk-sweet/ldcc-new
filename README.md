# LDCC Website

Modern, single-page website for Lough Derg Canoe Club built with Astro.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Editing Content

**All content is in Markdown files** - no coding required!

Content files are located in `src/content/sections/`:

- `hero.md` - Home/splash section
- `about.md` - About Us section
- `coaches.md` - Our Coaches
- `courses.md` - Our Courses
- `volunteers.md` - Our Volunteers
- `places.md` - Places We Paddle
- `policies.md` - Policies
- `contact.md` - Contact Us

### How to Edit

1. Open any `.md` file in a text editor (Notepad, TextEdit, VS Code, etc.)
2. Edit the content below the `---` section
3. Save the file
4. Refresh your browser to see changes (in dev mode)

### Markdown Basics

```markdown
# Large Heading
## Medium Heading
### Small Heading

**Bold text**
*Italic text*

- Bullet point
- Another point

[Link text](https://example.com)
```

## 🎨 Styling

The site uses a clean, professional design with:
- Fixed navigation bar
- Smooth scrolling between sections
- Responsive layout (mobile-friendly)
- Blue accent color (#0066cc)

To change colors, edit `src/layouts/Layout.astro`

## 📦 Deployment to Cloudflare Pages

1. Push this folder to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy!

## 📁 Project Structure

```
/
├── src/
│   ├── components/      # Section components
│   ├── content/
│   │   └── sections/    # ✏️ EDIT THESE MARKDOWN FILES
│   ├── layouts/         # Page layout
│   └── pages/           # Main page
├── public/              # Static assets (images, PDFs)
└── package.json
```

## 🖼️ Adding Images

1. Place images in the `public/` folder
2. Reference in Markdown: `![Alt text](/image.jpg)`

## 📄 Adding PDFs

1. Place PDFs in `public/pdfs/`
2. Link in Markdown: `[Download PDF](/pdfs/policy.pdf)`

## 🆘 Need Help?

- Astro docs: https://docs.astro.build
- Markdown guide: https://www.markdownguide.org
- Contact: [Your email]

## ✨ Features

- ✅ Single-page design with smooth scrolling
- ✅ Easy content editing (Markdown)
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ SEO friendly
- ✅ No database required
- ✅ Free hosting on Cloudflare Pages
