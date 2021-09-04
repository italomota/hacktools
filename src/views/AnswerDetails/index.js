import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View } from 'react-native'

import Questionnaire from '../../components/Questionnaire'
import Loading from '../../components/Loading'

import api from '../../services/api'

import styles from './styles'

export default function AnswerDetails({ navigation, route }) {
  const { answer } = route.params

  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    getAnswers()
    setLoading(false)
  }, [])
  
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <Questionnaire data={answers} />
      )}
    </View>
  )
}
