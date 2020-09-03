import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {styles} from './index.style';
import SliderComponent from '../../components/slider/slider.component';

export default IndexScreen = (props) => {
  goToSingle = () => {
    props.navigation.navigate('Single');
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.rootScroll}>
        <SliderComponent navigation={props.navigation} />
        <Text>MainIndex</Text>
        <Button title="Go To Single" onPress={goToSingle} />
      </ScrollView>
    </SafeAreaView>
  );
};
