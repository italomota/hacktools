import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import Input from '../Input'
import Button from '../Button'

import styles from './styles'

export default function InputPlus({ onPressPlus }) {
  const [questions, setQuestions] = useState([''])

  function keyExtractor(_, index) {
    return String(index)
  }

  function onChangeText(text, index) {
    const newQuestions = questions
    newQuestions[index] = text
    setQuestions([...newQuestions])
  }

  function addQuestion() {
    onPressPlus(questions)
    setQuestions([...questions, ''])
  }

  function renderItem({ item, index }) {
    return (
      <>
        {index !== questions.length - 1
          ? (
            <Input
              value={item}
              editable={false}
              inputStyle={styles.inputStyleConfirmed}
            />
          ) : (
            <View style={styles.itemContainer}>
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Pergunta"
                  inputStyle={styles.inputStyleEditable}
                  value={item}
                  onChangeText={text => onChangeText(text, index)}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="+"
                  onPress={addQuestion}
                  buttonStyle={[styles.buttonStyle, !item && { opacity: 0.5 }]}
                  disabled={!item}
                />
              </View>
            </View>
          )
        }
      </>
    )
  }

  return (
    <FlatList
      data={questions}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}
