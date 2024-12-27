import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import CreateItem from "../components/CreateItem";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import ItemDetails from "../components/ItemDetails";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackHomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="CreateItem" component={CreateItem} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateItem"
        component={CreateItem}
        // options={{
        //   headerStyle: { backgroundColor: "red" },
        //   headerShown: false,
        // }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const StackProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

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
        component={StackNavigation}
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

// export default StackNavigation;
export default TabNavigation;
