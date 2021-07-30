import React, { useEffect, useState, useLayoutEffect } from 'react'
import { View } from 'react-native'

import List from '../../components/List'
import Button from '../../components/Button'

import api from '../../services/api'

import styles from './styles'

export default function Answers({ navigation, route }) {
  const { questionnaire } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: questionnaire.title,
      headerRight: () => (
        <Button
          title="+"
          onPress={() => {}}
          buttonStyle={styles.rightButton}
        />
      )
    })
  }, [navigation, questionnaire])

  const [answers, setAnswers] = useState([])

  async function getAnswers() {
    const response = await api.get(`/questionnaires/${questionnaire.id}/answers`)

    const formattedAnswers = []

    for (let i = 0; i < response.data.length; i++) {
      formattedAnswers.push({ id: response.data[i].id, title: `Resposta ${i + 1}` })
    }

    setAnswers(formattedAnswers)
  }

  useEffect(() => {
    getAnswers()
  }, [])

  return (
    <View style={styles.container}>
      <List data={answers} headerTitle="Respostas" onPressItem={item => console.log(item)} />
    </View>
  )
}
