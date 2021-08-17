import React, { useLayoutEffect, useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../services/api'

import Input from '../../components/Input'
import InputPlus from '../../components/InputPlus'
import Button from '../../components/Button'

import styles from './styles'

export default function NewQuestionnaire({ navigation }) {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState([])

  async function saveQuestionnaire() {
    const user = await AsyncStorage.getItem('user')

    const data = {
      title,
      questions,
    }

    const headers = {
      user,
    }

    await api.post('questionnaires', data, { headers })

    navigation.goBack()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Novo questionário',
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Input
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
        inputStyle={styles.inputStyle}
      />
      <InputPlus
        onPressPlus={setQuestions}
      />
      <Button
        title="Salvar"
        onPress={saveQuestionnaire}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  )
}
