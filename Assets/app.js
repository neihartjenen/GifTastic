$(document).ready(function(){

    let animals = ["Cats", "Dogs","Sloths", "Donkeys"];

function addButtons(arrayToUse, classA, areaA){

    $(areaA).empty();
    
    
        for (let i=0; i < arrayUse.length; i++){
        let a = $("<buttons>");
        a.addClass(classA);
         a.attr("data-type", arrayToUse[i]);
        $(areaA).append(a);
    
        }
    }

$(document).on("click", ".animalButtons", function(){
    $("#images").empty();

    $(".animalButtons").removeclass("active");
    $(this).addClass("active");
    
    let type = $(this).attr("data-type");
    let queryURL= "http://api.giphy.com/v1/gifs/search?q=${type}&api_key=o0ZVa4GCl3ycP3lJFTccn3HTeFLrbIJY";

$.ajax({
 url:queryURL
method: "GET"
})

.then(function(response){
    let results = response.data;
   
    for (var i = 0; i < results.length; i++){
        let animalTest = $("<div class=\"animal-species\">");
        let animated = results[i].images.fixed_height.url;
        let still = results[i].images.fixed_height_still.url;
        let animalImage = $("<img>");
        animalImage.attr("src", still);
        animalImage.attr("data-still", still);
        animalImage.attr("data-animate", animated);
        animalImage.attr("data-state"), "still");
        animalImage.addClass("animal-image");

        animalDiv.append(.Dogs);
        animalDiv.append(animalImage)
        $("#images").append(.Dogs);

    }

    $(document).on("click", ".animal-image", function(){
        let state = $(this).attr("data-state");
        if (state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "still");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        
        };
    });

});