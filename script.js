// Wait for DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // ======== EVENT HANDLING SECTION ========

    // Button click event
    const clickBtn = document.getElementById('clickBtn');
    const clickResult = document.getElementById('clickResult');
    
    clickBtn.addEventListener('click', function() {
        clickResult.textContent = "Button clicked! Great job!";
        clickResult.style.color = "#2ecc71";
    });

    // Hover effect
    const hoverBox = document.getElementById('hoverBox');
    
    hoverBox.addEventListener('mouseenter', function() {
        this.style.background = "#2ecc71";
        this.textContent = "Nice hovering!";
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        this.style.background = "#e74c3c";
        this.textContent = "Hover over me";
    });

    // Keypress detection
    const keypressInput = document.getElementById('keypressInput');
    const keypressResult = document.getElementById('keypressResult');
    
    keypressInput.addEventListener('keyup', function(event) {
        keypressResult.textContent = `You pressed: ${event.key}`;
    });

    // Double-click bonus event
    const secretBox = document.getElementById('secretBox');
    
    secretBox.addEventListener('dblclick', function() {
        this.textContent = "🎉 Secret unlocked! 🎉";
        this.style.background = "#f1c40f";
        this.classList.add('pulse');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            this.classList.remove('pulse');
        }, 500);
    });

    // ======== INTERACTIVE ELEMENTS SECTION ========

    // Color changing button
    const colorBtn = document.getElementById('colorBtn');
    const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6'];
    let colorIndex = 0;
    
    colorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        this.style.backgroundColor = colors[colorIndex];
    });

    // Simple image gallery
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Image IDs from Lorem Picsum
    const imageIds = [237, 238, 239, 240, 241];
    let currentImageIndex = 0;
    
    function updateGalleryImage() {
        galleryImage.src = `https://picsum.photos/id/${imageIds[currentImageIndex]}/300/200`;
    }
    
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + imageIds.length) % imageIds.length;
        updateGalleryImage();
    });
    
    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % imageIds.length;
        updateGalleryImage();
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the active class
            this.classList.toggle('active');
            
            // Get the content panel
            const content = this.nextElementSibling;
            
            // Toggle the display
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // ======== FORM VALIDATION SECTION ========
    
    const validationForm = document.getElementById('validationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Real-time validation for name
    nameInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            nameError.textContent = 'Name is required';
            this.classList.add('invalid');
            this.classList.remove('valid');
        } else {
            nameError.textContent = '';
            this.classList.add('valid');
            this.classList.remove('invalid');
        }
    });
    
    // Real-time validation for email
    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (this.value.trim() === '') {
            emailError.textContent = 'Email is required';
            this.classList.add('invalid');
            this.classList.remove('valid');
        } else if (!emailRegex.test(this.value)) {
            emailError.textContent = 'Please enter a valid email';
            this.classList.add('invalid');
            this.classList.remove('valid');
        } else {
            emailError.textContent = '';
            this.classList.add('valid');
            this.classList.remove('invalid');
        }
    });
    
    // Real-time validation for password
    passwordInput.addEventListener('input', function() {
        if (this.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            this.classList.add('invalid');
            this.classList.remove('valid');
        } else {
            passwordError.textContent = '';
            this.classList.add('valid');
            this.classList.remove('invalid');
        }
    });
    
    // Form submission
    validationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Check if all inputs are valid
        let isValid = true;
        
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('invalid');
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('invalid');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            emailInput.classList.add('invalid');
            isValid = false;
        }
        
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            passwordInput.classList.add('invalid');
            isValid = false;
        }
        
        if (isValid) {
            alert('Form submitted successfully!');
            this.reset();
            // Remove all valid classes
            document.querySelectorAll('.valid').forEach(el => {
                el.classList.remove('valid');
            });
        }
    });
});
