import React, { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Button from '../../components/Button'
import Input from '../../components/Input'

import styles from './styles'

export default function Login({ navigation }) {
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)

  async function login() {
    if (!user) {
      return
    }

    setLoading(true)

    await AsyncStorage.setItem('user', user)
    navigation.goBack()

    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Usuário"
        onChangeText={setUser}
        inputStyle={styles.input}
      />
      {loading ? (
        <ActivityIndicator color="#167bf7" size="large" />
      ) : (
        <Button title="ENTRAR" onPress={login} containerStyle={styles.button} />
      )}
    </View>
  )
}
