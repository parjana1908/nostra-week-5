// collection 

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
// search box

var search = document.getElementById("searchInput");
var product = document.querySelectorAll(".product");

search.addEventListener("input", function () {

    let value = search.value.toLowerCase();

    product.forEach(function(product){

        let name = product.querySelector("h2").textContent.toLowerCase();
        let filter = product.getAttribute("data-filter").toLowerCase();

        if(name.includes(value) || filter.includes(value)){
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

});


// checkbox

const checkboxes = document.querySelectorAll('input[name="filter"]');
const products = document.querySelectorAll('.product');

checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});

function filterProducts(){

    let selected = [];

    document.querySelectorAll('input[name="filter"]:checked').forEach(box=>{
        selected.push(box.value);
    });

    products.forEach(product=>{

        const tags = product.dataset.filter;

        if(selected.length === 0){
            product.style.display = "block";
            return;
        }

        let show = selected.every(value => tags.includes(value));

        product.style.display = show ? "block" : "none";

    });

}
