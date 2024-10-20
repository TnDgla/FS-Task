// Modal Initialization and Styling
const modal = document.getElementById('teacherModal');
const teacherDetailsElement = document.getElementById('teacherDetails');
const additionalDetailsElement = document.getElementById('additionalDetails');

// Add custom modal styles
modal.style.backdropFilter = 'blur(10px)';

// Enhanced cell click animations
const timetableCells = document.querySelectorAll('.details');

// Ripple effect function
function createRipple(event) {
    const cell = event.currentTarget;
    const ripple = document.createElement('div');
    
    ripple.className = 'ripple';
    cell.appendChild(ripple);
    
    const rect = cell.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size/2}px`;
    ripple.style.top = `${event.clientY - rect.top - size/2}px`;
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

// Enhanced modal content creation
function createModalContent(teacher, subject, email) {
    return `
        <div class="modal-teacher-info">
            <div class="subject-badge">${subject}</div>
            <h3 class="teacher-name">${teacher}</h3>
            <div class="teacher-details">
                <i class="fas fa-graduation-cap"></i>
                <span>Subject Specialist</span>
            </div>
            <div class="contact-info">
                <i class="fas fa-envelope"></i>
                <a href="mailto:${email}">${email}</a>
            </div>
        </div>
    `;
}

// Cell click event handlers
timetableCells.forEach(cell => {
    cell.addEventListener('click', (event) => {
        // Add ripple effect
        createRipple(event);
        
        const teacher = cell.getAttribute('data-teacher');
        const subject = cell.getAttribute('data-subject');
        
        if (teacher && subject) {
            const email = teacher.toLowerCase().replace(/ /g, '.') + '@gmail.com';
            
            // Enhanced modal content
            teacherDetailsElement.innerHTML = createModalContent(teacher, subject, email);
            
            // Styled additional details
            additionalDetailsElement.innerHTML = `
                <div class="additional-info">
                    <i class="fas fa-info-circle"></i>
                    <p>For more information about <span class="highlight">${teacher}</span>, 
                    please reach out via <a href="mailto:${email}">${email}</a> or use the contact button below.</p>
                </div>
            `;
            
            // Initialize and show modal with animation
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
            
            // Enhanced contact button
            const contactBtn = document.getElementById('contactBtn');
            contactBtn.innerHTML = `
                <i class="fas fa-paper-plane"></i>
                Contact Teacher
            `;
            
            // Add hover animation to contact button
            contactBtn.classList.add('btn-hover-effect');
            
            contactBtn.onclick = () => {
                // Add click animation
                contactBtn.classList.add('btn-click');
                setTimeout(() => {
                    window.location.href = `contact.html?teacher=${encodeURIComponent(teacher)}&subject=${encodeURIComponent(subject)}`;
                }, 200);
            };
        } else {
            console.error('Teacher or subject data not found!');
            // Show error toast notification
            showErrorToast('Teacher or subject information is missing!');
        }
    });
});

// Error toast notification
function showErrorToast(message) {
    const toast = document.createElement('div');
    toast.className = 'error-toast';
    toast.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Add these CSS styles to your stylesheet
const styles = `
    /* Ripple Effect */
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.7);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    /* Modal Styles */
    .modal-teacher-info {
        padding: 20px;
        text-align: center;
    }

    .subject-badge {
        display: inline-block;
        padding: 8px 16px;
        background: linear-gradient(45deg, #e0b589, #d4a676);
        color: white;
        border-radius: 20px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .teacher-name {
        font-size: 1.8rem;
        color: #1e1e2f;
        margin-bottom: 15px;
        font-family: 'Playfair Display', serif;
    }

    .teacher-details {
        margin: 15px 0;
        color: #4a4a5a;
    }

    .contact-info {
        margin: 15px 0;
    }

    .contact-info a {
        color: #e0b589;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .contact-info a:hover {
        color: #d4a676;
    }

    .additional-info {
        background: rgba(224, 181, 137, 0.1);
        padding: 15px;
        border-radius: 10px;
        margin-top: 20px;
    }

    .highlight {
        color: #e0b589;
        font-weight: 600;
    }

    /* Button Effects */
    .btn-hover-effect {
        transition: all 0.3s ease;
        transform: translateY(0);
    }

    .btn-hover-effect:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(224, 181, 137, 0.3);
    }

    .btn-click {
        animation: buttonClick 0.2s ease;
    }

    @keyframes buttonClick {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }

    /* Error Toast */
    .error-toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 15px rgba(255, 68, 68, 0.3);
        animation: toastSlide 0.3s ease;
    }

    @keyframes toastSlide {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);