import { StyleSheet } from 'react-native';
import { env } from './../../utils/environment';
export const styles = StyleSheet.create({
  textInputWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: '#bbb',
    margin: 5,
    flexDirection: 'row'
  },
  textInput: {
    marginLeft: 5,
    flex: 1
  },
  textInputIcon: {
    color: '#888',
    fontSize: 20,
    marginVertical: 13
  },
  activeInput: {
    borderBottomColor: env.theme.PRIMARY_COLOR
  }
});
