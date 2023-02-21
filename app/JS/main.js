const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-mobile");




ham.addEventListener("click",()=>{   //When hamburger menu is clicked do this
    
    //Toggle and add ".active" class to .hamburger class Element
    ham.classList.toggle("active");

    //same here for .nav-mobile
    nav.classList.toggle("active");
})

