import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function PieIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6.667c.368 0 .667.298.667.666v2h10.666v-2a.667.667 0 111.334 0v2a1.334 1.334 0 01-1.334 1.334H2.667a1.333 1.333 0 01-1.334-1.334v-2c0-.368.299-.666.667-.666z"
        fill="#BB9F3A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.724 9.724c.25-.25.589-.39.943-.39h10.666a1.333 1.333 0 011.334 1.333V12a1.334 1.334 0 01-1.334 1.333H10.78a.667.667 0 010-1.333h2.553v-1.333H2.667V12H8a.667.667 0 010 1.333H2.667A1.334 1.334 0 011.333 12v-1.333c0-.354.14-.693.39-.943zM8 3.691a.667.667 0 00-.41.141L3.944 6.667h8.112L8.41 3.832a.667.667 0 00-.41-.14zm-1.23-.91a2 2 0 012.46 0l5.18 4.026A.667.667 0 0114 8H2a.667.667 0 01-.41-1.193l5.18-4.026z"
        fill="#BB9F3A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.038 9.78a.667.667 0 01.629-.447H13a.667.667 0 01.512 1.094L11.01 13.43a2 2 0 01-2.779.27l-3.98-3.18a.667.667 0 01-.212-.74zm2.531.887l2.495 1.993a.666.666 0 00.925-.089l1.588-1.904H6.569z"
        fill="#BB9F3A"
      />
    </Svg>
  );
}
