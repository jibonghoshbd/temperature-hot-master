const API_KEY = 'b1d81485d8655f747063dd57fda64030';

const searchTemperature = () => {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput === '') {
        const error = document.getElementById('error')
        error.style.display = 'block'
    } else if (searchInput) {
        error.style.display = 'none'
    };
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}&units=metric`;
    document.getElementById('search-input').value = '';
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) => {

    if (temperature.cod == '404') {
        const error = document.getElementById('error')
        error.style.display = 'block'
    }
    setInnerText('city', temperature.name);
    setInnerText('tempeture', temperature.main.temp)
    setInnerText('conduction', temperature.weather[0].description)
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}.png`;
    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src', url)
}