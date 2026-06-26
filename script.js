// ================================
// Manasa Hair Saloon - Script
// ================================

// Elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const topBtn = document.getElementById("topBtn");

// ================================
// Mobile Menu
// ================================
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Close menu when clicking navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (
        menuToggle &&
        navLinks &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("show");
    }
});

// ================================
// Smooth Scrolling
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ================================
// Booking Form
// ================================
if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !service) {

            formMessage.style.color = "#ff4d4d";
            formMessage.textContent = "Please fill all required fields.";

            return;
        }

        // Indian Mobile Validation
        if (!/^[6-9]\d{9}$/.test(phone)) {

            formMessage.style.color = "#ff4d4d";
            formMessage.textContent =
                "Please enter a valid 10-digit mobile number.";

            return;
        }

        const whatsappNumber = "918008841052";

        const whatsappMessage = encodeURIComponent(

`🌸 *New Booking Request* 🌸

👤 Name : ${name}

📞 Phone : ${phone}

💇 Service : ${service}

📝 Message :
${message || "No additional message"}

Thank you.
`
        );

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        const submitBtn =
            bookingForm.querySelector("button");

        submitBtn.disabled = true;
        submitBtn.textContent = "Opening WhatsApp...";

        formMessage.style.color = "#25D366";
        formMessage.textContent =
            "Redirecting to WhatsApp...";

        window.open(whatsappURL, "_blank");

        bookingForm.reset();

        setTimeout(() => {

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Booking Request";

            formMessage.textContent = "";

        }, 3000);

    });

}

// ================================
// Scroll To Top
// ================================
window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ================================
// Fade-in Animation
// ================================
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".service-card, .gallery-card, .price-card, .contact-card"
).forEach(el => {

    observer.observe(el);

});

console.log("✅ Manasa Hair Saloon Website Loaded Successfully");