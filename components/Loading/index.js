import React from "react";

import { SearchContainer, BigIcon } from "../Layout";
import { Heading3 } from "../Text";

import imageDictionary from "../../utils/imageDictionary";

const Loading = (props) => {
  return (
    <SearchContainer>
      <BigIcon source={imageDictionary["01d"]} />
      <Heading3>Loading...</Heading3>
    </SearchContainer>
  );
};

export default Loading;
