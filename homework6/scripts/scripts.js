var imageTags = ["image1", "image2", "image3", "image4"];

var blankImagePath = "images/image_cover.jpg";

var actualImages = new Array(); 

function printBlanks() 
{
    createRandomImageArray(); 
for(var i = 0; i < imageTags.length; i++) 
{
   document.getElementById(imageTags[i]).src= blankImagePath; 
}


} 

function createRandomImageArray()
{
    var actualImagePath = ["images/king.jpg", "images/queen.jpg", "images/jack.jpg", "images/ace.jpg"];
    var count = [0,0];
    while(actualImages.length < 4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] <2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
    
        }
    }
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}