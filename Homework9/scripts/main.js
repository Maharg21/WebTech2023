let planet = { 
    "type" : "Dwarf Planet",
    "size" : "Same size as Pluto",
    "distance" : {
        "Furthest from the sun" : "68 Astro Units"
    }, 
    "orbit" :[
        "558 years for complete orbit",
        "Intersects Neptune's Orbit",
    ]
} 

$(function () {
    $("button").click(function () {
        showPlanetInfo();
    });
}); 

function showPlanetInfo() 
{
    $("#planetInformation").html("Type: " + planet.type
    + "<br>Size:" + planet.size + "<br>Distance:" + planet.distance + "<br>Orbit:" + planet.orbit); 
     

}