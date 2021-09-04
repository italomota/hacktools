import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export default function List({ data, headerTitle, onPressItem }) {
  function keyExtractor(item) {
    return String(item.id)
  }

  function Header() {
    return <Text style={styles.headerTitle}>{headerTitle}</Text>
  }

  function Empty() {
    return (
      <View style={styles.emptyContainer}>
        <Text>Ainda não existem questionários cadastrados</Text>
      </View>
    )
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={Header}
      ListEmptyComponent={Empty}
    />
  )
}
