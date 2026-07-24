// =========================================
// PRELOADER
// =========================================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        },600);

    }

});

// =========================================
// STICKY HEADER
// =========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// =========================================
// SCROLL PROGRESS BAR
// =========================================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// =========================================
// BACK TO TOP BUTTON
// =========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================================
// COUNTDOWN TIMER
// =========================================

const targetDate = new Date("October 15, 2026 09:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = d;

    hours.textContent = h;

    minutes.textContent = m;

    seconds.textContent = s;

},1000);

// =========================================
// DARK MODE
// =========================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});
// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =========================================
// FAQ ACCORDION
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// =========================================
// TESTIMONIAL SLIDER
// =========================================

const testimonials = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(){

    testimonials.forEach(card => {

        card.classList.remove("active");

    });

    testimonials[testimonialIndex].classList.add("active");

    testimonialIndex++;

    if(testimonialIndex >= testimonials.length){

        testimonialIndex = 0;

    }

}

setInterval(showTestimonial,4000);

// =========================================
// ANIMATED COUNTERS
// =========================================

const counters = document.querySelectorAll(".counter");

const speed = 100;

function runCounter(){

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(update,25);

            }

            else{

                counter.innerText = target;

            }

        };

        update();

    });

}

let counterStarted = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const position = stats.getBoundingClientRect().top;

    if(position < window.innerHeight && !counterStarted){

        runCounter();

        counterStarted = true;

    }

});

// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
".card,.feature-box,.speaker-card,.timeline-item,.stat,.contact-card,.testimonial,.faq-item"
);

function reveal(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            el.classList.add("active","reveal");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// =========================================
// REGISTRATION FORM
// =========================================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("🎉 Thank you for registering for InnovateX 2026!");

    registerForm.reset();

});

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

console.log("InnovateX 2026 Loaded Successfully 🚀");