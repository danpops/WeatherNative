import React from "react";

import { Heading5, Heading6, BasicText } from "../../Text";
import { Day, SmallIcon } from "./style";

export default function WeatherCard({ name, icon, temp, hour }) {
  return (
    <Day>
      <SmallIcon source={icon} />
      <Heading6>{name}</Heading6>
      <Heading5>{temp}°C</Heading5>
      <BasicText>{hour}h</BasicText>
    </Day>
  );
}
