// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text
} from 'react-native';
 
// import AsyncStorage from '@react-native-community/async-storage';
 
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('Auth'
            //   value === null ? 'Auth' : 'DrawerNavigationRoutes'
            )
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
    //   AsyncStorage.getItem('user_id').then((value) =>
    //     navigation.replace(
    //       value === null ? 'Auth' : 'DrawerNavigationRoutes'
    //     ),
    //   );
    }, 3000);
  }, []);
 
  return (
    <View style={styles.container}>
      <Text style={styles.name}>SIKE APP</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16dce9',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    justifyContent: "flex-end",
    color: "black",
  },
});