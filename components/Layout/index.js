import styled from "styled-components/native";

export const WeatherContainer = styled.View`
  flex: 1;
  background-color: #272343;
  width: 100%;
  align-items: center;
  padding-top: 105px;
`;

export const SearchContainer = styled.View`
  flex: 1;
  background-color: #272343;
  padding-top: 120px;
  width: 100%;
  align-items: center;
`;

export const Section = styled.View`
  padding: 30px 24px;
`;

export const ScrollWeek = styled.ScrollView`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  background: black;
`;

export const BigIcon = styled.Image`
  width: 168px;
  height: 168px;
  padding-bottom: 60px;
`;
