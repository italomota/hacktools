import React from 'react'
import { View, FlatList, Text, TextInput } from 'react-native'

import styles from './styles'

export default function Questionnaire({ data }) {
  function keyExtractor(item) {
    return String(item.question)
  }

  function renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.question}>{item.question}</Text>
        {!!item.answer
          ? (
            <Text>R: {item.answer}</Text>
          )
          : (
            <TextInput style={styles.inputAnswer} />
          )
        }
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}
