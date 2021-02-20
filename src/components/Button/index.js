import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

export default function Button({ title, onPress, containerStyle }) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
