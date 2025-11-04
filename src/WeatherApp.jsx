import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: 'Search Your City',
        text: 'feels like',
        temp: "",
        feelsLike: "",
        humidity: "",
        windSpeed: "",
        precipitaion: "",
        lastUpdated: '',
    })
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}} className="WeatherApp">
            <h2>Weather app by Sharad Tiwari</h2>
            <SearchBox updateInfo = {updateInfo}></SearchBox>
            <InfoBox info = {weatherInfo}></InfoBox>
        </div>
    )
}