const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'fabde8328e580937aee8bf357842e101';

const serchBar = document.getElementById('serchBar');

let temp = document.querySelector('.temp');
let city = document.querySelector('.city');
let desc = document.querySelector('.desc');
let minmax = document.querySelector('.minmax')


serchBar.addEventListener('keypress', (e) => {
    if (e.keyCode == '13') {
        if (serchBar.value === '') {
            city.innerHTML = '';
            temp.innerHTML = '';
            desc.innerHTML = '';
            minmax.innerHTML = '';
        } else {
            getResult(serchBar.value);

        }
    }
})
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then((weather) => weather.json())
        .then((displayResult) => {
            console.log(displayResult.main.temp_min)
            console.log(displayResult.main.temp_max)
            city.innerText = `${displayResult.name},${displayResult.sys.country}`
            temp.innerText = `${Math.round(displayResult.main.temp)}°C`
            desc.innerText = displayResult.weather[0].description
            minmax.innerText = `${Math.round(displayResult.main.temp_min)}°C / ${Math.round(displayResult.main.temp_max)}°C`
        })
}