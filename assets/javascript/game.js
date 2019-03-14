

var animals = ["Lion", "Dog", "Tiger", "Giraffe", "Cat", "Elephant", "Zebra", "Bear", "Fox", "Horse", "Donkey"];

$("button").on('click', function () {

    //
    var animal = $(this).data("search");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=vry9bYL5TDyyAMQdwGIXULv08uIjQ2q7";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        //console.log(response);


        for (var i = 0; i < response.data.length; i++) {
            var div = $("<div>");
            var p = $("<p>");
            var img = $("<img>");


            p.text("Rating: " + response.data[i].rating);


            img.attr("src", response.data[i].images.downsized.url);


            div.append(img, p);


            $("#under-button").prepend(div);

        }

        function renderButtons() {

            $("#under-button").empty();

            for (var i = 0; i < animals.length; i++) {
                $("under-button").append("<button>" + animals[i] + "</button>");

            }

        }
        $("#add-add").on("click", function (event) {
            event.preventDefault();

            var animal = $("#animal-input").val().trim();
            animals.push(animal);
            renderButtons();

        });

    })

    $(".gif").on("click", function () {

        var condition = $(this).attr("animal-search");

        if (condition === "still") {
            $(this).attr("src", $(this).attr("data-animat"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });


})



renderButtons();

