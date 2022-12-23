import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Quiz = (props) => {
  const COLORS = {
    primary: "#064246",
    secondary: "#064246",
    accent: "#13c6d2",

    success: "#00C851",
    error: "#ff4444",

    black: "#171717",
    white: "#021617",
    background: "#ebeafd",
  };

  const SIZES = {
    base: 10,
    width,
    height,
  };
  const allQuestions = props.data;
  const answer = props.answer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [answerList, setAnswerList] = useState([]);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState('');
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    setAnswerList( (oldArray) => [...oldArray, Number(selectedOption[0])])
    setCurrentOptionSelected(selectedOption[0]);
    setIsOptionsDisabled(true);
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      const a = Math.floor(Math.random() * 5);
      if (a === 0) setScore('Normal')
      if (a === 1) setScore('Mild')
      if (a === 2) setScore('Moderate')
      if (a === 3) setScore('Severe')
      if (a === 4) setScore('Extremely Severe')
      setShowScoreModal(true);
    } else {
      console.log(answerList)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question Type */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 40,
          }}
        >
          {allQuestions[currentQuestionIndex]?.questionType}
        </Text>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const renderOptions = () => {
    return (
      <ScrollView>
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(Object.keys(option))}
            disabled={isOptionsDisabled}
            key={Object.values(option)}
            style={{
              borderWidth: 3,
              borderColor: COLORS.secondary,
              backgroundColor: COLORS.secondary + 20,
              height: 60,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            
              <Text style={{ fontSize: 20, color: COLORS.white }} >{Object.values(option)}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {Object.keys(option) == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontSize: 20, color: COLORS.white, textAlign: "center" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <View
          style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            backgroundColor: COLORS.background,
            position: "relative",
          }}
        >
          {/* ProgressBar */}
          {renderProgressBar()}

          {/* Question */}
          {renderQuestion()}

          {/* Options */}
          {renderOptions()}

          {/* Next Button */}
          {renderNextButton()}

          {/* Score Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: 'lightblue',
                  width: "90%",
                  borderRadius: 20,
                  padding: 20,
                  alignItems: "center",
                }}
              >

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      color: 'black'
                    }}
                  >
                   {score} {answer}
                  </Text>
                </View>
                {/* Retry Quiz button */}
                <TouchableOpacity
                  onPress={restartQuiz}
                  style={{
                    backgroundColor: COLORS.accent,
                    padding: 20,
                    width: "100%",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  >
                    Retry Quiz
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Background Image */}
          {/* <Image
            source={require("../../assets/DottedBG.png")}
            style={{
              width: SIZES.width,
              height: 130,
              zIndex: -1,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              opacity: 0.5,
            }}
            resizeMode={"contain"}
          /> */}
        </View>
      
    </SafeAreaView>
  );
};

export default Quiz;
