const submit = document.getElementById('submit');

submit.addEventListener('click', getInfo);

function getInfo(event) {
    event.preventDefault();
    
    const newName = document.getElementById('city');
    const cityName = document.getElementById('cityNameHeader');
    cityName.textContent = newName.value;
}

fetch("https://api.openweathermap.org/data/2.5/weather?q='+newName.value+'&appid=2bd10682d56a268353fe725f24bcb9e8}")