import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './register.style';
import Toast from 'react-native-root-toast';
import {connect} from 'react-redux';
import {env} from '../../utils/environment';
import {post} from '../../utils/network';
import {login} from '../../store/stores/user';
import CustomTextInput from '../../components/custom-text-input/custom-text-input.component';

const RegisterScreen = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sendingToServer, setSendingToServer] = useState(false);

  const signup = async () => {
    // Check if data is sending toward the server function doesn't call anymore
    if (sendingToServer) {
      return;
    }

    // Check required fields
    if (
      email == '' ||
      username == '' ||
      fullname == '' ||
      password == '' ||
      confirmPassword == ''
    ) {
      Toast.show('All inputs are required.', env.toastConfig);
      return;
    }

    // Check password and confirmPassword are same or not
    if (password !== confirmPassword) {
      Toast.show("Your passwords didn't match.", env.toastConfig);
      return;
    }

    setSendingToServer(true);

    // This is just a mock object
    // You don't need to set token key in your objec while you want to send to your server
    const mockObject = Object.assign(
      {},
      {
        username,
        password,
        fullname,
        email,
        token: 'dsd5464sd32d54das32d164dasd87asd65',
      },
    );
    const json = await post(env.api.users, mockObject);
    setSendingToServer(false);

    // You can rewrite here with your own conditions
    if (json.id) {
      // Set user detail in AsyncStorage for keeping login user on application when user exit from application
      await AsyncStorage.setItem('USER', JSON.stringify(json));

      Toast.show('Your account has been created successfuly.', env.toastConfig);

      // Set new user information in redux store
      props.dispatch(
        login(json.id, json.username, json.fullname, json.email, json.token),
      );

      props.navigation.navigate('MainDrawer');
    } else {
      Toast.show(
        'Something wents wrong, Please try again at another time.',
        env.toastConfig,
      );
    }
  };

  const goToSignInScreen = () => {
    props.navigation.navigate('Login');
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
            <Text style={styles.loginH2}> Sign up to continue </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => goToSignInScreen()}>
              <Text style={styles.headerLinkButton}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <CustomTextInput
            icon="email-outline"
            onChangeText={(text) => setEmail(text)}
            placeholder={'Email'}
          />
          <CustomTextInput
            icon="account-outline"
            onChangeText={(text) => setUsername(text)}
            placeholder={'Username'}
          />
          <CustomTextInput
            icon="account-outline"
            onChangeText={(text) => setFullname(text)}
            placeholder={'Fullname'}
          />
          <CustomTextInput
            icon="lock-outline"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder={'Password'}
          />

          <CustomTextInput
            icon="lock-outline"
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            placeholder={'Confirm password'}
          />
        </View>
        <View style={{marginTop: 35}}>
          <TouchableOpacity onPress={() => signup()} style={styles.loginButton}>
            {!sendingToServer ? (
              <Text style={styles.loginButtonText}>Sign up</Text>
            ) : (
              <ActivityIndicator
                size="small"
                color={env.theme.PRIMARY_COLOR_TEXT}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', lineHeight: 22, marginTop: 50}}>
          By creating your account, you agree to our Terms & Conditions
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect((state) => ({
  user: state.userReducer.user,
}))(RegisterScreen);
