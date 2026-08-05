/* ===========================
      Typing Animation
=========================== */

const roles = [
    "AI & ML Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Data Analyst",
    "Python Developer"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();



/* ===========================
      Active Navbar
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});



/* ===========================
      Scroll Reveal
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
if (typeof AOS !== "undefined") {
    AOS.init({
        duration:1000,
        once:true,
        easing:"ease-in-out"
    });
}

if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(
        document.querySelectorAll(".project-card,.skill-card,.achievement-card"),
        {
            max:10,
            speed:400,
            glare:true,
            "max-glare":0.2
        }
    );
}

if (
    typeof particlesJS !== "undefined" &&
    document.getElementById("particles-js")
) {
    particlesJS("particles-js",{
        particles:{
            number:{value:55},
            color:{value:"#38bdf8"},
            shape:{type:"circle"},
            opacity:{value:0.5},
            size:{value:3},
            move:{
                enable:true,
                speed:2
            }
        }
    });
}
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* ===========================
      EMAILJS CONTACT FORM
=========================== */

// Initialize EmailJS
emailjs.init("lN23A6dJFzh5WeSRE");

// Contact Form
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        button.innerHTML = "Sending...";
        button.disabled = true;

        emailjs.sendForm(
            "service_zpbkbal",
            "template_r2gol6t",
            this
        )

        .then(function() {

            alert("✅ Message sent successfully!");

            contactForm.reset();

            button.innerHTML = "Send Message";
            button.disabled = false;

        })

        .catch(function(error) {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

            button.innerHTML = "Send Message";
            button.disabled = false;

        });

    });

}