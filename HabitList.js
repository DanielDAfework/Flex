import React , {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Button } from 'react-native';

var habitList = [
  {key: 'Daniel'}, 
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Iyanna'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Kevin'}
];

export default class HabitList extends Component {

  render()
  {
    //Pass the navigation of a prop of class component
    const {navigation} = this.props;
  
    return(
      <View styles = {styles.container}>
        <Text style ={styles.welcome}>I am the list of habits!</Text>
        <FlatList data= {habitList} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
        <View style = {styles.button}>
          <Button title = "Add a habit" onPress = {() => {
          navigation.navigate("AddHabit")
          }}>
         </Button>
      </View>
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

