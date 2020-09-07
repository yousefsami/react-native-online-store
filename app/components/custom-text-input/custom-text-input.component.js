import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './custom-text-input.style';

export default CustomTextInput = (props) => {
  const [active, setActive] = useState(false);
  return (
    <View style={[styles.textInputWrapper, active ? styles.activeInput : null]}>
      {props.icon && <Icon style={styles.textInputIcon} name={props.icon} />}
      <TextInput
        style={styles.textInput}
        {...props}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}></TextInput>
    </View>
  );
};
