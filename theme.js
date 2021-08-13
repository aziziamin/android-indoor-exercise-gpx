import { DefaultTheme, configureFonts } from "react-native-paper";

// const setFont = {
//   default: {
//     regular: {
//       fontFamily: "regular",
//     },
//     medium: {
//       fontFamily: "medium",
//     },
//     light: {
//       fontFamily: "light",
//     },
//     thin: {
//       fontFamily: "thin",
//     },
//   },
// };

// setFont.ios = setFont.default;
// setFont.android = setFont.default;

const theme = {
  ...DefaultTheme,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: "black",
    accent: "black",
    text: "black",
  },
  //   fonts: configureFonts(setFont),
};

// dark:#006d64
// light: #5ccdc1
export default theme;
