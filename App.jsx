// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer
    
    >
      <Stack.Navigator
      screenOptions={{
          headerShown: false, // This hides the header
        }}
      >
        <Stack.Screen name='HOME' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}