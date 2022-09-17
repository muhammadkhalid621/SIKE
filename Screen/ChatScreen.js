// import { View, Text } from 'react-native'
// import React from 'react'
// // import ChatBot from 'react-simple-chatbot';

// const ChatScreen = () => {
//   return (
//     <View>
//       <Text>ChatScreen</Text>
//     </View>
//   )
// }

// export default ChatScreen

import React, { useCallback, useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const ChatScreen = () => {
  var id = "id" + Math.random().toString(16).slice(2);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: Math.random().toString(16).slice(2),
        text: "Hello My name is Psych Bot from SIKE. How may I help you",
        createdAt: new Date(),
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const a = ["sad"];
    if (
      a.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random().toString(16).slice(2),
            text: "Can you bit more explain me about your problem or I can recommend you, our Psychiatrist",
            createdAt: new Date(),
          },
          {
            _id: Math.random().toString(16).slice(2),
            text: "We cannot solve problems with the kind of thinking we employed when we came up with them (— Albert Einstein)",
            createdAt: new Date(),
          },
          {
            _id: Math.random().toString(16).slice(2),
            text: "I am here to help you!!",
            createdAt: new Date(),
          },
        ])
      );
    }
    if (messages[0].text === "Hi") {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          _id: Math.random().toString(16).slice(2),
          text: "Hello Sir/Madam How may I help you?",
          createdAt: new Date(),
        })
      );
    }
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatScreen;
