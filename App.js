import React, { useState } from "react";
import { Button, withTheme, Avatar, ButtonGroup } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

export default function App() {
  const imgSource = "http://source.unsplash.com/2050x2250/?";
  const avatarSource = { uri: imgSource + "persons" };
  const [userInput, setUserInput] = useState("");
  const [image, setImage] = useState({ uri: imgSource + "plant" });
  const [selectedIndex, setSelectedIndex] = useState({ selectedIndex: null });
  const buttons = ["Hello", "World", "Buttons"];

  function setBackground() {
    let newImage = imgSource + userInput;
    let imageReformat = { uri: newImage };
    setImage(imageReformat);
  }
  function updateIndex(selectedIndex) {
    console.log("selectedIndex", selectedIndex);
    setSelectedIndex({ selectedIndex });
  }

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.innerBox}>
          <Avatar size="xlarge" rounded source={avatarSource} />
          <Text style={styles.text}>TestUser10201</Text>
          <TextInput
            style={{
              height: 40,
              margin: 10,
              padding: 5,
              backgroundColor: "aliceblue",
            }}
            placeholder="Search backgrounds"
            onChangeText={(text) => setUserInput(text)}
          />
          <Button type="solid" onPress={setBackground} title="Set Background" />
        </View>
      </View>
      <ButtonGroup
        onPress={updateIndex}
        buttons={buttons}
        selectedIndex={selectedIndex}
        selectedButtonStyle={{
          backgroundColor: "#66CCCC",
          color: "ghostwhite",
        }}
        containerStyle={{ height: 60 }}
      />
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
    height: 200,
    borderRadius: 60,
    paddingBottom: 140,
    backgroundColor: "#ffffff",
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
