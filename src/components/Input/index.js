import React from 'react'
import { TextInput } from 'react-native'

import styles from './styles'

export default function Input({ placeholder, text, onChangeText, inputStyle }) {
  return (
    <TextInput
      style={[styles.textInput, inputStyle]}
      placeholder={placeholder}
      value={text}
      onChangeText={onChangeText}
    />
  )
}
