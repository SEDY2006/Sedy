# Research Poster Competition 2025 Website

This is a modern, premium website for the Research Poster Competition 2025 at Techno International New Town (TINT).

## Features

- Modern, responsive design with premium animations
- Multi-page website with Home, Registration, Guidelines, etc.
- Interactive elements like countdown timer, form validation
- Custom cursor and smooth animations
- Mobile-friendly design

## File Structure

```
├── index.html               # Homepage with main sections
├── register.html            # Registration form page
├── css/
│   └── styles.css           # Main stylesheet with all styles
├── js/
│   └── script.js            # JavaScript for animations and functionality
├── images/                  # Directory for all website images
│   ├── hero-image.png       # Hero section image
│   ├── poster-1.jpg         # Sample poster images
│   ├── poster-2.jpg
│   ├── poster-3.jpg
│   ├── sponsor-1.png        # Sponsor logos
│   ├── sponsor-2.png
│   ├── sponsor-3.png
│   ├── sponsor-4.png
│   ├── sponsor-5.png
│   └── favicon.png          # Website favicon
└── README.md                # Project documentation
```

## Setup Instructions

1. Clone the repository or download the files to your web server
2. Make sure to create the required directories if they don't exist:
   - `css/` for stylesheets
   - `js/` for JavaScript files
   - `images/` for all website images
3. Add your own images to the `images/` directory
4. No additional build steps are required - the website uses vanilla HTML, CSS, and JavaScript

## External Dependencies

The website uses the following external libraries loaded via CDN:

- Font Awesome (for icons): [https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)
- Google Fonts (Montserrat and Playfair Display): [https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap](https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap)
- AOS Animation Library: [https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css](https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css) and [https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js](https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js)

## Customization

### Changing Colors

The main color scheme can be easily modified by updating the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    /* Colors */
    --primary: #0052a5;
    --primary-light: #3378bd;
    --primary-dark: #003c7d;
    --secondary: #ffc800;
    --secondary-light: #ffe066;
    --secondary-dark: #e6b400;
    /* ... other variables ... */
}
```

### Updating Content

All text content can be modified directly in the HTML files. Key sections to update include:

- Event details in the hero section
- Competition dates in the countdown timer
- Features and benefits in the about section
- Timeline dates and descriptions
- Form fields in the registration page

### Adding Pages

To add more pages, create new HTML files following the structure of existing pages. Make sure to include:

1. The same `<head>` section with all required meta tags and CSS links
2. The same navigation and footer for consistent design
3. Update navigation links in all pages to include the new page

## Browser Compatibility

- Chrome: Latest version
- Firefox: Latest version
- Safari: Latest version
- Edge: Latest version
- Opera: Latest version

## Credits

- Fonts: Google Fonts (Montserrat and Playfair Display)
- Icons: Font Awesome
- Animations: AOS Animation Library

## License

This project is available for use under the MIT License. 