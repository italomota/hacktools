import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function List({ data, headerTitle, onPressItem }) {
  function keyExtractor(item) {
    return String(item.id)
  }

  function Header() {
    return <Text style={styles.headerTitle}>{headerTitle}</Text>
  }

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

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={Header}
    />
  )
}
