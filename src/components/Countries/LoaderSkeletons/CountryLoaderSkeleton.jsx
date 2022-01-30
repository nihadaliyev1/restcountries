import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../../Context/AppContext";

const CountryLoaderSkeleton = (props) => {
  const { darkMode } = useContext(AppContext);
  return (
    <ContentLoader
      speed={2}
      width={264}
      height={342}
      viewBox="0 0 264 342"
      backgroundColor={darkMode ? "hsl(209, 23%, 22%)" : "#dedede"}
      foregroundColor={darkMode ? "hsl(210, 23%, 15%)" : "#ecebeb"}
      style={{ transition: ".4s background-color" }}
    >
      <rect x="0" y="0" rx="5" ry="5" width="264" height="160" />
      <rect x="-1" y="160" rx="6" ry="6" width="264" height="176" />
    </ContentLoader>
  );
};

export default CountryLoaderSkeleton;
