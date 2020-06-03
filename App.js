import React, { useState } from "react";
import { Button, withTheme, Avatar } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

export default function App() {
  const imgSource = "http://source.unsplash.com/1750x2050/?";
  const [userInput, setUserInput] = useState("");
  const [image, setImage] = useState(imgSource + "=sunset");

  function setBackground() {
    let newImage = imgSource + userInput;
    setImage(newImage);
  }

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.innerBox}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri: "http://source.unsplash.com/550x1150/?=dog",
            }}
            // showAccessory
          />
          <Text style={styles.text}>TestUser10201</Text>
          <TextInput
            style={{ height: 40, margin: 30, padding: 5, backgroundColor: '#F9F9F9' }}
            placeholder="Search backgrounds"
            onChangeText={(text) => setUserInput(text)}
          />
          <Button type="solid" onPress={setBackground} title="Set Background" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    width: 300,
    height: 260,
    borderRadius: 50,
    paddingBottom: 100,
    backgroundColor: "#80CFA9",
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 600,
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 10,
  },
});
