import React from 'react'
import { View, FlatList, Text, TextInput } from 'react-native'

import Button from '../Button'

import styles from './styles'

export default function Questionnaire({ data, onPressSave }) {
  function keyExtractor(item) {
    return String(item.question)
  }

  function renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.question}>{item.question}</Text>
        {!onPressSave
          ? (
            <Text>R: {item.answer}</Text>
          )
          : (
            <TextInput
              value={item.answer}
              onChangeText={text => item.answer = text}
              style={styles.inputAnswer}
            />
          )
        }
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      {!!onPressSave && (
        <Button
          title="Salvar"
          onPress={() => onPressSave(data)}
        />
      )}
    </View>
  )
}
