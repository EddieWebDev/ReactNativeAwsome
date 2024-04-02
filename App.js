import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, createStackNavigator} from '@react-navigation/native-stack';
import Home from "./Pages/Home";
import Test from "./Pages/Test";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{title: 'Welcome home'}}/>
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
