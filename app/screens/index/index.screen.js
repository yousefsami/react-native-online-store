import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {styles} from './index.style';
import SliderComponent from '../../components/slider/slider.component';

export default IndexScreen = (props) => {
  const goTo = (route) => {
    props.navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.rootScroll}>
        <SliderComponent navigation={props.navigation} />
        <Text>MainIndex</Text>
        <Button title="Go To Single" onPress={() => goTo('Single')} />
        <Button title="Go To Login" onPress={() => goTo('Login')} />
      </ScrollView>
    </SafeAreaView>
  );
};
