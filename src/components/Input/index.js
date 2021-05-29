import React from 'react'
import { TextInput } from 'react-native'

import styles from './styles'

export default function Input({ placeholder, value, onChangeText, inputStyle, editable }) {
  return (
    <TextInput
      style={[styles.textInput, inputStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      editable={editable}
    />
  )
}
