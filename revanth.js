document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".fade-in-slide-up");

    function checkVisibility() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contact-form");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
    
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
    
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received.`);
                form.reset(); 
            } else {
                alert("Please fill in all fields.");
            }
        });
    });
    
    
});
