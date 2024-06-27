const submit = document.getElementById('submit');
const cityValue = document.getElementById('city');


submit.addEventListener('click', getInfo);

function getInfo(event) {
    event.preventDefault();
    
    const cityName = document.getElementById('cityNameHeader');
    const city = cityValue.value;
    cityName.textContent = city;
    // the above code makes it so that upon clicking the button, the referenced header will display the name of the city the user has searched for
    const requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2bd10682d56a268353fe725f24bcb9e8&units=imperial`

    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
        const currentTemp = document.getElementById('currentTemp');
        currentTemp.textContent = 'Temp: ' + data.list[0].main.temp;
        const currentHumidity = document.getElementById('currentHumid');
        currentHumidity.textContent = 'Humidity: ' + data.list[0].main.humidity;
        const currentWind = document.getElementById('currentWind');
        currentWind.textContent = 'Wind Speed: ' + data.list[0].wind.speed;
        // the above code creates a fetch request to get information from the weather API, then gets and changes some elements to reflect this information.
        const currentIcon = document.getElementById('img1')
        const iconCode1 = data.list[0].weather[0].icon
        const iconURL1 = `https://openweathermap.org/img/wn/${iconCode1}@2x.png`
        currentIcon.src = iconURL1
         //The above code gets the img element we're changing, the corresponding icon code for the current day, and creates a proper URL with the icon code. It then sets the img's src element to the proper icon url

         // the below code functions the same way the previous two comments have described, repeating the process for the next 5 days.
        const day1Temp = document.getElementById('oneTemp');
        day1Temp.textContent = 'Temp: ' + data.list[1].main.temp;
        const day1Humidity = document.getElementById('oneHumid');
        day1Humidity.textContent = 'Humidity: ' + data.list[1].main.humidity;
        const day1Wind = document.getElementById('oneWind');
        day1Wind.textContent = 'Wind Speed: ' + data.list[1].wind.speed;
        
        const day1Icon = document.getElementById('img2')
        const iconCode2 = data.list[1].weather[0].icon
        const iconURL2 = `https://openweathermap.org/img/wn/${iconCode2}@2x.png`
        day1Icon.src = iconURL2

        const day2Temp = document.getElementById('twoTemp');
        day2Temp.textContent = 'Temp: ' + data.list[2].main.temp;
        const day2Humidity = document.getElementById('twoHumid');
        day2Humidity.textContent = 'Humidity: ' + data.list[2].main.humidity;
        const day2Wind = document.getElementById('twoWind');
        day2Wind.textContent = 'Wind Speed: ' + data.list[2].wind.speed;
        
        const day2Icon = document.getElementById('img3')
        const iconCode3 = data.list[2].weather[0].icon
        const iconURL3 = `https://openweathermap.org/img/wn/${iconCode3}@2x.png`
        day2Icon.src = iconURL3

        const day3Temp = document.getElementById('threeTemp');
        day3Temp.textContent = 'Temp: ' + data.list[3].main.temp;
        const day3Humidity = document.getElementById('threeHumid');
        day3Humidity.textContent = 'Humidity: ' + data.list[3].main.humidity;
        const day3Wind = document.getElementById('threeWind');
        day3Wind.textContent = 'Wind Speed: ' + data.list[3].wind.speed;
        
        const day3Icon = document.getElementById('img4')
        const iconCode4 = data.list[3].weather[0].icon
        const iconURL4 = `https://openweathermap.org/img/wn/${iconCode4}@2x.png`
        day3Icon.src = iconURL4

        const day4Temp = document.getElementById('fourTemp');
        day4Temp.textContent = 'Temp: ' + data.list[4].main.temp;
        const day4Humidity = document.getElementById('fourHumid');
        day4Humidity.textContent = 'Humidity: ' + data.list[4].main.humidity;
        const day4Wind = document.getElementById('fourWind');
        day4Wind.textContent = 'Wind Speed: ' + data.list[4].wind.speed;
        
        const day4Icon = document.getElementById('img5')
        const iconCode5 = data.list[4].weather[0].icon
        const iconURL5 = `https://openweathermap.org/img/wn/${iconCode5}@2x.png`
        day4Icon.src = iconURL5

        const day5Temp = document.getElementById('fiveTemp');
        day5Temp.textContent = 'Temp: ' + data.list[5].main.temp;
        const day5Humidity = document.getElementById('fiveHumid');
        day5Humidity.textContent = 'Humidity: ' + data.list[5].main.humidity;
        const day5Wind = document.getElementById('fiveWind');
        day5Wind.textContent = 'Wind Speed: ' + data.list[5].wind.speed;
        
        const day5Icon = document.getElementById('img6')
        const iconCode6 = data.list[5].weather[0].icon
        const iconURL6 = `https://openweathermap.org/img/wn/${iconCode6}@2x.png`
        day5Icon.src = iconURL6
    })
}