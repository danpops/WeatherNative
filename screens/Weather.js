import React from "react";

import Loading from "../components/Loading";
import WeatherResults from "../components/WeatherResults";

import getWeather from "../utils/getWeather";

const Weather = ({ route }) => {
  const weatherResults = getWeather(route.params.city, route.params.country);

  return (
    <>
      {!weatherResults ? (
        <Loading />
      ) : (
        <WeatherResults forecast={weatherResults} />
      )}
    </>
  );
};

export default Weather;
