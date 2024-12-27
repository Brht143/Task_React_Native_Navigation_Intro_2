import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

function ItemDetails({ route }) {
  const name = route.params.item;
  const isOffer = name == "offers";
  console.log("====================================");
  console.log("I am just kidding no offers");
  console.log(isOffer);

  console.log("====================================");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        {isOffer && "I am just kidding no offers"}
      </Text>
      <Fontisto name="smiley" size={24} color="black" />
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
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
    marginBlock: 20,
    fontSize: 20,
  },
  description: {
    color: "#DFF2EB",
    textAlign: "center",
  },
  image: { height: 180, width: 280, borderRadius: 10 },
});

export default ItemDetails;
