let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar-collapse");

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


