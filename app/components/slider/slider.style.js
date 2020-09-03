import { StyleSheet, Platform, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  sliderWrapper: {
    height: 175
  },
  sliderSwipper: {
    width: Platform.OS === 'ios' ? '100%' : Dimensions.get('window').width,
  },
  sliderImage: {
    width: Platform.OS === 'ios' ? '100%' : Dimensions.get('window').width,
    height: 175
  }
});