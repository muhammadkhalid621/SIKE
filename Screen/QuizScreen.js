// Import React and Component
import React, { useState, Component } from "react";
import { RadioButton } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  FlatList,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Card from "./Components/Card";

import { firebase } from "./../Firebase/config";

const QuizScreen = ( { navigation } ) => {
  return (
    <View style={styles.mainBody}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "PTSDQuiz"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>PTSD</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "DepressionQuiz"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>DEPRESSION</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "AnxietyQuiz"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>ANXIETY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "EatingQuiz"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>EATING DISORDER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "AddictionQuiz"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>ADDICTION DISORDER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "StealingQuiz"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>STEALING DISORDER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "BurningDisorder"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>BURNING DISORDER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", {screen : "BiPolarDisorder"})}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>BIPOLAR DISORDER</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignContent: "center",
  },

  mainHeading: {
    color: "#064246",
    fontSize: 18,
  },

  subHeading: {
    color: "#021617",
    fontSize: 14,
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#9b95f5",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#030215",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#406882",
  },
  registerTextStyle: {
    color: "#736af1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});

export default QuizScreen;
