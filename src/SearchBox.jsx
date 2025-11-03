import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.weatherapi.com/v1/current.json";
  const API_KEY = "e713ecbaf32e4b908a754338250111";

  const getWeatherInfo = async () => {
    const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
    const jsonResponse = await response.json();

    if (jsonResponse.error) {
      throw new Error(jsonResponse.error.message);
    }

    return {
      city: jsonResponse.location.name,
      text: jsonResponse.current.condition.text,
      temp: jsonResponse.current.temp_c,
      feelsLike: jsonResponse.current.feelslike_c,
      humidity: jsonResponse.current.humidity,
      windSpeed: jsonResponse.current.wind_kph,
      precipitation: jsonResponse.current.precip_mm,
      lastUpdated: jsonResponse.current.last_updated,
    };
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);

    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br /><br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>No such place exists in our database</p>
        )}
      </form>
    </div>
  );
}
