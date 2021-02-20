import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './views/Home'
import Login from './views/Login'
import Answers from './views/Answers'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#eee',
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Answers"
          component={Answers}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#eee',
              elevation: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
