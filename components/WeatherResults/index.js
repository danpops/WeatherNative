import React from "react";
import { isSameDay, format } from "date-fns";

import { WeatherContainer } from "../Layout";
import CurrentWeather from "./CurrentWeather";
import WeeklyWeather from "./WeeklyWeather";

import imageDictionary from "../../utils/imageDictionary";

const WeatherResults = ({ forecast: { name, list, timezone } }) => {
  const currentWeather = list.filter((day) => {
    const now = new Date().getTime() + Math.abs(timezone * 1000);
    const currentDate = new Date(day.dt * 1000);
    return isSameDay(now, currentDate);
  });

  const daysByHour = list.map((day) => {
    const dt = new Date(day.dt * 1000);
    return {
      date: dt,
      hour: dt.getHours(),
      name: format(dt, "EEEE"),
      temp: Math.round(day.main.temp),
      icon: imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
    };
  });

  return (
    <WeatherContainer>
      <CurrentWeather currentWeather={currentWeather} />
      <WeeklyWeather daysByHour={daysByHour} />
    </WeatherContainer>
  );
};

export default WeatherResults;
