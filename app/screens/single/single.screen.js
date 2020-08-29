import React from 'react';
import {ScrollView, Text, SafeAreaView, Button} from 'react-native';
import {styles} from './single.style';

export default SingleScreen = (props) => {
  function goToBack() {
    if (props.navigation.canGoBack()) {
      props.navigation.goBack(null);
    }
    console.log(props);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Single</Text>
        <Button title="Go Back" onPress={goToBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
