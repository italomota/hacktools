import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function List({ data, headerTitle, onPressItem }) {
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.textItem}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  function keyExtractor(item) {
    if (item) {
      return String(item.id)
    }
  }

  function Header() {
    if (!headerTitle) {
      return null
    }

    return <Text style={styles.headerTitle}>{headerTitle}</Text>
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={Header}
    />
  )
}
