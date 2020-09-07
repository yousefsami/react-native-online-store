import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './login.style';
import {get} from '../../utils/network';
import {env} from '../../utils/environment';
import {connect} from 'react-redux';
import Toast from 'react-native-root-toast';
import {login} from '../../store/stores/user';
import CustomTextInput from '../../components/custom-text-input/custom-text-input.component';

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sendingToServer, setSendingToServer] = useState('');

  const loginFn = async () => {
    // Check if data is sending toward the server function doesn't call anymore
    if (sendingToServer) {
      return;
    }

    // Check required fields
    if (username.length == 0 || password.length == 0) {
      Toast.show(
        'Please enter your username and password together.',
        env.toastConfig,
      );
      return;
    }

    setSendingToServer(true);

    // You should replace this line with your own API
    // It's not a secure way
    const json = await get(
      `${env.api.users}?username=${username}&password=${password}`,
    );
    setSndingToServer(false);
    if (json && json.length > 0) {
      const _json = json[0];

      // Set user detail in AsyncStorage for keeping login user on application when user exit from application
      await AsyncStorage.setItem('USER', JSON.stringify(_json));

      props.dispatch(
        login(
          _json.id,
          _json.username,
          _json.fullname,
          _json.email,
          _json.token,
        ),
      );
      props.navigation.navigate('MainDrawer');
    } else {
      Toast.show(
        'Sorry, We cannot find an account with that information.',
        env.toastConfig,
      );
    }
  };

  goToSignUpScreen = () => {
    props.navigation.navigate('Register');
  };

  goToForgotPasswordScreen = () => {
    props.navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.rootScroll}>
        <View style={styles.formHeader}>
          <TouchableOpacity
            style={styles.headerIconWrapper}
            onPress={() => props.navigation.goBack(null)}>
            <Icon style={styles.headerIcon} name="chevron-left" />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <Text style={styles.loginH1}> Welcome </Text>
            <Text style={styles.loginH2}> Sign in to continue </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => goToSignUpScreen()}>
              <Text style={styles.headerLinkButton}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <CustomTextInput
            icon="account-outline"
            onChangeText={(text) => setUsername(text)}
            placeholder={'Email or usernames'}
          />
          <CustomTextInput
            icon="lock-outline"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder={'Password'}
          />
        </View>
        <View style={{marginTop: 35}}>
          <TouchableOpacity
            onPress={() => loginFn()}
            style={styles.loginButton}>
            {!sendingToServer ? (
              <Text style={styles.loginButtonText}>Sign in</Text>
            ) : (
              <ActivityIndicator
                size="small"
                color={env.theme.PRIMARY_COLOR_TEXT}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{textAlign: 'center'}}> - OR -</Text>
        </View>
        <View style={styles.socialWrapper}>
          <TouchableOpacity style={[styles.socialIcon, styles.google]}>
            <Icon style={styles.icon} name="google" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialIcon, styles.facebook]}>
            <Icon style={styles.icon} name="facebook" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => goToForgotPasswordScreen()}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect((state) => ({
  user: state.userReducer.user,
}))(LoginScreen);
