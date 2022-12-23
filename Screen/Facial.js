import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [close, setClosed] = useState(true);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [display, setDisplay] = React.useState(false);
  const [score, setScore] = React.useState("");
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setClosed(false);
      //console.log(data.uri)
      setImage(data.uri);
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
  };
  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {close && (
        <View style={styles.container}>
          <View style={styles.cameraContainer}>
            <Camera
              ref={(ref) => setCamera(ref)}
              style={styles.camera}
              type={type}
              ratio={"1:1"}
            />
          </View>

          <Button title="Take Picture" onPress={() => takePicture()} />
        </View>
      )}
      {image && (
        <View>
          <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
          {display && <Text style={styles.heading}> Your mood is {score}</Text>}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    flex: 1,
  },
  heading: {
    fontSize: 32,
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 10,
  },
});
