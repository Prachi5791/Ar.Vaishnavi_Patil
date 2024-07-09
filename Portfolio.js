// Navigation bar effects on scroll
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Services Section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtn, i) =>{
    learnMoreBtn.addEventListener("click", () =>{
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) =>{
    modalCloseBtn.addEventListener("click", () =>{
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//CV Download
const CVBtn = document.querySelector(".CV-btn");
const CVModals = document.querySelector(".CV-model");
const CVCloseBtns = document.querySelector(".CV-close-btn");

CVBtn.addEventListener("click", ()=>{
    CVModals.classList.add("active");
});

CVCloseBtns.addEventListener("click", () =>{
        
            CVModals.classList.remove("active");
       
});


// Portfolio Section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () =>{
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) =>{
    portfolioCloseBtn.addEventListener("click", () =>{
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our Clients - Swiper
var swiper = new Swiper(".client-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Website Dark / Light Theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getcurrentTheme());
    localStorage.setItem("saved-icon", getcurrentIcon());
});

const getcurrentTheme = ()=> document.body.classList.contains("dark-theme") ? "dark" : "light";
const getcurrentIcon = ()=> themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to Top Button
const scrollTopBtn = document.querySelector(".scrolltoTop-btn ");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click",() =>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
})

// Navigation Menu Items Active In Page SCroll
// to get color change in nav bar items when section selected
window.addEventListener("scroll",()=>{
    const sections = document.querySelectorAll("section");
    //This line retrieves the number of pixels the document has been scrolled vertically and stores it in the scrollY variable. window.pageYOffset is the same as window.scrollY.
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        //height of the current section element and stores it in the sectionHeight variable.

        let sectionTop = current.offsetTop - 50;
        //distance from the top of the document to the top of the current section element, subtracting 50 pixels, and stores it in the sectionTop variable. The subtraction of 50 pixels is likely to account for some offset, such as a fixed header.

        let id = current.getAttribute("id");

        //ensures the user has not yet scrolled past the bottom of the section.(<=) user has scrolled past the top of the section.(>)
        if (scrollY > sectionTop && scrollY<= sectionTop+sectionHeight){
            document.querySelector(".nav-items a[href*=" +id+ "]").classList.add("active");
            //finds the  <a> in nave-items list and take the id
        }
        else{
            document.querySelector(".nav-items a[href*=" +id+ "]").classList.remove("active");
        }

    });
});

//Responsive Navigation Menu Toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a")

menuBtn.addEventListener("click", ()=>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) =>{
    navItem.addEventListener("click", () =>{
        navigation.classList.remove("active");
    });
});

// Scroll Revel Animations

//Commo Reaveal Options to Create Reveal Aniations
ScrollReveal({ 
    reset: true,
    distance: '55px',
    duration: 1000,
    delay: 50
});

//Target Elements, and Specify Options to Create Reveal Animation
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 100, origin: 'left'} );
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 200, origin: 'right'} );
ScrollReveal().reveal('.home .info .btn', { delay: 300, origin: 'bottom'} );
ScrollReveal().reveal('.media-icon i, .contact-left li', { delay: 100, origin: 'left', interval: 100} );
ScrollReveal().reveal('.home-img, .about-img', { delay: 100, origin: 'bottom'} );
ScrollReveal().reveal('.about .description, .contact-right', { delay: 200, origin: 'right'} );
ScrollReveal().reveal('.about .professional-list li', { delay: 100, origin: 'right', interval: 50} );
ScrollReveal().reveal('.services-description, .skills-description, .contact-card, .client-Swiper, .contact-left h2', { delay: 300, origin: 'left'} );
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 300, origin: 'bottom', interval: 50} );

ScrollReveal().reveal('.footer-container .group', { delay: 100, origin: 'top', interval: 50} );

    

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Validation
        var Name = document.getElementById('Name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var subject = document.getElementById('Subject').value;
    
        if (!email.includes('@')) {
            alert('Email should contain the domain name');
            return;
        }
    
        // Add more validations for date, phone, and message length
    
        // Submit the form if all validations pass
        submitForm();
    });
const contactModel = document.querySelector(".contact-model");
function submitForm() {
    // Get form data
    var formData = new FormData();
    formData.append('Name', document.getElementById('Name').value);
    formData.append('Subject', document.getElementById('Subject').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('message', document.getElementById('message').value);

    // Submit form data to Formspree
    fetch('https://formspree.io/f/mgvwebqk', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //alert('Form submitted successfully!');
        contactModel.classList.add("active");
        document.getElementById('contact-form').reset(); // Reset the form
    })
    .catch(function(error) {
        console.error('There was a problem with your fetch operation:', error);
        alert('Form submission failed. Please try again later.');
    });
}

function closeForm(){
    contactModel.classList.remove("active");
}


//free Lancer swiper
var slides;

function showDivs(slideIndex) {
    // slides is already declared globally, so no need to redeclare it here
    // var slides = document.querySelectorAll('.flipping-slide');
    
    // Check if slides exist and slideIndex is within range
    if (slides.length > 0 && slideIndex >= 0 && slideIndex < slides.length) {
        // Hide all slides
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        
        // Show the specific slideIndex
        slides[slideIndex].style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize slides here once the DOM content is loaded
    slides = document.querySelectorAll('.flipping-slide');
    
    var tapText = document.querySelector('.tap-text');
    var currentSlide = 0;

    tapText.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showDivs(currentSlide);
    });
});

