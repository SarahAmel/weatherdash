// Global Variables
const searchHistory = [];
const weatherApiUrl = "";
const apiKey = "d9d3324ea56c72ce3192ce1f1e1ea648";
var city = "Orlando"


function getLatLon () {
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(apiURL)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log (data)
            console.log('Lat: ', data.coord.lat)
            console.log('Lon: ', data.coord.lon)
            getForecast(data.coord.lat, data.coord.lon)
        })


} 

function getForecast (lat, lon) {

var apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
fetch(apiURL) 
.then(function(res){
    return res.json()
})
}

getLatLon();

// DOM Element References
let searchForm = document.querySelector("#search-form");
let searchInput 
let forecastBox 
let searchDisplayBox

// Add Timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

//put below inside your render current weather function
var date = dayjs().tz(timezone).format('M/D/YYYY');

// Function to Display Search History

