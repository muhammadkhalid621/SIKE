import React, { useCallback, useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios";

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
          {
            _id: Math.random().toString(16).slice(2),
            text: "What you tell yourself about a situation affects how you feel and what you do. Sometimes your interpretation of a situation can get distorted and you only focus on the negative aspects—this is normal and expected. However, when you interpret situations too negatively, you might feel worse. You're also more likely to respond to the situation in ways that are unhelpful in the long term. \n These automatic thoughts and assumptions are sometimes called thinking traps. Everyone falls into unbalanced thinking traps from time to time. You're most likely to distort your interpretation of things when you already feel sad, angry, anxious, depressed or stressed. You're also more vulnerable to thinking traps when you're not taking good care of yourself, like when you're not eating or sleeping well. \n Here are some common thinking traps: \n Thinking that a negative situation is part of a constant cycle of bad things that happen. People who overgeneralize often use words like \"always\" or \"never.\" \n I was really looking forward to that concert, and now it’s cancelled. This always happens to me! I never get to do fun things! \n Seeing things as only right or wrong, good or bad, perfect or terrible. People who think in black and white terms see a small mistake as a total failure. \n I wanted to eat healthier, but I ate too many snacks today. This plan is a total failure! \n Saying only negative things about yourself or other people. \n I made a mistake. I'm stupid! My boss told me that I made a mistake. My boss is a total jerk! \n Predicting that something bad will happen without any evidence. \n I've been doing what I can to stay home and reduce the risks, but I just know that I'm going to get sick. \n Focusing only on the negative parts of a situation and ignoring anything good or positive. \n I know there's a lot I can do at home, but I'm just so sick of this. Everything is terrible. \n Believing that bad feelings or emotions reflect the situation. \n I feel scared and overwhelmed right now, so that must mean everything is very bad and will never get better. \n Telling yourself how you \"should\" or \"must\" act. \n I should be able to handle this without getting upset and crying! \n Here are helpful strategies to challenge common thinking traps. Many people find their mood and confidence improve after working through these skills. You can also find worksheets to help you go through each step at www.heretohelp.bc.ca. \n Don't try to get out of a thinking trap by just telling yourself to stop thinking that way. \n This doesn't let you look at the evidence and challenge the thinking trap. When you try and push upsetting thoughts away, they are more likely to keep popping back into your mind. \n Ask yourself the following questions when something upsetting happens: \n What is the situation? What actually happened? Only include facts that everyone would agree on. \n What are your thoughts? What are you telling yourself? \n What are your emotions? How do you feel? \n What are your behaviours? How are you reacting? What are you doing to cope? \n Take a look at the thoughts you've listed. Are you using any of the thinking traps and falling into distorted thinking patterns? It's common to fall into more than one thinking trap. Go back to the thinking trap list and identify which ones apply to you and your current situation. \n The best way to break a thinking trap is to look at your thoughts like a scientist and consider the hard facts. Use the evidence you've collected to challenge your thinking traps. Here are some ways to do that: \n Try to find evidence against the thought. If you make a mistake at work, you might automatically think, \"I can't do anything right! I must be a terrible employee!\" When this thought comes up, you might challenge it by asking, \"Is there any evidence to support this thought? Is there any evidence to disprove this thought?\" You might quickly realize that your boss has complimented your work recently, which doesn't support the idea that you're a bad employee. \n Ask yourself, \"Would I judge other people if they did the same thing? Am I being harder on myself than I am on other people?\" This is a great method for challenging thinking traps that involve harsh self-criticism. \n Find out whether other people you trust agree with your thoughts. For example, you might have trouble with one of your kids and think, \"Good parents wouldn't have this kind of problem.\" To challenge this thought, you can ask other parents if they've ever had any problems with their kids. \n Test your beliefs in person. For example, if you think that your friends don't care about you, call a few friends and make plans to start a regular video call. If you assumed that they will all say no, you may be pleasantly surprised to hear that they do want to see you. \n Once you have worked through some challenges, try to think of a more balanced thought to replace the old thinking traps. Let's use the following example: \n I feel sad and overwhelmed. I'm having a hard time figuring out what to do. \n I'm the worst! I should be able to handle this! \n Labeling \n 'Should' statements \n Examine the evidence: I have a lot of challenges right now. I'm worried about my family and everything seems to change so quickly. I've successfully handled complicated situations in the past, so I know I can do this. \n It's okay to feel upset right now—there's a lot going on. I'm going to think about how I got through past situations and see what worked for me. I'm trying to do a lot on my own, so I'm going to talk to my family so we can make a plan and work together. \n Try the Healthy Thinking Worksheet at www.heretohelp.bc.ca \n Check out Anxiety Canada's articles Helpful Thinking and Thinking Traps \n This page is adapted from Wellness Module 8: Healthy Thinking at www.heretohelp.bc.ca/wellness-module/wellness-module-8-healthy-thinking.",
            createdAt: new Date(),
          },
        ])
      );
    }

    const b = ["depressed"];
    if (
      b.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          _id: Math.random().toString(16).slice(2),
          text: "What you tell yourself about a situation affects how you feel and what you do. Sometimes your interpretation of a situation can get distorted and you only focus on the negative aspects—this is normal and expected. However, when you interpret situations too negatively, you might feel worse. You're also more likely to respond to the situation in ways that are unhelpful in the long term. \n These automatic thoughts and assumptions are sometimes called thinking traps. Everyone falls into unbalanced thinking traps from time to time. You're most likely to distort your interpretation of things when you already feel sad, angry, anxious, depressed or stressed. You're also more vulnerable to thinking traps when you're not taking good care of yourself, like when you're not eating or sleeping well. \n Here are some common thinking traps: \n Thinking that a negative situation is part of a constant cycle of bad things that happen. People who overgeneralize often use words like \"always\" or \"never.\" \n I was really looking forward to that concert, and now it’s cancelled. This always happens to me! I never get to do fun things! \n Seeing things as only right or wrong, good or bad, perfect or terrible.",
          createdAt: new Date(),
        })
      );
    }

    const c = ["disorder"];
    if (
      c.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          _id: Math.random().toString(16).slice(2),
          text: "disorder is a subtype of bipolar disorder. Much like bipolar disorder, the symptoms of cyclothymia include three or more symptoms of hypomania, and five or more symptoms of depression. Like bipolar disorder, people may experience wellness between episodes of hypomania and depression. \n Symptoms of hypomania include: \n Symptoms of depression include: \n Talk to a doctor or mental health professional if you think you might have cyclothymic disorder.",
          createdAt: new Date(),
        })
      );
    }
    const d = ["stress"];
    if (
      d.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          _id: Math.random().toString(16).slice(2),
          text: "Stress and anxiety are often used interchangeably, and there is overlap between stress and anxiety. Stress is related to the same ‘fight, flight, or freeze’ response as anxiety, and the physical sensations of anxiety and stress may be very similar. \n The cause of stress and anxiety are usually different, however. Stress focuses on mainly external pressures on us that we’re finding hard to cope with. When we are stressed, we usually know what we’re stressed about, and the symptoms of stress typically disappear after the stressful situation is over. \n Anxiety, on the other hand, isn’t always as easy to figure out. Anxiety focuses on worries or fears about things that could threaten us, as well as anxiety about the anxiety itself. Stress and anxiety are both part of being human, but both can be problems if they last for a long time or have an impact on our well-being or daily life.",
          createdAt: new Date(),
        })
      );
    }

    const e = ["anxiety"];
    if (
      e.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          _id: Math.random().toString(16).slice(2),
          text: "Anxiety is a normal reaction to many different kinds of events and situations in our lives. Anxiety is one of our internal warning systems that alerts us to danger or other threats and prepares our bodies to fight back or get out of a dangerous situation. (Scientists call this the ‘fight, flight, or freeze’ response.) \n A manageable amount of anxiety from time to time can be helpful. For example, it can motivate you to prepare for a test a school or finish a task at work. Even happy events like moving to a new home or celebrating an important milestone can bring up anxiety—all of this is just part of being human. \n Anxiety is a problem when it becomes overwhelming or unmanageable and it comes up unexpectedly. Anxiety disorders are mental illnesses that have a big impact your life. People may avoid going about their daily lives in order to avoid anxiety. They may experience a lot of uncomfortable physical sensations and physical health problems. Many people say that they know their anxiety isn’t based in reality, but they feel ‘trapped’ by their thought and feelings. Anxiety disorders can be treated. It’s important to seek help if you’re concerned about anxiety in your life. \n Normal anxiety... \n Is related to a specific situation or problem \n Lasts only as long as the situation or problem/p> \n Is proportional to the situation or problem/p> \n Is a realistic response to a realistic problem or situation/p> \n When someone experiences an anxiety disorder... \n Anxiety may come up unexpectedly, for seemingly no reason \n The anxiety response to a situation or problem may be much stronger that they would expect \n They may experience a lot of unrealistic anxiety, such as fear of a situation that likely will never happen \n Anxiety may last for a long time, even when the situation or problem has been resolved \n Anxiety may feel impossible to control or manage \n They may avoid situations or things that they believe to trigger anxiety symptoms \n Here’s an example of normal anxiety and an anxiety disorder. Many people are a bit nervous about flying, which is a totally normal reaction. Yet, if they have to travel for work, they can can get on a plane without any problems. Someone with an anxiety disorder, on the other hand, may not be able to travel to the airport—even if it puts their job in jeopardy. \n *Formerly classified as an anxiety disorder and currently classified as Trauma- and Stressor-Related Disorders \n **Formerly classified as an anxiety disorder and currently classified as Obsessive-Compulsive and Related Disorders",
          createdAt: new Date(),
        })
      );
    }

    const f = ["mental"];
    if (
      f.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          _id: Math.random().toString(16).slice(2),
          text: "It is estimated that mental illness affects 1 in 5 adults in America, and that 1 in 24 adults have a serious mental illness. Mental illness does not discriminate; it can affect anyone, regardless of gender, age, income, social status, ethnicity, religion, sexual orientation, or background. Although mental illness can affect anyone, certain conditions may be more common in different populations. For instance, eating disorders tend to occur more often in females, while disorders such as attention deficit/hyperactivity disorder is more prevalent in children. Additionally, all ages are susceptible, but the young and the old are especially vulnerable. Mental illnesses usually strike individuals in the prime of their lives, with 75 percent of mental health conditions developing by the age of 24. This makes identification and treatment of mental disorders particularly difficult, because the normal personality and behavioral changes of adolescence may mask symptoms of a mental health condition. Parents and caretakers should be aware of this fact, and take notice of changes in their child’s mood, personality, personal habits, and social withdrawal. When these occur in children under 18, they are referred to as serious emotional disturbances (SEDs).",
          createdAt: new Date(),
        })
      );
    }
    const g = ["problems"];
    if (
      g.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random().toString(16).slice(2),
            text: "Challenges or problems with your mental health can arise from psychological, biological, and social, issues, as well as life events.",
            createdAt: new Date(),
          },
        ])
      );

      const h = ["sadness"];
    if (
      h.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random().toString(16).slice(2),
            text: "Sadness is a normal reaction to a loss, disappointment, problems, or other difficult situations. Feeling sad from time to time is just another part of being human. In these cases, feelings of sadness go away quickly and you can go about your daily life. \n Other ways to talk about sadness might be ‘feeling low,’ ‘feeling down,’ or ‘feeling blue.’ A person may say they are feeling ‘depressed,’ but if it goes away on its own and doesn’t impact life in a big way, it probably isn’t the illness of depression. \n Depression is a mental illness that affects your mood, the way you understand yourself, and the way you understand and relate to things around you. It can also go by different names, such as clinical depression, major depressive disorder, or major depression. Depression can come up for no reason, and it lasts for a long time. It’s much more than sadness or low mood. People who experience depression may feel worthless or hopeless. They may feel unreasonable guilty. Some people may experience depression as anger or irritability. It may be hard to concentrate or make decisions. Most people lose interest in things that they used to enjoy and may isolate themselves from others. There are also physical signs of depression, such as problems with sleep, appetite and energy and unexplainable aches or pains. Some may experience difficult thoughts about death or ending their life (suicide). Depression lasts longer than two weeks, doesn’t usually go away on its own, and impacts your life. It’s a real illness, and it is very treatable. It’s important to seek help if you’re concerned about depression.",
            createdAt: new Date(),
          },
        ])
      );

      const i = ["mood"];
    if (
      i.some((element) =>
        new RegExp("\\b" + element + "\\b").test(messages[0].text)
      )
    ) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random().toString(16).slice(2),
            text: "What you tell yourself about a situation affects how you feel and what you do. Sometimes your interpretation of a situation can get distorted and you only focus on the negative aspects—this is normal and expected. However, when you interpret situations too negatively, you might feel worse. You're also more likely to respond to the situation in ways that are unhelpful in the long term. \n These automatic thoughts and assumptions are sometimes called thinking traps. Everyone falls into unbalanced thinking traps from time to time. You're most likely to distort your interpretation of things when you already feel sad, angry, anxious, depressed or stressed. You're also more vulnerable to thinking traps when you're not taking good care of yourself, like when you're not eating or sleeping well. \n Here are some common thinking traps: \n Thinking that a negative situation is part of a constant cycle of bad things that happen. People who overgeneralize often use words like \"always\" or \"never.\" \n I was really looking forward to that concert, and now it’s cancelled. This always happens to me! I never get to do fun things! \n Seeing things as only right or wrong, good or bad, perfect or terrible. People who think in black and white terms see a small mistake as a total failure. \n I wanted to eat healthier, but I ate too many snacks today. This plan is a total failure! \n Saying only negative things about yourself or other people. \n I made a mistake. I'm stupid! My boss told me that I made a mistake. My boss is a total jerk! \n Predicting that something bad will happen without any evidence. \n I've been doing what I can to stay home and reduce the risks, but I just know that I'm going to get sick. \n Focusing only on the negative parts of a situation and ignoring anything good or positive. \n I know there's a lot I can do at home, but I'm just so sick of this. Everything is terrible. \n Believing that bad feelings or emotions reflect the situation. \n I feel scared and overwhelmed right now, so that must mean everything is very bad and will never get better. \n Telling yourself how you \"should\" or \"must\" act. \n I should be able to handle this without getting upset and crying! \n Here are helpful strategies to challenge common thinking traps. Many people find their mood and confidence improve after working through these skills. You can also find worksheets to help you go through each step at www.heretohelp.bc.ca. \n Don't try to get out of a thinking trap by just telling yourself to stop thinking that way. \n This doesn't let you look at the evidence and challenge the thinking trap. When you try and push upsetting thoughts away, they are more likely to keep popping back into your mind. \n Ask yourself the following questions when something upsetting happens: \n What is the situation? What actually happened? Only include facts that everyone would agree on. \n What are your thoughts? What are you telling yourself? \n What are your emotions? How do you feel? \n What are your behaviours? How are you reacting? What are you doing to cope? \n Take a look at the thoughts you've listed. Are you using any of the thinking traps and falling into distorted thinking patterns? It's common to fall into more than one thinking trap. Go back to the thinking trap list and identify which ones apply to you and your current situation. \n The best way to break a thinking trap is to look at your thoughts like a scientist and consider the hard facts. Use the evidence you've collected to challenge your thinking traps. Here are some ways to do that: \n Try to find evidence against the thought. If you make a mistake at work, you might automatically think, \"I can't do anything right! I must be a terrible employee!\" When this thought comes up, you might challenge it by asking, \"Is there any evidence to support this thought? Is there any evidence to disprove this thought?\" You might quickly realize that your boss has complimented your work recently, which doesn't support the idea that you're a bad employee. \n Ask yourself, \"Would I judge other people if they did the same thing? Am I being harder on myself than I am on other people?\" This is a great method for challenging thinking traps that involve harsh self-criticism. \n Find out whether other people you trust agree with your thoughts. For example, you might have trouble with one of your kids and think, \"Good parents wouldn't have this kind of problem.\" To challenge this thought, you can ask other parents if they've ever had any problems with their kids. \n Test your beliefs in person. For example, if you think that your friends don't care about you, call a few friends and make plans to start a regular video call. If you assumed that they will all say no, you may be pleasantly surprised to hear that they do want to see you. \n Once you have worked through some challenges, try to think of a more balanced thought to replace the old thinking traps. Let's use the following example: \n I feel sad and overwhelmed. I'm having a hard time figuring out what to do. \n I'm the worst! I should be able to handle this! \n Labeling \n 'Should' statements \n Examine the evidence: I have a lot of challenges right now. I'm worried about my family and everything seems to change so quickly. I've successfully handled complicated situations in the past, so I know I can do this. \n It's okay to feel upset right now—there's a lot going on. I'm going to think about how I got through past situations and see what worked for me. I'm trying to do a lot on my own, so I'm going to talk to my family so we can make a plan and work together. \n Try the Healthy Thinking Worksheet at www.heretohelp.bc.ca \n Check out Anxiety Canada's articles Helpful Thinking and Thinking Traps \n This page is adapted from Wellness Module 8: Healthy Thinking at www.heretohelp.bc.ca/wellness-module/wellness-module-8-healthy-thinking.",
            createdAt: new Date(),
          },
        ])
      );
    }}
    }
    if (
      messages[0].text === ("Hi" ||
      "hi" ||
      "Hello" ||
      "hello" ||
      "hey" ||
      "Hey")
    ) {
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
