// JavaScript for Creatum Landing Page - Enhanced for Interactivity

document.addEventListener("DOMContentLoaded", () => {
    console.log("Creatum landing page script loaded.");

    // --- Smooth Scrolling --- 
    const internalLinks = document.querySelectorAll("a[href^=\"#\"]");
    internalLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for sticky header height if necessary
                // const headerOffset = document.querySelector("header").offsetHeight;
                // const elementPosition = targetElement.getBoundingClientRect().top;
                // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // window.scrollTo({
                //     top: offsetPosition,
                //     behavior: "smooth"
                // });
                
                // Simpler version without header offset calculation for now:
                 targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // --- FAQ Toggle Functionality --- 
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector("h3");
        if (question) {
            question.addEventListener("click", () => {
                // Toggle the 'open' class on the parent .faq-item
                item.classList.toggle("open");
                
                // Optional: Close other FAQ items when one is opened
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item) {
                //         otherItem.classList.remove("open");
                //     }
                // });
            });
        }
    });

    // --- CTA Button Click Handling (Placeholders) --- 

    // Primary CTA Buttons (Get Playbook)
    const primaryButtons = document.querySelectorAll(".cta-button-primary");
    primaryButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("Primary CTA button clicked:", button.textContent);
            // TODO: Implement email capture logic here.
            // This could involve:
            // 1. Showing a modal with a form.
            // 2. Redirecting to a separate form page.
            // 3. Integrating with a marketing automation tool.
            alert("Placeholder: Implement Playbook download/email capture."); 
        });
    });

    // Header CTA Button (Book Call)
    const headerButton = document.querySelector(".cta-button-header");
    if(headerButton) {
        headerButton.addEventListener("click", () => {
            console.log("Header CTA button clicked:", headerButton.textContent);
            // TODO: Implement booking logic here.
            // This could involve:
            // 1. Redirecting to a Calendly link or similar.
            // 2. Showing a booking form modal.
            alert("Placeholder: Implement booking call functionality.");
        });
    }
    
    // "Ask Hayley" Button Placeholder
    const askHayleyButton = document.querySelector("#ask-hayley-placeholder button");
    if (askHayleyButton) {
        askHayleyButton.addEventListener("click", () => {
            console.log("Ask Hayley button clicked.");
            // TODO: Implement chatbot integration or link.
            alert("Placeholder: Implement 'Ask Hayley' interaction.");
        });
    }

    // --- Sticky Nav Shadow/Glow on Scroll ---
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

});

