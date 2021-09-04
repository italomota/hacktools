import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Questionnaire from '../../components/Questionnaire'

import api from '../../services/api'

import styles from './styles'

export default function NewAnswer({ navigation, route }) {
  const { questionnaire } = route.params

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)

  async function getQuestions() {
    const response = await api.get(`/questionnaires/${questionnaire.id}`)

    setQuestions(response.data)
  }

  async function saveAnswer(data) {
    setLoading(true)

    const user = await AsyncStorage.getItem('user')

    const headers = {
      user,
    }

    const answers = data.map(item => ({
      question_id: item.id,
      description: item.answer,
    }))

    await api.post(`questionnaires/${questionnaire.id}/answers`, answers, { headers })

    navigation.goBack()

    setLoading(false)
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
      <Questionnaire data={questions} onPressSave={saveAnswer} loading={loading} />
    </View>
  )
}
