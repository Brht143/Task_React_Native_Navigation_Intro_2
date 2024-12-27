import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import CreateItem from "../components/CreateItem";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import ItemDetails from "../components/ItemDetails";

const Stack = createNativeStackNavigator();

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

const StackItemNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateItem" component={CreateItem} />
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

export { StackHomeNavigation, StackItemNavigation, StackProfileNavigation };
