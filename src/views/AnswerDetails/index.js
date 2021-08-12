import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View } from 'react-native'

import Questionnaire from '../../components/Questionnaire'

import api from '../../services/api'

import styles from './styles'

export default function AnswerDetails({ navigation, route }) {
  const { answer } = route.params

  const [answers, setAnswers] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: answer.title
    })
  }, [navigation, answer])

  async function getAnswers() {
    const response = await api.get(`/answers/${answer.id}`)

    setAnswers(response.data)
  }

  useEffect(() => {
    getAnswers()
  }, [])
  
  return (
    <View style={styles.container}>
      <Questionnaire data={answers} />
    </View>
  )
}
