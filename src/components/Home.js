import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
function Home(props) {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View key={1} style={styles.itemBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ItemDetails", { item: "offers" })}
        >
          <Text style={styles.text}>50% Offers</Text>
        </TouchableOpacity>
      </View>
      <View key={2} style={styles.itemBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ItemDetails", { item: "item2" })}
        >
          <Text style={styles.text}>Item 2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("CreateItem")}
        >
          Go to Create Item Screen
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A628A",
    height: "100%",
    // top: "5%",
    flex: 1,
    // alignItems: "center",
    flexDirection: "column",
    // justifyContent: "space-between",
  },
  loginbox: {
    backgroundColor: "#4A628A",
    height: "95%",
    top: "5%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 100,
  },
  box1: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#4A628A",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box2: {
    flex: 1,
    width: "100%",
    backgroundColor: "#7AB2D3",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
  },
  navBarBox: {
    flex: 1,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    borderBottomWidth: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  navBarItemBox: {
    flex: 2,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesBox: {
    flex: 1,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    // borderBottomWidth: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryBox: {
    flex: 2,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  itemBox: {
    backgroundColor: "#7AB2D3",
    marginBlock: 5,
    padding: 5,
    borderColor: "#7AB2D3",
    borderWidth: 1,
    borderRadius: 15,
    // flex: 1,
    width: "30%",
    height: "30%",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    marginInlineStart: "10",
    borderColor: "#DFF2EB",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: "#DFF2EB",
    marginBlock: 5,
    fontFamily: "",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputField: {
    height: 40,
    width: 250,
    borderColor: "#DFF2EB",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingInline: 20,
    color: "#DFF2EB",
  },
  image: {
    // flex: 3,
    width: 60,
    height: 50,
    resizeMode: "stretch",
    marginInlineStart: "10",
    borderColor: "#DFF2EB",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Home;
