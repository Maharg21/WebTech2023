var canvas;
var ctx;
var x = 75;
var y = 75; 
var circle1, square1; 
var direction;
var questions;
var squareArray = []; 
var lives = 3; 
$(document).ready(function (){ 

    setup(); 

    $(this).keypress(function(event){
        getKey(event);
    }); 
}); 


function setup()
{
    canvas = document.getElementById("myCanvas"); 
    ctx = canvas.getContext("2d"); 

    circle1 = new Circle(150,150,100,100,"#00FF00"); 
    square1 = new Square(500,500,150,150,"#FF0000"); 
    $.getJSON("data/information.json"), function(data) {
        for(var i = 0; i < data.circles.length; i++) 
        {
            circleArray.push(new Circle(data.circles[i].x,data.circles[i].y, data.circles[i].h, data.circles[i].w, data.circles[i].color));
        }
        drawCircle();
    }; 
        
} 

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter =="s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(circle1,square1); 
    var test2 = false;
    for(var i = 0; i < circleArray.length; i++)
    {
        test2 = hasCollided(circle1,circleArray[i]);
        if(test2 == true)
        {
            break;
        }
    } 
    if(test || test2)
    {
        lives--;
        if(ddirection == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        } 
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    }
    drawCircle();

} 

function moveUp()
{
    circle1.y-=10;
}
function moveDown()
{
    circle1.y+=10;
}
function moveLeft()
{
    circle1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = circle1.mainColor;
    ctx.fillRect(circle1.x,  circle1.y, circle1.width, circle1.height);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    for(var i = 0; i < circleArray.length; i++) 
    {
        ctx.fillStyle = (circleAray[i].y, circleArray[i].width, circleArray[i].height);
    }
    ctx.font = "35px Arimo";
    ctx.fillText("Lives: " + lives, 10, 50);

} 

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) || 
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) || 
        (object1.x > (object2.x + object2.width))
    );
}