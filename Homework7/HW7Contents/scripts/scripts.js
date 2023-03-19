var myViewFinderArray = new Array(); 

class ViewFinder
{
constructor(Title)
{ 
    this.title = title;
    // So the example said the constructor also requires a description and an image path, yet it never listed them. 
    // Do you use the 'this' for the other objects are are they redundant? I didn't write them down here because there were errors that popped up
    this.image = HW7Contents/images/penguin.png; 
    }
    
}




toString()
{
    return "Title: "+ this.title;
}
// Not sure why the 'get' is underlined, shouldn't be any unreachable code anywhere
get theTitle()
{
    return this.title;
    } 



function initializeArray()
{
    var myViewFinder = new ViewFinder ("An Albino Penguin from Antarctica"); 
    var myViewFinder1 = new ViewFinder("A circle of colored hands for Social Justice"); 

    myViewFinderArray.push(myViewFinder); 
    myViewFinderArray.push(myViewFinder1);
} 

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}