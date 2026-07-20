// =============================
// Aggarwal Buildtech JavaScript
// =============================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar Background Change
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 70) {

        navbar.style.background = "#0B2A52";
        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(0,0,0,.45)";
        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";

    }

});

// Reveal Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);

});

// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 20px 35px rgba(0,0,0,.2)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 5px 15px rgba(0,0,0,.1)";

    });

});

// Hero Button Animation
const heroBtn = document.querySelector(".btn");

if (heroBtn) {

    heroBtn.addEventListener("mouseenter", () => {

        heroBtn.style.transform = "scale(1.08)";
    });

    heroBtn.addEventListener("mouseleave", () => {

        heroBtn.style.transform = "scale(1)";
    });

}

// Contact Form
const form = document.getElementById("enquiryForm");

if (form) {
    form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const plot = document.getElementById("plot").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
`🏠 *New Construction Enquiry*

👤 Name: ${name}
📞 Phone: ${phone}
📍 City: ${city}
📐 Plot Size: ${plot}

📝 Project Details:
${message}`;

    window.open(
        `https://wa.me/919810790791?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
    );

    form.reset();
});
}

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#D4AF37";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Console Message
console.log("Aggarwal Buildtech Website Loaded Successfully.");document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});
