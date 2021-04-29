import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import List from '../../components/List'
import Title from '../../components/Title'

import api from '../../services/api'

import styles from './styles'

export default function Answers({ navigation, route }) {
  const { item } = route.params
  const [answers, setAnswers] = useState([])

  async function getAnswers() {
    const response = await api.get(`/questionnaires/${item.id}/answers`)

    const formattedAnswers = response.data.map(({ id }) => ({ id, title: `Resposta ${id}` }))

    setAnswers(formattedAnswers)
  }

  useEffect(() => {
    getAnswers()
  }, [])

  return (
    <View style={styles.container}>
      <Title text={item.title} />
      <List data={answers} headerTitle="Respostas" onPressItem={() => {}} />
    </View>
  )
}
