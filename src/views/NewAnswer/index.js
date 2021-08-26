import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Questionnaire from '../../components/Questionnaire'
import Button from '../../components/Button'

import api from '../../services/api'

import styles from './styles'

export default function NewAnswer({ navigation, route }) {
  const { questionnaire } = route.params

  const [questions, setQuestions] = useState([])

  async function getQuestions() {
    const response = await api.get(`/questionnaires/${questionnaire.id}`)

    setQuestions(response.data)
  }

  async function saveAnswer() {
    // const user = await AsyncStorage.getItem('user')

    // const data = {
    //   title,
    //   questions,
    // }

    // const headers = {
    //   user,
    // }

    // await api.post(`/questionnaires/${questionnaire.id}/answers`, data, { headers })

    // navigation.goBack()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Nova resposta',
    })
  }, [navigation])

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <View style={styles.container}>
      <Questionnaire data={questions} />
      <Button
        title="Salvar"
        onPress={saveAnswer}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  )
}
