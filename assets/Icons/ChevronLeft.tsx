import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.793 18.707a1 1 0 010-1.414L14.086 12 8.793 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
        fill="#0F0E13"
      />
    </Svg>
  );
}

export default SvgComponent;
