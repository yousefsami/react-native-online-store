import { StyleSheet } from 'react-native';
import { env } from './../../utils/environment';
export const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rootScroll: {
    padding: 15
  },
  formHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 20,
    flexDirection: 'row'
  },
  headerTitle: {
    flex: 1
  },
  loginH1: {
    fontSize: 20
  },
  loginH2: {
    fontSize: 14,
    paddingLeft: 2
  },
  loginButton: {
    backgroundColor: env.theme.PRIMARY_COLOR,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    elevation: 3
  },
  loginButtonText: {
    color: env.theme.PRIMARY_COLOR_TEXT,
    textAlign: 'center'
  },
  forgotPassword: {
    textAlign: 'center',
    color: env.theme.PRIMARY_COLOR
  },
  headerLinkButton: {
    paddingRight: 5,
    paddingVertical: 3,
    fontSize: 16,
    color: env.theme.PRIMARY_COLOR
  },
  socialWrapper: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  socialIcon: {
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    borderRadius: 50
  },
  icon: {
    color: '#fff',
    fontSize: 15
  },
  google: {
    backgroundColor: '#f4511e'
  },
  facebook: {
    backgroundColor: '#4867aa'
  },
  headerIconWrapper: {
    paddingVertical: 10,
    paddingRight: 3
  },
  headerIcon: {
    fontSize: 30,
    color: env.theme.PRIMARY_COLOR
  }
});
