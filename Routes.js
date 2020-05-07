import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HabitList from "./HabitList";
import AddHabit from "./AddHabit";

const Stack = createStackNavigator();

export const Routes = ({}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HabitList">
                <Stack.Screen name = "HabitList" component = {HabitList} />
                <Stack.Screen name = "AddHabit" component = {AddHabit} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



