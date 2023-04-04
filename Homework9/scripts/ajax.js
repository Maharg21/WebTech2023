$(document).ready(function() {
    $("button").click(function () {
        $("#planetInformation").load("data/planetInfo.txt", fadeText);
    });
}); 

function fadeText()
{
    $("planetInformation").fadeOut("slow").fadeIn("fast");
}