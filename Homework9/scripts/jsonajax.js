$(document).ready(function () {
    $("button").click(function () {
        $("#planetInformation").load("data/planet.json", function(responseText){
            var planet = JSON.parse(responeText);
            $("#bikeInformation").html("Type: " + planet.type
            + "<br>Size:" + planet.size  
            +"<br>Distance:" + planet.distance
            +"<br>Orbit:" + planet.orbit);
        });
    });
}); 

/* same thing as the example: function fadeText() */