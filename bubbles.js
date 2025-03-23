function createBubbles() {
    // Find container in either hero section or page header
    const container = document.querySelector('.hero-section .bubble-container') || 
                      document.querySelector('.page-header .bubble-container');
    if (!container) return; // Only run if the container exists
    
    // Adjust bubble count based on viewport width
    let bubbleCount = 20; // Default count
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth < 576) { // Mobile
        bubbleCount = 10;
    } else if (viewportWidth >= 1600) { // Large screens
        bubbleCount = 30;
    }
    
    // Clear existing bubbles
    container.innerHTML = '';

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Responsive size based on viewport width
        let minSize, maxSizeRange;
        
        if (viewportWidth < 576) { // Mobile
            minSize = 10;
            maxSizeRange = 60;
        } else if (viewportWidth < 992) { // Tablet
            minSize = 15;
            maxSizeRange = 90;
        } else if (viewportWidth < 1600) { // Desktop
            minSize = 20;
            maxSizeRange = 130;
        } else { // Large screens
            minSize = 25;
            maxSizeRange = 160;
        }
        
        // Calculate size with the responsive ranges
        const size = Math.random() * maxSizeRange + minSize;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random position across the hero section
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        
        // Faster animation: Random duration between 6 and 15 seconds
        const duration = Math.random() * 9 + 6;
        bubble.style.animationDuration = `${duration}s`;
        
        // Shorter delay for quicker start
        const delay = Math.random() * 5;
        bubble.style.animationDelay = `${delay}s`;
        
        // Random horizontal drift - stored as CSS variable
        const drift = Math.random() * 30 - 15; // -15 to +15
        bubble.style.setProperty('--drift', drift);
        
        // Higher opacity for more visibility
        const opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8
        bubble.style.setProperty('--opacity', opacity);
        
        // Add subtle rotation
        const rotation = Math.random() * 360;
        bubble.style.transform = `rotate(${rotation}deg)`;
        
        // Add custom data attribute for hover effect
        bubble.setAttribute('data-glow', 'true');
        
        // Add event listeners for glow effect
        bubble.addEventListener('mouseenter', function() {
            this.classList.add('hover-glow');
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.classList.remove('hover-glow');
        });
        
        container.appendChild(bubble);
    }
}

// Initialize bubbles
document.addEventListener('DOMContentLoaded', function() {
    createBubbles();
    
    // Periodically recreate bubbles for smoother continuous effect
    setInterval(createBubbles, 20000); // Every 20 seconds (reduced from 45)
});

// Recreate bubbles on window resize
window.addEventListener('resize', createBubbles); 