import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: 'Banglore',
        text: 'feels rainy',
        temp: 24.6,
        feelsLike: 20,
        humidity: 54,
        windSpeed: 30,
        precipitaion: 20,
        lastUpdated: '01 November 2025 IST- 12:27 PM',
    })
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app by Sharad Tiwari</h2>
            <SearchBox updateInfo = {updateInfo}></SearchBox>
            <InfoBox info = {weatherInfo}></InfoBox>
        </div>
    )
}