import { createSwitchNavigator } from "react-navigation";
import Home from "../screens/Home";

const PublicNavigator = createSwitchNavigator(
  {
    Home: { screen: Home },
  },
  { initialRouteName: "Home" }
);

export default PublicNavigator;
