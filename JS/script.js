var skillItemHeaders = document.querySelectorAll(".skills-item-header");

skillItemHeaders.forEach(skillItemHeader => {
    skillItemHeader.addEventListener("click", event => {
        const currentActiveHeader = document.querySelector(".skills-item-header.active");
        if( currentActiveHeader && currentActiveHeader !== skillItemHeader ){
            currentActiveHeader.classList.toggle("active")
            currentActiveHeader.nextElementSibling.style.maxHeight = 0;
        }


        skillItemHeader.classList.toggle("active")
        const skillItemActiveBody = skillItemHeader.nextElementSibling;
        if(skillItemHeader.classList.contains("active")){
            skillItemActiveBody.style.maxHeight = skillItemActiveBody.scrollHeight + "px"
        }
        else{
            skillItemActiveBody.style.maxHeight = 0
        };
    });
});

function onPageLoad(){
   const loader =  document.querySelector(".loader");
   setTimeout(() => {
        loader.style.display = "none";
   }, 2000);
}

AOS.init({
    offset: 50
}
);

const hamburger = document.getElementById("hamburger");
var navmenu = document.querySelector(".landing_home nav ul#navs");
// console.log(navmenu)

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("navbar_close");
    if(hamburger.classList.contains("navbar_close")){
        hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        navmenu.classList.add("active")
    }
    else{
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>'
        navmenu.classList.remove("active")
    }
})

const navLinks = document.querySelectorAll(".landing_home nav ul#navs li.nav-link")
navLinks.forEach(e => {
    e.addEventListener("click",()=>{
        navmenu.classList.remove("active")
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>'
    })
})



