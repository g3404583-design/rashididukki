// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Section reveal animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(section);
});

// Enhanced sparkle effect
function createSparkle() {
    const sparklesContainer = document.querySelector('.sparkles-container');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random position on the x-axis
    const xPos = Math.random() * window.innerWidth;
    sparkle.style.left = xPos + 'px';
    
    // Random size
    const size = Math.random() * 4 + 2;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    // Random opacity and blur
    const opacity = Math.random() * 0.5 + 0.5;
    const blur = Math.random() * 2;
    sparkle.style.opacity = opacity;
    sparkle.style.filter = `blur(${blur}px)`;
    
    // Add glow effect
    const hue = Math.random() * 30 - 15; // Slight color variation
    sparkle.style.boxShadow = `0 0 ${size * 2}px rgba(231, 76, 60, ${opacity})`;
    
    sparklesContainer.appendChild(sparkle);
    
    // Remove sparkle after animation completes
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Create new sparkles periodically
setInterval(createSparkle, 300);

// Create initial set of sparkles
for (let i = 0; i < 10; i++) {
    setTimeout(createSparkle, i * 300);
}

// Parallax effect for profile image
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX - innerWidth / 2) / innerWidth;
        const y = (clientY - innerHeight / 2) / innerHeight;
        
        profileImage.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.05)`;
    });
}

// Hover effect for hobby cards
document.querySelectorAll('.hobby-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});