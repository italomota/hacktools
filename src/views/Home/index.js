import React, { useLayoutEffect } from 'react'
import { View, Text, Button } from 'react-native'

// import Button from '../../components/Button'

import styles from './styles'

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 24 }}>
          <Button title="LOGIN" onPress={() => {}} />
        </View>
      )
    })
  }, [navigation])

  return (
    <View />
  )
}
