import React from "react";

import { BigIcon } from "../../Layout";
import { CurrentDay } from "../style";
import { Heading1, Heading2, Heading3 } from "../../Text";

import imageDictionary from "../../../utils/imageDictionary";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <CurrentDay>
      <Heading2>Today</Heading2>
      <BigIcon
        source={
          imageDictionary[currentWeather[0].weather[0].icon] ||
          imageDictionary["02d"]
        }
      />
      <Heading1>{Math.round(currentWeather[0].main.temp)}°C</Heading1>
      <Heading3>{currentWeather[0].weather[0].description}</Heading3>
    </CurrentDay>
  );
};

export default CurrentWeather;
