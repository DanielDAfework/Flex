import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import {Routes} from "./Routes";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

var startButton = function(){
  Alert.alert('Hello World');
}

export default Routes 
//{

//   return (
//     <View style={styles.container}>
      
//       <Text style={styles.welcome}>Welcome to Flex!</Text>
//       <Text style={styles.welcome}>I hope this project won't get abandoned!</Text>
//       <Text style={styles.welcome}>Press the button to get started!</Text>
//       <View style ={styles.button}>
//       <Button title="The Button" onPress = {startButton} accessibilityLabel="Tap on Me"/>
//       </View>
//       <Text style={styles.instructions}>{instructions}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     padding: 10,
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     padding: 10,
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   button: {
//     padding: 10,
//     borderRadius: 5,
//     borderWidth: 2,
//     borderColor: '#89cff0',
//     textAlign: 'center',
//     marginBottom: 7,
//     borderRadius: 2,
//     fontSize: 20,
//   }
// });
