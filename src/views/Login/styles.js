import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('window').width * 0.85,
    marginTop: 8,
  },
})
