import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

import Button from '../../components/Button'

import styles from './styles'

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="LOGIN"
          onPress={() => {}}
          buttonStyle={styles.leftButton}
        />
      )
    })
  }, [navigation])

  return (
    <View />
  )
}
