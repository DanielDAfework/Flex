import React , {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';


export default class AddHabit extends Component {

  render()
  {
    //Pass the navigation of a prop of class component
    const {navigation} = this.props;
  
    return(
        <View styles = {styles.container}>
            <TextField fontSize = {25}labelFontSize = {25} label='Habit' style = {styles.field}  />
            <Button title = "Go back to HabitList" onPress = {() => {
                navigation.navigate("HabitList")
                    //Takes back to last screen on stack
                    //navigation.goBack()
                }}>
                </Button>
        </View>
    )
  }
}

  

const styles = StyleSheet.create({
    container: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      
    },
    welcome: {
      padding: 10,
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      padding: 10,
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    button: {
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#89cff0',
      textAlign: 'center',
      marginBottom: 7,
      borderRadius: 2,
      fontSize: 20,
    },
    field:{
      textAlign: 'center',
      height: 40,
      alignItems: 'center'    
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

