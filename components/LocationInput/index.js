import React from "react";
import { SearchInput } from "./style";

const LocationInput = ({ location, label, inputLocation }) => {
  return (
    <SearchInput
      placeholder={`Input ${label}...`}
      autoCorrect={false}
      value={location}
      onChangeText={inputLocation}
    />
  );
};

export default LocationInput;
