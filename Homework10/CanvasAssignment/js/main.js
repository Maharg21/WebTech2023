var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d"); 
var x = 60;
var y = 60; 
var x2 = 120; 
var y2 = 120; 
var circle1; 
var square1; 

createCircle(); 

drawCircle(); 


setInterval(moveBlueCircle, 1000/60);  

//Can't seem to get the shapes to appear on my canvas, do I have to move these further down?
function createShapes() {
    circle1 = new Circle(x, y, 20, 20, "green"); 
    square1 = new Square(x2, y2, 50, 50, "red"); 
} 




$(document).ready(function() {
    $(this).keypress(function (event) {
        getKey(event);
    });
}); 

var didCollide = hasCollided(circle1, square1); 

if(didCollide) {
    canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + ")";
    circle1.setWidth(circle1.theWidth - 1); 
    circle1.setHeight(circle1.theHeight - 1); 
    square1.setWidth(square2.theWidth + 1); 
    square1.setHeight(square1.theHeight + 1);
} 

//not sure if I used the correct lines here. They seem to cross "event"
var char = event.which || event.keyCode; 
var actualLetter = String.fromCharCode(char);
if(actualLetter == "w") {
    moveUp();
} else if (actualLetter == "s") {
    moveDown();
} else if (actualLetter == "a") {
    moveLeft();
}  

function update()
{
    drawCircle();
} 

function drawCircle() {
ctx.clear(0,0,800,600);
ctx.fill(x, y, 20, 20);
x+=10;
} 

function drawSquare() {
    ctx.clearRect(0,0,800,600); 
    ctx.fillRect(x, yx, 20, 20);
}


function moveGreenCircle() {
    square1.setX(Math.floor(Math.random() * canvas.width)); 
    square1.setY(Math.floor(Math.random() * canvas.height)); 
    drawSquare();
} 
//For down here, I assume"fillRect" wouldn't work with circles, is leaving it at ctx.fill okay, or is there another word for it?
function drawSquare() {
    ctx.clearRect(0, 0, 700, 500); 
    ctx.fillStyle = circle1.theColor;
    ctx.fill(circle1.theX, circle1.theY, circle1.theWidth, circle1.theHeight); 
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
drawCircle();

//might be redundant 
drawSquare(); 

} 

function moveUp() {
    circle1.setY(square1.theY - 10);
} 

function moveLeft() {
    circle1.setX(circle1.theX + 10); 
} 

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) || 
        (object1.y > (object2.y + object2.height)) || 
        ((object1.x + object1.width) < object2.x) || 
        (object1.x > (object2.x + object2.width))
    ); 

}