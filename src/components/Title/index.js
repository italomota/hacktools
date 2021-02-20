import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>
}
