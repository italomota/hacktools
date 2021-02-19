import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function List({ data, headerTitle, onPressItem }) {
  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.containerItem} onPress={onPressItem}>
        <Text style={styles.textItem}>{item}</Text>
      </TouchableOpacity>
    )
  }

  function Header() {
    if (!headerTitle) {
      return null
    }

    return (
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    )
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={Header}
    />
  )
}
