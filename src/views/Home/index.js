import React, { useLayoutEffect, useState, useCallback } from 'react'
import { View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../services/api'

import Button from '../../components/Button'
import List from '../../components/List'

import styles from './styles'

export default function Home({ navigation }) {
  const [questionnaires, setQuestionnaires] = useState([])
  const [user, setUser] = useState('')

  async function getQuestionnaires() {
    const response = await api.get('questionnaires')

    setQuestionnaires(response.data)
  }

  async function logout() {
    await AsyncStorage.removeItem('user')
    setUser('')
  }

  async function verifyLoggedUser() {
    const loggedUser = await AsyncStorage.getItem('user')

    setUser(loggedUser)
  }

  function headerLeft() {
    return (
      <>
        {!!user ? (
          <Button
            title={user}
            onPress={logout}
            buttonStyle={styles.leftButton}
          />
        ) : (
          <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
            buttonStyle={styles.leftButton}
          />
        )}
      </>
    )
  }

  function headerRight() {
    return (
      <>
        {!!user && (
          <Button
            title="+"
            onPress={() => navigation.navigate('NewQuestionnaire')}
            buttonStyle={styles.rightButton}
          />
        )}
      </>
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft,
      headerRight,
      headerTitleStyle: styles.headerTitle,
    })
  }, [navigation, user])

  useFocusEffect(
    useCallback(() => {
      verifyLoggedUser()
      getQuestionnaires()
    }, [])
  )

  return (
    <View style={styles.container}>
      <List
        headerTitle="Questionários"
        data={questionnaires}
        onPressItem={item => navigation.navigate('Answers', { questionnaire: item })}
      />
    </View>
  )
}
