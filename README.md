# ☕ Brew Haven - Premium Cafe Shop Website

A modern, fully responsive, and feature-rich cafe shop website built with HTML, CSS, and vanilla JavaScript.

## 🎯 Features

### Core Sections
- **Hero Section** - Stunning animated hero with call-to-action
- **Menu Display** - Dynamic menu with 15+ items across 3 categories
- **Category Filtering** - Filter menu items by Coffee, Pastries, or Beverages
- **About Section** - Company story and unique selling points
- **Customer Testimonials** - 5-star reviews from satisfied customers
- **Reservation System** - Interactive form for booking tables
- **Contact Information** - Multiple ways to reach the cafe
- **Responsive Navigation** - Sticky navbar with mobile hamburger menu

### Interactive Features
✨ **Smooth Animations**
- Fade-in effects for menu items
- Slide-up animations for hero content
- Floating background animations
- Hover effects on buttons and cards
- Scroll-triggered reveal animations

🎨 **Modern Design**
- Warm coffee-inspired color scheme
- Gradient backgrounds and overlays
- Professional typography
- Consistent spacing and alignment
- Card-based layout for content

📱 **Responsive & Mobile-First**
- Works perfectly on desktop, tablet, and mobile
- Hamburger menu for mobile navigation
- Touch-friendly buttons and interactions
- Optimized font sizes for all devices

🛒 **User Interactions**
- Add items to cart with toast notifications
- Filter menu by category with smooth transitions
- Reservation form with validation
- Toast notifications for user feedback
- Smooth scroll navigation to sections

## 📁 File Structure

```
cafe-shop/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling with animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🚀 How to Use

1. **Open the Website**
   - Simply open `index.html` in your web browser
   - No server or build tools required!

2. **Navigate the Site**
   - Click navbar links to jump to different sections
   - Use the hamburger menu on mobile devices
   - Scroll smoothly through all content

3. **Explore the Menu**
   - Click filter buttons to sort by category (All, Coffee, Pastries, Beverages)
   - Click any menu item to add it to your cart
   - Toast notifications confirm your selection

4. **Make a Reservation**
   - Fill in the reservation form with your details
   - Select date and time
   - Click "Reserve Now" to submit

5. **Contact the Cafe**
   - View location, phone, hours, and email in the contact section
   - Follow social media links

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;      /* Coffee brown */
    --secondary-color: #D2691E;    /* Chocolate */
    --accent-color: #F4A460;       /* Sandy brown */
    --dark-bg: #2C1810;            /* Dark brown */
    --light-bg: #FBF8F3;           /* Cream */
}
```

### Add More Menu Items
Add items to the `menuItems` array in `script.js`:
```javascript
{
    id: 16,
    name: 'Your Item',
    category: 'coffee',
    price: '$X.XX',
    description: 'Description here',
    emoji: '☕'
}
```

### Update Business Information
Find and update these sections in `index.html`:
- Contact details in the Contact section
- Business hours
- Location address
- Phone numbers
- Email addresses

### Customize Testimonials
Edit the testimonial cards in the Testimonials section:
```html
<div class="testimonial-card">
    <div class="stars">⭐⭐⭐⭐⭐</div>
    <p>"Your review text here"</p>
    <p class="customer-name">- Customer Name</p>
</div>
```

## 🛠️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Menu Categories

### ☕ Coffee (6 items)
- Espresso, Cappuccino, Latte, Americano, Flat White, Macchiato

### 🥐 Pastries (4 items)
- Croissant, Chocolate Tart, Blueberry Muffin, Vanilla Macaron

### 🧃 Beverages (5 items)
- Iced Coffee, Iced Vanilla Latte, Smoothie Bowl, Hot Chocolate, Fresh Juice

## 🎯 Design Highlights

1. **Gradient Design** - Beautiful linear gradients throughout
2. **Smooth Transitions** - All interactions have smooth animations
3. **Accessibility** - Proper semantic HTML and readable text
4. **Performance** - Optimized with vanilla JS (no dependencies)
5. **Modern Typography** - Clean, readable fonts with proper hierarchy

## 🔧 Advanced Customization

### Add Analytics
Replace the `trackEvent()` function calls with your analytics service:
```javascript
// Google Analytics example
gtag('event', eventName, eventData);

// Mixpanel example
mixpanel.track(eventName, eventData);
```

### Connect to Backend
Update the reservation form handler to send data to your server:
```javascript
async function handleReservationSubmit(e) {
    // Send to API
    const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}
```

### Add Image CDN
Replace emoji placeholders with real images:
```html
<img src="https://your-image-url.com/coffee.jpg" alt="Coffee">
```

## 📝 Form Integration

### Email Service Integration
Connect the reservation form to Emailjs or similar:
```javascript
// Example with Emailjs
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('service_id', 'template_id', data);
```

### Database Integration
Store reservations in a database:
- Firebase Firestore
- MongoDB
- PostgreSQL
- MySQL

## 🌟 Future Enhancements

- Add real images gallery
- Implement cart system with checkout
- Add online ordering
- Customer login/accounts
- Admin dashboard
- Blog section
- Event calendar
- Loyalty program tracker

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first approach
- Touch-friendly interface
- Optimized images
- Fast loading times
- Accessibility compliance

## 💡 Tips for Success

1. **Customize Colors** - Match your cafe's brand
2. **Add Your Photos** - Replace emoji with real images
3. **Update All Text** - Make it personal to your business
4. **Test on Mobile** - Ensure it works on all devices
5. **Connect Services** - Add email, payment, and database
6. **SEO Optimization** - Add meta tags and descriptions
7. **Deploy Online** - Use Netlify, Vercel, or GitHub Pages

## 🤝 Support

For questions or customization help, consult:
- MDN Web Docs (HTML, CSS, JavaScript)
- CSS Tricks (Styling & Animations)
- JavaScript.info (JavaScript concepts)

## 📄 License

Free to use and modify for personal and commercial projects.

## ✨ Credits

Designed and developed with ☕ and 💖

---

**Brew Haven** - Where great coffee meets great company! 🎉
