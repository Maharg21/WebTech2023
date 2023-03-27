var circleSelector = "#circle";
var allCircles = new Array();
var squareSelector =
class CircleInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
} 

function initializeArray()
{
    var circle = new CircleInfo("#shape", "images/circle.png") 
    allCircles.push(circle);
    
    // I get errors here when I put in the parenthesis and bracket, even though it's what's written in the example
}
$(document).ready(function()){
    initializeArray();
    console.log(allCircles.length);
    console.log(allCircles[0].toString());
    console.log(allCircles[0].theImagePath);
} 
    

    $(allCircles[0].theSelector).attr("src", allCircles[0].theImagePath);

    $("button").click(function()){
        $(".stuff").fadeOut();

        $("#third").toggle();

        $("#third").toggle();
            setInterval(moveSSquare, 1000)
        $(allCircles[0].theSelector).fadeOut().fadeIn();

// I assume this was supposed to close the parenthesis and brackets in the functions above, but again I get errors
// If the script doesn't run, then this is the reason why. Not sure what else to write in it's place. 
        });
    });
    
    function moveSquare()
    {
        $("#square").animage({left:250}).animate({top:400}).animate({top:300});
    }
