$(document).ready(function () {




    var request;
    event.preventDefault();
    $("#lugar").text("Searching ...");
    $("#temperatura").text("");
    $("img").attr('src', "");
    $("#city-weather").text("");

    // Send the request
    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            lat: '10.0171758',
            lon: '-84.2138276',
            appid: '29aa2c08ffab62b509fd8ce5e4e9e099', // put your appid
            units: 'metric'
        }
    });

    // Callback handler for success
    request.done(function (response) {
        formatSearchResults(response);
    });

    // Callback handler for failure
    request.fail(function () {
        $("#lugar").text("Please try again, incorrect input!");
        $("#temperatura").text("");
        $("img").attr('src', "");
        $("#city-weather").text("");
    });
});


function formatSearchResults(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    var city_humidity = jsonObject.main.humidity;
    var viento = jsonObject.wind.speed;

    var imgurl = 'http://openweathermap.org/img/wn/' + jsonObject.weather[0].icon + '@2x.png';
    $("img").attr('src', imgurl);
    $("#lugar").text( city_name);
    $("#city-weather").text(city_weather);
    $("#temperatura").text(city_temp + " Celsius");
    $("#city-humidity").text( city_humidity);
    $("#wind-speed").text( + viento);

}