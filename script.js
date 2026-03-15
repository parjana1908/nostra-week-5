// selecting offer 
var offer = document.getElementById("offer");
var offerClose = document.getElementById("offer-close");

offerClose.addEventListener("click",()=>{
    offer.style.display="none"
})

// selecting menu
var menu = document.getElementById("menu");
var slidebar = document.getElementById("slide-bar");
var close = document.getElementById("close");

menu.addEventListener("click", ()=>{
    slidebar.style.marginLeft = 0
})
close.addEventListener("click", ()=>{
    slidebar.style.marginLeft = "-60%"
})



// slider

var slides = document.querySelectorAll(".slide"); 
var slider = document.querySelector(".slider");
var prev = document.querySelector(".slide-prev");
var next = document.querySelector(".slide-next");

var currentSlide = 0;
const slideCount = slides.length; // total number of slides

function goToSlide(index){
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slideCount;
    goToSlide(currentSlide);
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    goToSlide(currentSlide);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);