window.addEventListener("scroll", function(){
    var logo = document.getElementsByClassName("logo")[0],
        container = document.getElementsByClassName("container")[0],
        menu = document.getElementById("list");
    var scrolled = document.documentElement.scrollTop;
    if (scrolled == 0) {
        logo.style.top = "50%";
        logo.style.left = "50%";
        logo.style.transform = "translate(-50%, -50%)";
        container.style.height = "100%";
        menu.style.opacity = "0";
    } else {
        logo.style.top = "-70px";
        logo.style.left = "88%";
        logo.style.transform = "scale(0.2)";
        container.style.height = "60px";
        menu.style.opacity = "1"
    }
})