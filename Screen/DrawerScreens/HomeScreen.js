// Import React and Component
import React, { useState, Component, useEffect } from "react";
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
  ScrollView,
} from "react-native";
import Card from "../Components/Card";

import { firebase } from "../../Firebase/config";

const UserHomeScreen = ({ navigation }) => {
  const [data, setData] = useState("");
  const uid = firebase.auth().currentUser.uid;
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((response) => {
        setData(response.data())
        // console.log(response.data());
      })
      .catch((error) => {
        alert(error);
      });
  }, []);


  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <Card>
          <Text style={styles.mainHeading}> Hi {data.name}!!</Text>
        </Card>
        <Card>
          <Text style={styles.subHeading}> To Check Your Symptoms</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Home", { screen: "QuizScreen" })
            }
            // onPress={handleSubmitPress}
          >
            <Text style={styles.buttonTextStyle}>Take Quiz</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <Text style={styles.subHeading}> To Talk to our Psych Bot</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Home", { screen: "ChatScreen" })
            }
            // onPress={handleSubmitPress}
          >
            <Text style={styles.buttonTextStyle}>Chat Now</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <Text style={styles.subHeading}> To Find Psychiatrists</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Home", { screen: "PsychiatristScreen" })
            }
            // onPress={handleSubmitPress}
          >
            <Text style={styles.buttonTextStyle}>Find Psychiatrists</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <Text style={styles.subHeading}> To Check your mood</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Home", { screen: "MoodScreen" })
            }
            // onPress={handleSubmitPress}
          >
            <Text style={styles.buttonTextStyle}>Mood</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <Text style={styles.subHeading}> To take notes</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Home", { screen: "NotesScreen" })
            }
            // onPress={handleSubmitPress}
          >
            <Text style={styles.buttonTextStyle}>Take Notes</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
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
    color: "#021617",
    fontSize: 36,
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

export default UserHomeScreen;

// import Card from "../Components/Card";
// import Loader from "../Components/Loader";
// import question from "../../questions.json";

// import { firebase } from "../../Firebase/config";

// class HomeScreen extends Component {
//   state = {
//     loading: false,
//     questions: "",
//     // textInputs: [],
//     correctOption: [],
//   };

//   // l = Array.from({length: 10}, () => Math.floor(Math.random() * 21));
//   // res = question.filter(item => Array.from({length: 5}, () => Math.floor(Math.random() * 21)).includes(item.key));
//   res = question.sort(() => Math.random() - 0.5).slice(0, 10);

//   submit = () => {
//     if (this.state.correctOption.length < 21) {
//       alert("Please fill All the Answers");
//       return;
//     }
//     this.setState({ loading: true });
//     console.log(this.state.loading);
//     console.log(this.state.correctOption);
//     // firebase
//     //   .firestore()
//     //   .collection("answer-submit")
//     //   .add({
//     //     uid: firebase.auth().currentUser.uid,
//     //     data: this.state.textInputs,
//     //   })
//     //   .then(() => {
//     //     console.log("Answer Added");
//     //   });
//     this.setState({ loading: false });
//   };
//   render() {
//     return (
//       <SafeAreaView style={Styles.container}>
//         <Loader loading={this.state.loading} />
//         <FlatList
//           removeClippedSubviews={false}
//           data={this.res}
//           renderItem={({ item, index }) => (
//             <Card>
//               <KeyboardAvoidingView enabled>
//                 <Text style={Styles.titleText}>Question {index + 1}</Text>
//                 <Text style={Styles.Question}>{item.question}</Text>
//                 {/* <TextInput
//                   style={Styles.Answer}
//                   onChangeText={(text) => {
//                     let { textInputs } = this.state;
//                     textInputs[index] = {
//                       question: item.question,
//                       answer: text,
//                     };
//                     this.setState({
//                       question: item.question,
//                       answer: textInputs,
//                     });
//                   }}
//                   value={this.state.textInputs[index]}
//                   // value={this.state.textInputs[index]}
//                   // {(answer) => onTextChanged(index, { question: item.question, answer: answer })}
//                   // onChangeText={(answer) =>
//                   //   setAllanswers({ question: item.question, answer: answer })
//                   // }
//                   placeholder="Write Your Answer Here"
//                   placeholderTextColor="#8b9cb5"
//                   keyboardType="default"
//                   onSubmitEditing={Keyboard.dismiss}
//                   multiline={true}
//                   underlineColorAndroid="#f000"
//                   returnKeyType="next"
//                 /> */}
//                 {/* <TouchableOpacity> */}
//                   <RadioButton.Group
//                     // onValueChange={(newValue) => this.setState({correctOption[index]:newValue})}
//                     // value={this.state.correctOption}
//                     onValueChange={(text) => {
//                       let { correctOption } = this.state;
//                       correctOption[index] = { correctOption:text };
//                       this.setState({
//                         correctOption: text,
//                       });
//                     }}
//                     value={this.state.correctOption[index]}
//                   >
//                     <View
//                       style={{ flexDirection: "row", alignItems: "center" }}
//                     >
//                       <RadioButton value="A" disabled/>
//                       <Text>{item.A}</Text>
//                     </View>
//                     <View
//                       style={{ flexDirection: "row", alignItems: "center" }}
//                     >
//                       <RadioButton value="B" />
//                       <Text>{item.B}</Text>
//                     </View>
//                     <View
//                       style={{ flexDirection: "row", alignItems: "center" }}
//                     >
//                       <RadioButton value="C" />
//                       <Text>{item.C}</Text>
//                     </View>
//                     <View
//                       style={{ flexDirection: "row", alignItems: "center" }}
//                     >
//                       <RadioButton value="D" />
//                       <Text>{item.D}</Text>
//                     </View>
//                   </RadioButton.Group>
//                 {/* </TouchableOpacity> */}
//               </KeyboardAvoidingView>
//             </Card>
//           )}
//         />
//         <Button title="Submit" onPress={this.submit} />
//       </SafeAreaView>
//     );
//   }
// }

// export const Styles = StyleSheet.create({
//   titleText: {
//     fontSize: 24,
//     color: "#333",
//     textDecorationLine: "underline",
//   },
//   Question: {
//     fontSize: 13,
//     color: "#333",
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   paragraph: {
//     marginVertical: 8,
//     lineHeight: 20,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   Answer: {
//     marginTop: 10,
//     fontSize: 13,
//     color: "#333",
//     borderBottomWidth: 2,
//     borderBottomColor: "#406882",
//   },
// });
