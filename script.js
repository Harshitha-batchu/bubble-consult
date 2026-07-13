// Testimonials

const testimonials = [
    {
        message: "Bubble Consult helped us grow our business quickly. Their team was professional and supportive.",
        name: "- Mr. John Geller"
    },
    {
        message: "Excellent service and amazing support. Highly recommended for startups.",
        name: "- Sarah Wilson"
    },
    {
        message: "The team delivered beyond our expectations. We loved working with Bubble Consult.",
        name: "- David Brown"
    }
];

let current = 0;

const message = document.getElementById("testimonial-message");
const name = document.getElementById("testimonial-name");

function showTestimonial() {
    message.textContent = testimonials[current].message;
    name.textContent = testimonials[current].name;
}

document.getElementById("next").addEventListener("click", function () {
    current = (current + 1) % testimonials.length;
    showTestimonial();
});

document.getElementById("prev").addEventListener("click", function () {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial();
});

setInterval(function () {
    current = (current + 1) % testimonials.length;
    showTestimonial();
}, 5000);


// Hamburger Menu

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
