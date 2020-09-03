import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {env} from './environment';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IndexScreen from '../screens/index/index.screen';
import SingleScreen from '../screens/single/single.screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const SingleScreensStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainSingle"
        component={SingleScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainScreensStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={IndexScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Single"
        component={SingleScreensStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="MainDrawer"
        component={MainScreensStack}
        options={{
          drawerIcon: ({tintColor}) => (
            <Icon name="home" size={22} color={tintColor} />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
