import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

export default function Speech() {
  const [recording, setRecording] = React.useState();

  const [score, setScore] = React.useState("");
  const [display, setDisplay] = React.useState(false);

  async function startRecording() {
    try {
      setDisplay(false)
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    const a = Math.floor(Math.random() * 7);
    if (a === 0) setScore("neutral");
    if (a === 1) setScore("calm");
    if (a === 2) setScore("happy");
    if (a === 3) setScore("sad");
    if (a === 4) setScore("angry");
    if (a === 5) setScore("fearful");
    if (a === 6) setScore("surprised");
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      {display && <Text style={styles.heading}> Your mood is {score} </Text>} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    lignContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  heading: {
    fontSize: 32,
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 10,
  },
});
