# Portfolio 2026 - Beginner-Friendly Guide

A modern portfolio website built with **plain HTML, CSS, and vanilla JavaScript** - perfect for beginners to learn and customize!

## 📁 Project Structure

```
portfolio-2026/
├── index.html          # Home page - hero section and blog
├── about.html          # About page - mission, values, skills, timeline
├── projects.html       # Projects page - filterable project grid
├── contact.html        # Contact page - form and contact info
├── src/
│   ├── styles.css      # All the styling (colors, fonts, layouts)
│   ├── main.ts         # Main JavaScript (navigation, mobile menu)
│   ├── projects.ts     # Projects page filtering functionality
│   └── contact.ts      # Contact form handling
└── README.md           # This file!
```

## 🚀 Getting Started

### Running the Website

1. Make sure you have [Bun](https://bun.sh) installed
2. In the terminal, run:
   ```bash
   cd portfolio-2026
   bun run dev
   ```
3. Open your browser to see the website!

## 🎨 How to Customize

### Changing Colors

Open `src/styles.css` and look for these color variables:

```css
/* Main colors used in the website */
background-color: #090a10;  /* Dark background */
color: #e3e8f0;             /* Light text */
background: #8b7fd6;        /* Purple button */
```

**Try changing them to:**
- `#1a1a2e` for a different dark background
- `#ff6b9d` for pink accents
- `#27b2c9` for cyan highlights

### Changing Text

Open `index.html` and find the text you want to change:

```html
<h1>Découvrez<br>Notre Univers</h1>
```

Just edit it directly! For example:
```html
<h1>Welcome to<br>My Portfolio</h1>
```

### Changing Images

In `index.html`, find the image tags:

```html
<img src="https://ext.same-assets.com/..." alt="Server Room" />
```

Replace the `src` with your own image URL or local file path:

```html
<img src="/images/my-photo.jpg" alt="My Photo" />
```

### Adding New Blog Posts

In `index.html`, find the blog section and copy a blog card:

```html
<article class="blog-card">
  <div class="blog-content">
    <h3>Your New Blog Title</h3>
    <p class="author">your name</p>
    <div class="blog-meta">
      <!-- ... rest of the card ... -->
    </div>
  </div>
  <div class="blog-image">
    <img src="your-image-url" alt="Description" />
  </div>
</article>
```

## 💡 Understanding the Code

### HTML Files

**index.html** - Home page with:
- **Header**: Navigation bar with hamburger menu for mobile
- **Hero Section**: Large heading and description
- **Blog Section**: Blog post cards
- **Footer**: Contact information and social links

**about.html** - About page with:
- **Mission Statement**: What we do
- **Values**: Core principles
- **Skills Grid**: Technical competencies
- **Timeline**: Journey milestones

**projects.html** - Projects showcase with:
- **Filter Buttons**: Category filtering (All, Network, Servers, Security)
- **Project Cards**: Interactive cards with hover effects
- **Project Details**: Technology tags and descriptions

**contact.html** - Contact page with:
- **Contact Form**: Name, email, subject, message
- **Contact Info**: Address, phone, email, hours
- **Social Media**: Links to social platforms

### CSS (src/styles.css)

The CSS is organized into sections:
- **Reset & Base Styles**: Basic setup for all elements
- **Header & Navigation**: Top menu styling
- **Hero Section**: Large heading and description area
- **Blog Section**: Blog cards layout
- **Footer**: Bottom section styling
- **Responsive Design**: Makes it work on phones and tablets

### JavaScript Files

**src/main.ts** - Core functionality:
1. **Hamburger Menu**: Toggle mobile navigation menu
2. **Smooth Scrolling**: Click navigation links to smoothly scroll to sections
3. **Like Buttons**: Click hearts to toggle "liked" state
4. **CTA Button**: "Découvrir" button scrolls to blog section
5. **Active Navigation**: Highlights current section in menu
6. **Auto-Close Menu**: Mobile menu closes when clicking a link

**src/projects.ts** - Projects page features:
1. **Category Filtering**: Filter projects by type (Network, Servers, Security)
2. **Smooth Animations**: Fade in/out effect when filtering
3. **Dynamic Styling**: Automatic transition setup for all project cards

**src/contact.ts** - Contact form features:
1. **Form Validation**: Real-time validation for all fields
2. **Email Validation**: Checks email format
3. **Success Message**: Beautiful animated popup on submission
4. **Error States**: Visual feedback for invalid fields

## 📱 Mobile Features

### Hamburger Menu
- Appears automatically on screens smaller than 768px
- Click the three-line icon (☰) to open the menu
- Menu slides in from the right side
- Click any link to close the menu automatically
- Smooth animations for opening and closing

### Responsive Navigation
- Desktop: Horizontal menu bar
- Tablet/Mobile: Side menu with hamburger toggle
- Active page is highlighted with purple accent
- Full-width menu on very small screens (480px)

## 🛠️ Common Customizations

### Change the Font

In `src/styles.css`, find:
```css
font-family: 'Helvetica Neue', Arial, sans-serif;
```

Change to:
```css
font-family: 'Georgia', serif;  /* Classic serif font */
font-family: 'Courier New', monospace;  /* Code-like font */
```

### Make the Hero Image Bigger

In `src/styles.css`, find `.hero` and change:
```css
.hero {
  min-height: 70vh;  /* Change to 90vh for bigger */
}
```

### Change Button Colors

Find `.cta-button` in `src/styles.css`:
```css
.cta-button {
  background: linear-gradient(135deg, #8b7fd6 0%, #6d5fc7 100%);
}
```

Try different gradients:
```css
background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%); /* Pink */
background: linear-gradient(135deg, #27b2c9 0%, #1f8999 100%); /* Cyan */
```

### Add Hover Effects

Add this to any element in `src/styles.css`:
```css
.your-element:hover {
  transform: scale(1.05);  /* Grows 5% on hover */
  transition: transform 0.3s ease;  /* Smooth animation */
}
```

### Customize the About Page

In `about.html`, edit:
- Mission statement in the paragraph
- Values list items
- Skills in the skill cards
- Timeline dates and events

### Add New Projects

In `projects.html`, copy a project card and update:
- `data-category` attribute (network, server, or security)
- Project title in `<h3>`
- Description text
- Technology tags in `project-tech`
- Image source

### Customize Contact Form

In `contact.html`:
- Add or remove form fields
- Change the subject options in the `<select>`
- Update contact information (address, phone, email)
- Modify working hours

## 📱 Responsive Design

The website automatically adjusts for:
- 💻 **Desktop** (1024px and up)
- 📱 **Tablet** (768px - 1024px)
- 📱 **Mobile** (480px and below)

Test it by resizing your browser window!

## 🎯 Learning Resources

- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [JavaScript Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

## 🤝 Tips for Beginners

1. **Start Small**: Change one thing at a time
2. **Use Comments**: Add notes to remember what code does
3. **Browser DevTools**: Right-click → Inspect to test changes
4. **Make Backups**: Copy files before major changes
5. **Have Fun**: Experiment and break things - that's how you learn!

## 📝 License

Feel free to use this code for your own portfolio or learning projects!

---

**Happy Coding! 🚀**
