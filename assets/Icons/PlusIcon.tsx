import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function PlusIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
        fill="#FBF9FE"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a1 1 0 011 1v14a1 1 0 11-2 0V5a1 1 0 011-1z"
        fill="#FBF9FE"
      />
    </Svg>
  );
}
