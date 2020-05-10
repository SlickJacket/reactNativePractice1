import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => {
          setText(newValue);
        }}
      />
      {text.length >= 5 ? null : (
        <Text style={styles.errorMessage}>
          Please enter more than 5 characters
        </Text>
      )}
      <Text style={styles.text}>Your Name is {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
  text: {
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
  },
});

export default TextScreen;
