import React, { useState } from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import LocationInput from "../components/LocationInput";
import { Heading6, Heading3 } from "../components/Text";
import { SearchContainer, Section, BigIcon } from "../components/Layout";

import imageDictionary from "../utils/imageDictionary";

const Search = ({ navigation }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const inputCity = (cityVal) => setCity(cityVal);
  const inputCountry = (countryVal) => setCountry(countryVal);

  const pressHandler = () => {
    if (city && country) {
      let location = {
        city: city,
        country: country,
      };
      navigation.navigate("Weather", location);
      setCity("");
      setCountry("");
    } else {
      Alert.alert("Error", "Please enter a location", {
        text: "Ok",
      });
    }
  };

  return (
    <SearchContainer>
      <BigIcon source={imageDictionary["01d"]} />
      <Heading3>Weather Native</Heading3>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Section>
          <LocationInput
            location={city}
            label="city"
            inputLocation={inputCity}
          />
          <LocationInput
            location={country}
            label="country"
            inputLocation={inputCountry}
          />
        </Section>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={pressHandler}>
        <Heading6>Search</Heading6>
      </TouchableOpacity>
    </SearchContainer>
  );
};

export default Search;
