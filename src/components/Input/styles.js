import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  textInput: {
    height: 40,
    width: Dimensions.get('window').width * 0.85,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#bbb',
    paddingLeft: 16
  }
})
