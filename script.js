// 1-to-1 Aesthetics & Wellness - Pricing Portal JavaScript
// Navigation and interaction handling

// Store user selections in sessionStorage for navigation flow
let userSelections = {
    location: null,
    customerType: null
};

// Load existing selections from sessionStorage
function loadSelections() {
    const stored = sessionStorage.getItem('userSelections');
    if (stored) {
        userSelections = JSON.parse(stored);
    }
}

// Save selections to sessionStorage
function saveSelections() {
    sessionStorage.setItem('userSelections', JSON.stringify(userSelections));
}

// Location selection handler
function selectLocation(location) {
    userSelections.location = location;
    saveSelections();
    
    // Add visual feedback
    const cards = document.querySelectorAll('.location-card');
    cards.forEach(card => card.style.transform = 'scale(0.95)');
    
    // Navigate to customer type selection after brief delay
    setTimeout(() => {
        window.location.href = 'customer-type.html';
    }, 300);
}

// Customer type selection handler
function selectCustomerType(customerType) {
    userSelections.customerType = customerType;
    saveSelections();
    
    // Add visual feedback
    const cards = document.querySelectorAll('.customer-card');
    cards.forEach(card => card.style.transform = 'scale(0.95)');
    
    // Navigate to appropriate pricing page
    setTimeout(() => {
        const location = userSelections.location;
        const pricingPage = `pricing-${location}-${customerType}.html`;
        window.location.href = pricingPage;
    }, 300);
}

// Initialize page based on current location
function initializePage() {
    loadSelections();
    
    const currentPage = window.location.pathname.split('/').pop();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation to cards
    const cards = document.querySelectorAll('.location-card, .customer-card, .pricing-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add hover effects for better interactivity
    addHoverEffects();
    
    // Validate navigation flow
    validateNavigation(currentPage);
}

// Add enhanced hover effects
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.location-card, .customer-card, .cta-button, .select-button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Validate navigation flow and redirect if necessary
function validateNavigation(currentPage) {
    // If user is on customer-type.html but hasn't selected a location, redirect to location.html
    if (currentPage === 'customer-type.html' && !userSelections.location) {
        window.location.href = 'location.html';
        return;
    }
    
    // If user is on a pricing page but missing selections, redirect appropriately
    if (currentPage.startsWith('pricing-')) {
        if (!userSelections.location) {
            window.location.href = 'location.html';
            return;
        }
        if (!userSelections.customerType) {
            window.location.href = 'customer-type.html';
            return;
        }
    }
}

// Add breadcrumb navigation functionality
function updateBreadcrumb() {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb) return;
    
    const currentPage = window.location.pathname.split('/').pop();
    
    // Update breadcrumb based on selections
    if (currentPage === 'customer-type.html' && userSelections.location) {
        const locationText = userSelections.location === 'penn-valley' ? 'Penn Valley' : 'Danville';
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a> > 
            <a href="location.html">Location (${locationText})</a> > 
            <span>Customer Type</span>
        `;
    }
}

// Handle back button navigation
window.addEventListener('popstate', function(event) {
    // Clear selections if going back to prevent inconsistent state
    if (window.location.pathname.includes('location.html')) {
        userSelections.location = null;
        userSelections.customerType = null;
        saveSelections();
    } else if (window.location.pathname.includes('customer-type.html')) {
        userSelections.customerType = null;
        saveSelections();
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('location-card')) {
            const location = focusedElement.onclick.toString().match(/'([^']+)'/)[1];
            selectLocation(location);
        } else if (focusedElement.classList.contains('customer-card')) {
            const customerType = focusedElement.onclick.toString().match(/'([^']+)'/)[1];
            selectCustomerType(customerType);
        }
    }
});

// Add accessibility attributes
function enhanceAccessibility() {
    const cards = document.querySelectorAll('.location-card, .customer-card');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.querySelector('h3').textContent);
    });
}

// Smooth page transitions
function addPageTransitions() {
    // Add fade-in effect for page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    updateBreadcrumb();
    enhanceAccessibility();
    addPageTransitions();
    
    // Add click tracking for analytics (placeholder)
    trackPageView();
});

// Analytics placeholder function
function trackPageView() {
    const currentPage = window.location.pathname.split('/').pop();
    console.log(`Page view: ${currentPage}`, userSelections);
    
    // Here you could integrate with Google Analytics, Facebook Pixel, etc.
    // Example: gtag('event', 'page_view', { page_title: currentPage });
}

// Utility function to get user-friendly location name
function getLocationDisplayName(location) {
    return location === 'penn-valley' ? 'Penn Valley' : 'Danville';
}

// Utility function to get user-friendly customer type name
function getCustomerTypeDisplayName(customerType) {
    switch(customerType) {
        case 'first-time': return 'First Time Patient';
        case 'existing': return 'Existing Patient';
        case 'party-host': return 'Party Host';
        default: return customerType;
    }
}

// Export functions for potential use in pricing pages
window.PricingPortal = {
    userSelections,
    getLocationDisplayName,
    getCustomerTypeDisplayName,
    loadSelections,
    saveSelections
};
