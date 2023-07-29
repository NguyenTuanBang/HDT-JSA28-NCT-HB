const API_KEY="724457ae3071f374141aa2fcc5ac4564";



const DEFAULT_VALUE= "____"
const searchInput=document.querySelector('.search-input')
const cityName=document.querySelector(".city-name")
const weatherStage=document.querySelector(".weather-stage")
const weatherIcon= document.querySelector(".weather-icon")
const temperature= document.querySelector(".temperature")

const sunrise= document.querySelector(".sunrise")
const sunset = document.querySelector(".sunset")
const humidity =document.querySelector(".humidity")
const windSpeed = document.querySelector(".wind-speed")

// lap trinh bat su kien enter tai input

searchInput.addEventListener("change", (event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value.trim()}&appid=${API_KEY}&lang=vi&units=metric`)
    .then(response => response.json())
    .then(data => {console.log(data);
        cityName.innerHTML=data.name ||DEFAULT_VALUE;
        weatherStage.innerHTML=data.weather[0].description;
        temperature.innerHTML=Math.round(data.main.temp)
        weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        sunrise.innerHTML=data.sys.sunrise;
        sunset.innerHTML=data.sys.sunset;
        humidity.innerHTML=data.main.humidity
        windSpeed.innerHTML=(data.wind.speed*3,6).toFixed(2)


        let sunriseTime= new Date(Number(data.sys.sunrise)*1000)
        sunrise.innerHTML=`${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`
        let sunsetTime= new Date(Number(data.sys.sunset)*1000)
        sunset.innerHTML=`${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`
    //code truyen du lieu vao HTML
    })
    .catch(err => console.error(err))
})











