const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-mobile");
const main = document.querySelector(".big-wrap");
const dim = document.querySelector(".container");
// document.body.firstElementChild=dim
// nav.previousElementSibling = dim;



ham.addEventListener("click",()=>{
    ham.classList.toggle("active");
    nav.classList.toggle("active");
    dim.style.display = "block";
})

console.log(document.body)