var gifs = ["Rihanna", "Travis Scott", "Kanye West", "Allen Iverson", "Beyonce", "LeBron James", "Michael Phelps", "Ariana Grande", "Drake", "Taylor Swift", "Kobe Bryant"]

function showGif() {
    var name = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=Hczecoz11Otw3gAD0Px7w3VdV1siPMvK&limit=10";
    $.ajax({

        url: queryURL,

        method: "GET"

    }).then(function (response) {

        console.log(response);

        var gifData = response;

        

        for (p = 0; p < response.data.length; p++) {

            var img = $("<img>")

            img.attr('src', response.data[p].images.downsized.url)

            console.log(gifData.data[p].url);

            $("#pics").prepend(img);

        }

    });
}

function renderButton() {
    $("#buttonDump").empty();
    for (var i = 0; i < gifs.length; i++) {
        var btn = $("<button>");
        btn.addClass("giphy");
        btn.attr("data-name", gifs[i]);
        btn.text(gifs[i]);


        $("#buttonDump").prepend(btn);
    }
};


$(document).ready(function () {

    renderButton();

    $("#gif-button").on("click", function (event) {
        event.preventDefault();

        renderButton();
        var gif = $("#gif-input").val().trim();
        gifs.push(gif);

    })

    $(document).on("click", ".giphy", showGif);
});