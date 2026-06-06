// ==================== MENU DATA ====================
const menuItems = [
    {
        id: 1,
        name: 'Espresso',
        category: 'coffee',
        price: '$2.50',
        description: 'Bold and rich, pulled to perfection',
         emoji: `
            <img 
                class="image-dish"
                src="https://www.roastycoffee.com/wp-content/uploads/Single-Shot-Espresso.jpg"
            >
        `
    }, 
    {
        id: 2,
        name: 'Cappuccino',
        category: 'coffee',
        price: '$4.50',
        description: 'Creamy milk froth with espresso',
         emoji: `
            <img 
                class="image-dish"
                src="https://www.nespresso.com/ecom/medias/sys_master/public/12323052978206/header_visual.jpg"
            >
        `
    },
    {
        id: 3,
        name: 'Latte',
        category: 'coffee',
        price: '$4.75',
        description: 'Smooth and velvety milk coffee',
         emoji: `
            <img 
                class="image-dish"
                src="https://tse2.mm.bing.net/th/id/OIP.yrf-eF1CPuO1TA5puOB7_AHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 4,
        name: 'Americano',
        category: 'coffee',
        price: '$3.50',
        description: 'Rich espresso with hot water',
         emoji: `
            <img 
                class="image-dish"
                src="https://tse3.mm.bing.net/th/id/OIP._XNapn55epJgJMWnnvfoUQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 5,
        name: 'Flat White',
        category: 'coffee',
        price: '$4.25',
        description: 'Espresso with velvety microfoam',
         emoji: `
            <img 
                class="image-dish"
                src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-a-cup-of-flat-white-coffee-1630845655.jpg"
            >
        `
    },
    {
        id: 6,
        name: 'Macchiato',
        category: 'coffee',
        price: '$3.75',
        description: 'Espresso marked with milk foam',
         emoji: `
            <img 
                class="image-dish"
                src="https://tse4.mm.bing.net/th/id/OIP.c2f3aynOV6L6nI2ofYetMQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 7,
        name: 'Croissant',
        category: 'pastries',
        price: '$3.99',
        description: 'Buttery layers of French pastry',
         emoji: `
            <img 
                class="image-dish"
                src="https://tse1.explicit.bing.net/th/id/OIP.3EPwEQBeszY9Qs7nCpMPHgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 8,
        name: 'Chocolate Tart',
        category: 'pastries',
        price: '$4.99',
        description: 'Rich chocolate custard in crispy shell',
         emoji: `
            <img 
                class="image-dish"
                src="https://tse3.mm.bing.net/th/id/OIP.rsQ8dqe6oBdU9U2D_kdHUgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 9,
        name: 'Blueberry Muffin',
        category: 'pastries',
        price: '$3.50',
        description: 'Moist muffin with fresh blueberries',
         emoji: `
            <img 
                class="image-dish"
                src="https://www.jocooks.com/wp-content/uploads/2013/09/blueberry-muffins-1-15.jpg"
            >
        `
    },
    {
        id: 10,
        name: 'Macaron',
        category: 'pastries',
        price: '$2.50',
        description: 'Delicate almond meringue cookies',
         emoji: `
            <img 
                class="image-dish"
                src="https://tse3.mm.bing.net/th/id/OIP._Z8oOs7GY49Oo-mxFYVJdgHaFi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 11,
        name: 'Iced Coffee',
        category: 'beverages',
        price: '$3.99',
        description: 'Chilled espresso over ice with cream',
         emoji: `
            <img 
                class="image-dish"
                src="https://i.pinimg.com/736x/da/6f/3a/da6f3a6305596079b891bdb35d53b5f4--starbucks-iced-coffee-make-iced-coffee.jpg"
            >
        `
    },
    {
        id: 12,
        name: 'Iced Vanilla Latte',
        category: 'beverages',
        price: '$4.75',
        description: 'Smooth vanilla-infused cold coffee',
         emoji: `
            <img 
                class="image-dish"
                src="https://tse2.mm.bing.net/th/id/OIP.JA4WxjOEBHSQu52WDbo_CAHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 13,
        name: 'Smoothie Bowl',
        category: 'beverages',
        price: '$5.99',
        description: 'Blended berries with granola topping',
        emoji: `
            <img 
                class="image-dish"
                src="https://simple-veganista.com/wp-content/uploads/2014/04/the-best-smoothie-bowl-4.jpg"
            >
        `
    },
    {
        id: 14,
        name: 'Hot Chocolate',
        category: 'beverages',
        price: '$3.75',
        description: 'Rich cocoa with whipped cream',
        emoji: `
            <img 
                class="image-dish"
                src="https://tse1.explicit.bing.net/th/id/OIP.RYIVHt5ukieZIUWJP5gfmwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            >
        `
    },
    {
        id: 15,
        name: 'Fresh Juice',
        category: 'beverages',
        price: '$4.50',
        description: 'Freshly squeezed orange and ginger',
        emoji: `
            <img 
                class="image-dish"
                src="https://images.unsplash.com/photo-1507120366498-4656eaece7fa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
        `
    }
];

// ==================== DOM ELEMENTS ====================
const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const reservationForm = document.getElementById('reservationForm');
const toast = document.getElementById('toast');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems('all');
    setupEventListeners();
    observeScrollElements();
});

// ==================== MENU RENDERING ====================
function renderMenuItems(category) {
    menuGrid.innerHTML = '';
    
    const filtered = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filtered.forEach((item, index) => {
        const menuItem = createMenuItemElement(item, index);
        menuGrid.appendChild(menuItem);
    });
}

function createMenuItemElement(item, index) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
    
    div.innerHTML = `
        <div class="menu-item-image">${item.emoji}</div>
        <div class="menu-item-content">
            <span class="menu-item-category">${item.category}</span>
            <h3 class="menu-item-name">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <p class="menu-item-price">${item.price}</p>
        </div>
    `;
    
    div.addEventListener('click', () => {
        addToCart(item);
    });
    
    return div;
}

// ==================== MENU FILTERING ====================
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            renderMenuItems(category);
        });
    });
    
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
        });
    });
    
    // Reservation form
    reservationForm.addEventListener('submit', handleReservationSubmit);
}

// ==================== CART FUNCTIONALITY ====================
function addToCart(item) {
    showToast(`✅ ${item.name} added to cart! 🛒`);
    
    // Animate the menu item
    event.target.closest('.menu-item').style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.closest('.menu-item').style.transform = 'translateY(0)';
    }, 200);
}

// ==================== FORM HANDLING ====================
function handleReservationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(reservationForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = reservationForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '⏳ Processing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showToast('✅ Reservation confirmed! Check your email for details.');
        reservationForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== SCROLL ANIMATIONS ====================
function observeScrollElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all menu items and other elements
    document.querySelectorAll('.menu-item, .testimonial-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ==================== SCROLL TO SECTION ====================
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== SMOOTH SCROLL FOR NAV LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#' && targetId !== '') {
            scrollTo(targetId.substring(1));
        }
    });
});

// ==================== DYNAMIC PRICING ====================
function updateMenuPrices() {
    const random = Math.floor(Math.random() * 2);
    // This could be used to update prices dynamically
    // Keeping it simple for demo purposes
}

// ==================== SEARCH FUNCTIONALITY ====================
function searchMenu(query) {
    query = query.toLowerCase();
    menuGrid.innerHTML = '';
    
    const results = menuItems.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No items found. Try another search!</p>';
        return;
    }
    
    results.forEach((item, index) => {
        const menuItem = createMenuItemElement(item, index);
        menuGrid.appendChild(menuItem);
    });
}

// ==================== MOBILE NAV STYLING ====================
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, var(--dark-bg) 0%, var(--primary-color) 100%);
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            display: none;
            z-index: 99;
            box-shadow: var(--shadow);
        }
        
        .nav-menu li {
            width: 100%;
        }
        
        .nav-link {
            display: block;
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-link::after {
            display: none;
        }
        
        .nav-link:hover {
            background: rgba(244, 164, 96, 0.1);
        }
    }
`;
document.head.appendChild(style);

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.style.display = 'none';
    }
});

// ==================== ANALYTICS PLACEHOLDER ====================
function trackEvent(eventName, eventData) {
    console.log(`📊 Event: ${eventName}`, eventData);
    // Replace with actual analytics service (Google Analytics, Mixpanel, etc.)
}

// Track page views
trackEvent('page_view', { page: 'home' });

// ==================== LAZY LOADING IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== UTILITY FUNCTIONS ====================
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

console.log('☕ Welcome to Brew Haven! Coffee time = Fun time 🎉');
