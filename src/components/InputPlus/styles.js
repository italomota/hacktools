import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  inputContainer: {
    width: '85%',
  },
  buttonContainer: {
    width: '15%',
  },
  inputStyleEditable: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputStyleConfirmed: {
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#609e64',
    color: '#555'
  },
  buttonStyle: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
})
