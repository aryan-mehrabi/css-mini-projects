var counter = 0;
var d = setInterval(function() {
    if(counter < 101) {
        document.getElementsByClassName("second-one")[0].style.width = counter + "%";
        document.getElementsByTagName("p")[0].innerHTML = counter + "%";
        counter++;
    } else {
        clearInterval(d);
    }
},300)