import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './views/Home'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Hacktools', headerTitleStyle: { backgroundColor: '#00f' }, headerStyle: { marginHorizontal: 16 } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
