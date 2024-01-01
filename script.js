const apiKey = "f0efa23b110812a673fce1b29fecc10b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
searchBtn.addEventListener("click", function() {
    checkWeather(searchInp.value);
});

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.statusCode == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "Images/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "Images/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "Images/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "Images/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "Images/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();