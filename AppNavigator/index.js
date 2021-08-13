import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Public from "./Public";

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Public: { screen: Public },
    },
    { initialRouteName: "Public" }
  )
);

export default AppNavigator;
