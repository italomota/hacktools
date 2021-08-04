import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './views/Home'
import Answers from './views/Answers'
import Details from './views/Details'
import Login from './views/Login'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Hacktools'
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Answers"
          component={Answers}
        />
        <Stack.Screen
          name="Details"
          component={Details}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
