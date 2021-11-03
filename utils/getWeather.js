import { useState, useEffect } from "react";
import { API_KEY } from "react-native-dotenv";
import axios from "axios";

// fetch api with axios
const url = "https://api.openweathermap.org/data/2.5";

const callApi = axios.create({
  baseURL: url,
  timeout: 1000,
});

export default function getWeather(city, country) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city && country) {
      fetchAPI(city, country);
    }
  }, [city, country]);

  const fetchAPI = async (city, country) => {
    try {
      const endpoint = `/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`;
      const res = await callApi.get(endpoint);
      const data = await filterData(res.data);
      setWeather(data);
    } catch (err) {
      console.log("API Connection Failed");
    }
  };

  return weather;
}

const filterData = (rawData) => {
  const { list, city } = rawData;
  return {
    id: city.id,
    name: city.name,
    country: city.country,
    timezone: city.timezone,
    coord: {
      lat: city.coord.lat,
      lon: city.coord.lon,
    },
    list: list,
  };
};
