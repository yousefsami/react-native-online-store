import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {View, StatusBar, Platform, I18nManager, Text} from 'react-native';
import {env} from './app/utils/environment';
import {configureStore} from './app/store/store';

I18nManager.allowRTL(false);

export default App = () => {
  const store = configureStore();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        {Platform.OS === 'android' && (
          <StatusBar
            backgroundColor={env.theme.PRIMARY_COLOR_DARK}
            barStyle="light-content"
          />
        )}
        <View></View>
      </View>
    </Provider>
  );
};
