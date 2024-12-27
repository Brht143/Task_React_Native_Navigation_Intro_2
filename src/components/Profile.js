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
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import image1 from "../../assets/images/profile.png";
// import profile from "../../assets/images/profile.avif";

function Profile(props) {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Image source={image1} style={styles.image} />
        <Text style={styles.text}>Ibrahim</Text>
        <Text style={styles.text}>Contact Details</Text>
      </View>
      <View style={styles.editBox}>
        <FontAwesome6
          name="edit"
          size={25}
          color="lightblue"
          onPress={() => navigation.navigate("EditProfile")}
        />
        <Text>edit</Text>
      </View>
      <Text>My Items</Text>
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => alert("Home, later to use in filter")}>
          <Text style={styles.categoriesButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Tech, later to use in filter")}>
          <Text style={styles.categoriesButton}>Tech</Text>
        </TouchableOpacity>
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
  editBox: {
    position: "absolute",
    top: "5%",
    left: "85%",
  },
  contact: {
    // borderWidth: 1,
    paddingBlock: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
  categories: {
    flexDirection: "row",
    gap: 50,
  },
  categoriesButton: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#fff",
    marginBlockStart: 10,
    paddingBlock: 2,
    paddingInline: 15,
    color: "#4A628A",
  },
  itemBox: {
    backgroundColor: "#7AB2D3",
    marginBlock: 5,
    padding: 5,
    borderColor: "#7AB2D3",
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
    width: "90%",
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
    height: 60,
    resizeMode: "stretch",
    marginInlineStart: "10",
    borderColor: "#DFF2EB",
    borderWidth: 1,
    borderRadius: 30,
  },
});

export default Profile;
