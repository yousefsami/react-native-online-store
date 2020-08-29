import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {styles} from './index.style';

export default IndexScreen = (props) => {
  console.log(props);

  goToSingle = () => {
    props.navigation.navigate('Single');
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.rootScroll}>
        <Text>MainIndex</Text>
        <Button title="Go To Single" onPress={goToSingle} />
      </ScrollView>
    </SafeAreaView>
  );
};
