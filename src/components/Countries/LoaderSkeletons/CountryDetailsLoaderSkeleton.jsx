import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../../Context/AppContext";

const CountryDetailsLoaderSkeleton = (props) => {
  const { darkMode } = useContext(AppContext);

  return (
    <ContentLoader
      speed={2}
      width={600}
      height={385}
      viewBox="0 0 600 385"
      backgroundColor={darkMode ? "hsl(209, 23%, 22%)" : "#dedede"}
      foregroundColor={darkMode ? "hsl(210, 23%, 15%)" : "#ecebeb"}
      {...props}
    >
      <rect x="1" y="7" rx="0" ry="0" width="603" height="55" />
      <rect x="7" y="92" rx="0" ry="0" width="600" height="180" />
      <rect x="5" y="305" rx="0" ry="0" width="600" height="108" />
    </ContentLoader>
  );
};

export default CountryDetailsLoaderSkeleton;
