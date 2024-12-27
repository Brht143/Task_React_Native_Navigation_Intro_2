import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./src/navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A628A",
    color: "#DFF2EB",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    color: "#DFF2EB",
  },
});
