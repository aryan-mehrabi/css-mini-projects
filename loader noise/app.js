$(document).ready(function () {

    //DOM catch
    var $counter = $(".counter"),
    $liOuterHeight = 200,
    $firstNum = $counter.find("ul:nth-child(1)"),
    $secondNum = $counter.find("ul:nth-child(2)"),
    $thirdNum = $counter.find("ul:nth-child(3)");

    // container height
    $counter.css("height", $liOuterHeight + "px");
    $firstNum.css("top", $liOuterHeight + "px");
    $secondNum.css("top", $liOuterHeight + "px");
    $thirdNum.css("top", $liOuterHeight + "px");

    //functionMain
    function counter(selector, seconds) {
        selector.animate({"top": "-=" + Number($liOuterHeight) + "px" }, seconds, function(){
            if (-10 * Number($liOuterHeight) == selector.css("top").slice(0,selector.css("top").length - 2)) {
                selector.css("top", "0px");
            };
        })    
    }
    var d = setInterval(counter, 120, $secondNum, 120);
    var dd = setInterval(counter, 50, $thirdNum, 50);
    $firstNum.animate({"top": "0px"},420)

    setTimeout(function() {
        clearInterval(d);
        clearInterval(dd);
        setTimeout(function(){
            d = setInterval(counter, 150, $secondNum, 150);
            dd = setInterval(counter, 30, $thirdNum, 30);
            setTimeout(function() {
                clearInterval(d);
                clearInterval(dd);
                setTimeout(function(){
                    d = setInterval(counter, 120, $secondNum, 120);
                    dd = setInterval(counter, 30, $thirdNum, 30);
                    setTimeout(function() {
                        clearInterval(d);
                        clearInterval(dd);
                        setTimeout(function(){
                            $firstNum.animate({"top": -Number($liOuterHeight) + "px"},350);
                            $secondNum.animate({"top": -10 * Number($liOuterHeight) + "px"}, 350);
                            $thirdNum.animate({"top": -10 * Number($liOuterHeight) + "px"},50,function(){
                                $thirdNum.css("top", "0px");
                                $thirdNum.animate({"top": -10 * Number($liOuterHeight) + "px"},50,function(){
                                    $thirdNum.css("top", "0px");
                                    $thirdNum.animate({"top": -10 * Number($liOuterHeight) + "px"},50,function(){
                                        $thirdNum.css("top", "0px");
                                        $thirdNum.animate({"top": -10 * Number($liOuterHeight) + "px"},50)
                                    })
                                })
                            })
                        }, 400)
                    },400)
                },400)      
            }, 400)
        },600)
    }, 400)
});