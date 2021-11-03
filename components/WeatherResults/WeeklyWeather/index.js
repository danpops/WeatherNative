import React from "react";

import { ScrollWeek } from "../../Layout";
import WeatherCard from "../WeatherCard";

const WeeklyWeather = ({ daysByHour }) => {
  return (
    <ScrollWeek horizontal={true} showsHorizontalScrollIndicator={false}>
      {daysByHour.map((day, index) => (
        <WeatherCard
          key={index}
          icon={day.icon}
          name={day.name.substring(0, 3)}
          temp={day.temp}
          hour={day.hour}
        />
      ))}
    </ScrollWeek>
  );
};

export default WeeklyWeather;
