let menu = document.getElementsByClassName("menu")[0],
    menuBar = document.getElementsByClassName("menu-bar")[0];
menu.addEventListener("click", function(){
    menu.classList.toggle("change");
    menuBar.classList.toggle("display");
})