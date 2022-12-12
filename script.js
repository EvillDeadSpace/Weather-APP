//key OPENWEATHERMAP
let weather = {
    apiKey: "e8196a1a3f8a1483f6c8770ba4f549ad",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    //finction to display weather
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        //change text in html
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + "km/h";
    },
    //function to search
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
//event to press ENTER
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

// Path: script.js
//change text in html