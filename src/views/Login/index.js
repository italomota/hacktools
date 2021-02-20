import React, { useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'

import styles from './styles'

export default function Login({ navigation }) {
  const [user, setUser] = useState('')

  async function login() {
    if (!user) {
      return
    }

    await AsyncStorage.setItem('user', user)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Title text="HackTools" />
      <Input placeholder="Usuário" onChangeText={(text) => setUser(text)} />
      <Button title="ENTRAR" onPress={login} containerStyle={styles.button} />
    </View>
  )
}
