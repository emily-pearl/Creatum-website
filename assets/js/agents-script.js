// Agents Page JavaScript - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll animation for cards on page load
    function animateCardsOnLoad() {
        const cards = document.querySelectorAll('.agent-profile-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200 + 300);
        });
    }

    // Add click interactions to action buttons
    function setupButtonInteractions() {
        const primaryButtons = document.querySelectorAll('.action-btn.primary');
        const secondaryButtons = document.querySelectorAll('.action-btn.secondary');
        
        primaryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const agentName = this.closest('.agent-profile-card').querySelector('h2').textContent;
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-2px)';
                }, 150);
                
                // Mock deployment action
                showNotification(`Initiating ${agentName} deployment...`, 'success');
                
                // In a real application, this would redirect to a deployment flow
                setTimeout(() => {
                    window.location.href = 'https://calendly.com/immo-brueggemann-creatum/free-consultation-with-creatum';
                }, 1500);
            });
        });
        
        secondaryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const agentName = this.closest('.agent-profile-card').querySelector('h2').textContent;
                showNotification(`Opening ${agentName} information...`, 'info');
                
                // Add subtle animation
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    }

    // Status indicator animation enhancement
    function enhanceStatusIndicators() {
        const indicators = document.querySelectorAll('.status-indicator.online');
        indicators.forEach(indicator => {
            // Add random pulse variation
            const randomDelay = Math.random() * 2;
            indicator.style.animationDelay = `${randomDelay}s`;
        });
    }

    // Capability cards hover enhancement
    function setupCapabilityInteractions() {
        const capabilities = document.querySelectorAll('.capability');
        capabilities.forEach(capability => {
            capability.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            capability.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Avatar interaction enhancement
    function setupAvatarInteractions() {
        const avatars = document.querySelectorAll('.avatar-icon');
        avatars.forEach(avatar => {
            avatar.addEventListener('click', function() {
                // Add click ripple effect
                this.style.transform = 'scale(0.95) rotate(5deg)';
                setTimeout(() => {
                    this.style.transform = 'scale(1.05) rotate(0deg)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1) rotate(0deg)';
                    }, 200);
                }, 100);
                
                const agentName = this.closest('.agent-profile-card').querySelector('h2').textContent;
                showNotification(`${agentName} is ready to assist!`, 'success');
            });
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #51cf66, #10b981)' : 'linear-gradient(135deg, #4187C1, #2563eb)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Scroll-based animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe CTA section
        const ctaSection = document.querySelector('#agents-cta');
        if (ctaSection) {
            ctaSection.style.opacity = '0';
            ctaSection.style.transform = 'translateY(30px)';
            ctaSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(ctaSection);
        }
    }

    // CTA Button interactions
    function setupCTAInteractions() {
        const ctaButton = document.querySelector('#agents-cta .cta-button-primary');
        if (ctaButton) {
            ctaButton.addEventListener('click', function() {
                showNotification('Redirecting to strategy session booking...', 'success');
                setTimeout(() => {
                    window.location.href = 'https://calendly.com/immo-brueggemann-creatum/free-consultation-with-creatum';
                }, 1000);
            });
        }
    }

    // Stats counter animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateNumber(entry.target);
                }
            });
        }, observerOptions);

        stats.forEach(stat => {
            statsObserver.observe(stat);
        });
    }

    function animateNumber(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const hasX = text.includes('x');
        const hasMin = text.includes('min');
        
        let numericValue;
        let suffix = '';
        
        if (hasPlus) {
            numericValue = parseInt(text.replace(/[^0-9]/g, ''));
            suffix = text.includes('K') ? 'K+' : '+';
        } else if (hasPercent) {
            numericValue = parseFloat(text.replace('%', ''));
            suffix = '%';
        } else if (hasX) {
            numericValue = parseInt(text.replace('x', ''));
            suffix = 'x';
        } else if (hasMin) {
            numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
            suffix = 'min';
        } else {
            return; // Skip if format not recognized
        }

        let current = 0;
        const increment = numericValue / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            if (hasPlus && text.includes('K')) {
                element.textContent = Math.floor(current) + 'K+';
            } else if (hasPercent) {
                element.textContent = current.toFixed(1) + '%';
            } else if (hasMin) {
                element.textContent = current.toFixed(1) + 'min';
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 40);
    }

    // Initialize all functionality
    animateCardsOnLoad();
    setupButtonInteractions();
    enhanceStatusIndicators();
    setupCapabilityInteractions();
    setupAvatarInteractions();
    setupScrollAnimations();
    setupCTAInteractions();
    animateStats();

    // Add smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('🤖 Agents page loaded successfully! Your AI team is ready.');
});