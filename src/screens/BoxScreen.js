import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}/>
      <View style={styles.textTwoStyle}/>
      <View style={styles.textThreeStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "space-between",
        flexDirection: "row",
        height: 200
    },
    textOneStyle: {
        backgroundColor: "red",
        height: 100,
        width: 100
    },
    textTwoStyle: {
        backgroundColor: "green",
        height: 100,
        width: 100,
        alignSelf: "flex-end"
    },
    textThreeStyle: {
        backgroundColor: "blue",
        height: 100,
        width: 100
    }
});

export default BoxScreen;
