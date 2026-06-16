const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const themeswitch = document.getElementById("theme-switch");
const body = document.getElementById("body");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

themeswitch.addEventListener("click",()=>{
    body.classList.toggle("bg-slate-950");
    body.classList.toggle("bg-slate-200");
    body.classList.toggle("text-white");
    body.classList.toggle("text-black");
    themeswitch.querySelector(".fa-moon").classList.toggle("hidden");
    themeswitch.querySelector(".fa-sun").classList.toggle("hidden");
   


});
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});
