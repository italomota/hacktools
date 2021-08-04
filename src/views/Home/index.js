import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View } from 'react-native'

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

  async function getQuestionnaires() {
    const response = await api.get('questionnaires')

    setQuestionnaires(response.data)
  }

  useEffect(() => {
    getQuestionnaires()
  }, [])

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
