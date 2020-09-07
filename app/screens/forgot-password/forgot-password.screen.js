import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './forgot-password.style';
import CustomTextInputComponent from '../../components/custom-text-input/custom-text-input.component';

export default ForgotPasswordScreen = (props) => {
  const [username, setUsername] = useState('');

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
            <Text style={styles.loginH1}> Forgot password </Text>
            <Text style={styles.loginH2}> You can reset your password </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => goToSignInScreen()}>
              <Text style={styles.headerLinkButton}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <CustomTextInputComponent
            icon="account-outline"
            onChangeText={(text) => setUsername(text)}
            placeholder={'Email or usernames'}
          />
        </View>
        <View style={{marginTop: 35}}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Reset my password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
