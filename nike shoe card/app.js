var images = ["shoe", "shoe-blue", "shoe-red"],
    img = document.getElementById("img"),
    btns= document.getElementById("btns");
for (let index = 0; index < btns.children.length; index++) {
    const element = btns.children[index];
    element.addEventListener("click", function(){
        img.src = images[index] + ".png";
        var all = document.getElementsByClassName("active")[0];
        all.classList.remove("active");
        element.classList.add("active");
    })
}
