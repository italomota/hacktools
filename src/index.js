import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './views/Home'
import Answers from './views/Answers'
import AnswerDetails from './views/AnswerDetails'
import Login from './views/Login'
import NewQuestionnaire from './views/NewQuestionnaire'

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
          name="AnswerDetails"
          component={AnswerDetails}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="NewQuestionnaire"
          component={NewQuestionnaire}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
