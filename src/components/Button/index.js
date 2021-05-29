import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

export default function Button({ title, onPress, buttonStyle, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
