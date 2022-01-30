import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../../Context/AppContext";
const DetailsFlagLoaderSkeleton = (props) => {
  const { darkMode } = useContext(AppContext);
  return (
    <ContentLoader
      speed={2}
      width={560}
      height={370}
      viewBox="0 0 560 370"
      backgroundColor={darkMode ? "hsl(209, 23%, 22%)" : "#dedede"}
      foregroundColor={darkMode ? "hsl(210, 23%, 15%)" : "#ecebeb"}
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="560" height="370" />
    </ContentLoader>
  );
};

export default DetailsFlagLoaderSkeleton;
