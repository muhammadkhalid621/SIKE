import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, RadioButton } from "react-native-paper";
import Card from "./Components/Card";

export default function MoodScreen({ navigation }) {
  const [value, setValue] = useState("first");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const Quote = (value) => {
    if (value) {
      setValue(value);
      if (value === "Happy") {
        setQuote(
          "They say a person needs just three things to be truly happy in this world: Someone to love, something to do, and something to hope for."
        );
        setAuthor("Tom Bodett");
      } else if (value === "Sad") {
        setQuote(
          "The reality is after every bad times, there is only one thought – “Wish it could happened in other way"
        );
        setAuthor("Anonymous");
      } else if (value === "Angry") {
        setQuote(
          "Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will"
        );
        setAuthor("Yoda");
      } else if (value === "Scared") {
        setQuote(
          "I get that you’re scared and that you’ve been hurt. But doing what is easy and safe is no way to live, and a life without passion and love is so far beneath what you deserve"
        );
        setAuthor("Kiersten White");
      } else if (value === "Depressed") {
        setQuote(
          "Try to understand the blackness, lethargy, hopelessness, and loneliness they’re going through. Be there for them when they come through the other side. It’s hard to be a friend to someone who’s depressed, but it is one of the kindest, noblest, and best things you will ever do"
        );
        setAuthor("Stephen Fry");
      } else if (value === "Moderate") {
        setQuote(
          "We can do noble acts without ruling earth and sea; for even with moderate advantages one can act excellently"
        );
        setAuthor("Aristotle");
      } else {
        setQuote("");
        setAuthor("");
      }
    }
  };

  return (
    <View style={styles.mainBody}>
      <Card style={styles.radioCard}>
        <Text style={styles.subHeading}> Check Mood through image</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", { screen: "ImageScreen" })}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>Check Mood</Text>
        </TouchableOpacity>
        <Text style={styles.subHeading}> Check Mood through voice</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home", { screen: "SpeechScreen" })}
          // onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>Check Mood</Text>
        </TouchableOpacity>
      </Card>
      <Card style={styles.radioCard}>
        <RadioButton.Group
          onValueChange={(value) => Quote(value)}
          value={value}
        >
          <View style={styles.radioView}>
            <RadioButton value="Happy" />
            <Text>Happy</Text>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="Sad" />
            <Text>Sad</Text>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="Angry" />
            <Text>Angry</Text>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="Scared" />
            <Text>Scared</Text>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="Depressed" />
            <Text>Depressed</Text>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="Moderate" />
            <Text>Moderate</Text>
          </View>
        </RadioButton.Group>
      </Card>

      {value ? (
        quote && author ? (
          <Card>
            <Text style={styles.quote}>{quote}</Text>
            <Text style={styles.author}>{author}</Text>
          </Card>
        ) : (
          <Card>
            <Text style={styles.heading}>Quote of the Day</Text>
            <Text style={styles.quote}>
              You need to stand by your principles no matter what the
              consequences.If your principles are worthy, do not sacrifice them
              for anyone or any reason.
            </Text>
            <Text style={styles.author}>Angus Buchan</Text>
          </Card>
        )
      ) : (
        <Card>
          <Text style={styles.heading}>Quote of the Day</Text>
          <Text style={styles.quote}>
            You need to stand by your principles no matter what the
            consequences.If your principles are worthy, do not sacrifice them
            for anyone or any reason.
          </Text>
          <Text style={styles.author}>Angus Buchan</Text>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignContent: "center",
  },
  radioCard: {
    backgroundColor: "#96BAE8",
  },
  radioView: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    textDecorationLine: "underline",
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 10,
  },
  quote: {
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  author: {
    fontSize: 20,
    textAlign: "right",
  },
  subHeading: {
    color: "#021617",
    fontSize: 18,
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
});
