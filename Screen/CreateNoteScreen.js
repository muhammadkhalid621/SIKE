import React, {useState, useEffect} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './Components/TaskInputField';
import TaskItem from './Components/TaskItem';
import { firebase } from "../Firebase/config";


export default function NotesScreen() {
  const [tasks, setTasks] = useState([]);
  const uid = firebase.auth().currentUser.uid

  useEffect(() => {
    firebase.firestore()
    .collection('Notes')
    .doc(uid)
    // Filter results
    // .where('uid', '==', uid)
    .get()
    .then(querySnapshot => {
      console.log('User exists: ', querySnapshot.id);
  
      if (querySnapshot.exists) {
        console.log('User data: ', querySnapshot.data());
      }
    });
  }, []);


  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    const usersRef = firebase.firestore().collection("Notes");
        usersRef
          .doc(uid)
          .set({
            uid,
            task
          })
          .then(() => {
            Keyboard.dismiss();
            // navigation.navigate("Home", { user: data });
          })
          .catch((error) => {
            setLoading(false);
            alert(error);
          });
    
    
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeafd',
  },
  heading: {
    color: '#064246',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});