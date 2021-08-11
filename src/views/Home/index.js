import React, { useLayoutEffect, useEffect, useState, useCallback } from 'react'
import { View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../services/api'

import Button from '../../components/Button'
import List from '../../components/List'

import styles from './styles'

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="LOGIN"
          onPress={() => navigation.navigate('Login')}
          buttonStyle={styles.leftButton}
        />
      ),
      headerTitleStyle: {
        marginLeft: 16,
      }
    })
  }, [navigation])

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

    navigation.setOptions({
      headerLeft: () => (
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
      ),
      headerRight: () => (
        <>
          {!!user ? (
            <Button
              title="+"
              onPress={() => {}}
              buttonStyle={styles.rightButton}
            />
          ) : (
            null
          )}
        </>
      )
    })
  }

  useEffect(() => {
    getQuestionnaires()
  }, [])

  useFocusEffect(
    useCallback(() => {
      verifyLoggedUser()
    }, [user])
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
