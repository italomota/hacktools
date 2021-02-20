import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Button from '../../components/Button'
import List from '../../components/List'
import Title from '../../components/Title'

import api from '../../services/api'

import styles from './styles'

export default function Home({ navigation }) {
  const [questionnaires, setQuestionnaires] = useState([])
  const [user, setUser] = useState('')

  async function getQuestionnaires() {
    const response = await api.get('/questionnaires')

    setQuestionnaires(response.data)
  }

  async function getUser() {
    const loggedUser = await AsyncStorage.getItem('user')

    setUser(loggedUser)
  }

  async function onPressButtonLogin() {
    if (user) {
      await AsyncStorage.removeItem('user')
      setUser('')
      return
    }

    navigation.navigate('Login')
  }

  useEffect(() => {
    getQuestionnaires()
  }, [])

  useEffect(() => {
    getUser()
  }, [user])

  return (
    <View style={styles.container}>
      <View style={styles.headerButtons}>
        <Button
          title={user ? user.toUpperCase() : 'LOGIN'}
          onPress={onPressButtonLogin}
        />
        {!!user && (
          <Button
            title="+"
            onPress={() => {}}
            containerStyle={styles.plusButton}
          />
        )}
      </View>
      <Title text="HackTools" />
      <List
        data={questionnaires}
        headerTitle="Questionários"
        onPressItem={(item) => navigation.navigate('Answers', { item })}
      />
    </View>
  )
}
