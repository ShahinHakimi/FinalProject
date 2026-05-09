// Lease-On Application Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const leaseForm = document.getElementById('leaseApplication');
    const successMessage = document.getElementById('successMessage');
    
    if (leaseForm) {
        leaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const truckType = document.getElementById('truckType').value;
            const experience = document.getElementById('experience').value;
            
            // Validate required fields
            if (!fullName || !phone || !truckType || !experience) {
                alert('Please fill out all required fields');
                return;
            }
            
            // Phone number validation (simple)
            const phoneRegex = /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\d{3}\s\d{3}\s\d{4}$/;
            if (!phoneRegex.test(phone) && !phone.match(/^\d{10}$/)) {
                alert('Please enter a valid phone number (10 digits)');
                return;
            }
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Clear form
            leaseForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
            // In a real application, you would send this data to a server
            console.log('Application submitted:', {
                fullName,
                phone,
                truckType,
                experience
            });
        });
    }
    
    // Quote Form Handler
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Quote request submitted! We will contact you within 2 hours.');
            this.reset();
        });
    }
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully! We will respond within 24 hours.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});