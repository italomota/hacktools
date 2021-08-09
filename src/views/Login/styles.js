import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 40,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    width: Dimensions.get('window').width * 0.85,
    marginTop: 8,
  },
})
