import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  StackHomeNavigation,
  StackItemNavigation,
  StackProfileNavigation,
} from "./StackNavigation";
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
    // tarBarOptions={{
    //   activeBackgroundColior: "tomato",

    // }}
    >
      <Tab.Screen
        name="Home"
        component={StackHomeNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CreateItem"
        component={StackItemNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={StackProfileNavigation}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
