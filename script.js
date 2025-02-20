const apiKey = 'c86d189bfef7f13dc331ea990002abdd'; // Replace with your OpenWeatherMap API key
const search = document.getElementById("search");
const submit = document.getElementById("submit");

submit.addEventListener('click', function () {
    const location = search.value.trim();
    if (!location) {
        document.getElementById("error").innerHTML = "Please enter a valid city name.";
        return;
    }
    fetchWeather(location); // Call the function to fetch weather data
});

async function fetchWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        // Update the UI with weather data
        document.getElementById("place").innerHTML = `Weather in ${location}`;
        document.getElementById("temprature").innerHTML = `Temperature: ${data.main.temp}°C`;
        document.getElementById("emoji").innerHTML = `Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
        document.getElementById("windSpeed").innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        document.getElementById("error").innerHTML = ''; // Clear any previous error message
    } catch (error) {
        document.getElementById("error").innerHTML = error.message;
    }
}
