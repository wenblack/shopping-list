import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function ChevronDownIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.529-3.528a.667.667 0 11.942.942l-4 4a.667.667 0 01-.942 0l-4-4a.667.667 0 010-.942z"
        fill="#AFABB6"
      />
    </Svg>
  );
}
