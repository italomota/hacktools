import React from 'react'
import { TextInput } from 'react-native'

import styles from './styles'

export default function Input({ placeholder, onChangeText }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  )
}
