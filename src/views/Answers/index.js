import React, { useCallback, useState, useLayoutEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import List from '../../components/List'
import Button from '../../components/Button'

import api from '../../services/api'

import styles from './styles'

export default function Answers({ navigation, route }) {
  const { questionnaire } = route.params

  const [answers, setAnswers] = useState([])
  const [user, setUser] = useState('')

  async function getAnswers() {
    const response = await api.get(`/questionnaires/${questionnaire.id}/answers`)

    const formattedAnswers = []

    for (let i = 0; i < response.data.length; i++) {
      formattedAnswers.push({ id: response.data[i].id, title: `Resposta ${i + 1}` })
    }

    setAnswers(formattedAnswers)
  }

  async function verifyLoggedUser() {
    const loggedUser = await AsyncStorage.getItem('user')

    setUser(loggedUser)
  }

  function headerRight() {
    return (
      <>
        {!!user && (
          <Button
            title="+"
            onPress={() => navigation.navigate('NewAnswer', { questionnaire })}
            buttonStyle={styles.rightButton}
          />
        )}
      </>
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: questionnaire.title,
      headerRight,
    })
  }, [navigation, questionnaire, user])

  useFocusEffect(
    useCallback(() => {
      verifyLoggedUser()
      getAnswers()
    }, [])
  )

  return (
    <View style={styles.container}>
      <List
        data={answers}
        headerTitle="Respostas"
        onPressItem={item => navigation.navigate('AnswerDetails', { answer: item })}
      />
    </View>
  )
}
