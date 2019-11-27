import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SingleBook from '../screens/SingleBook';


const config = Platform.select({
  web: { headerMode: 'none' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: SingleBook,
  }, {
    headerMode: 'none',
  }
);


HomeStack.navigationOptions = {
  tabBarLabel: 'Popular',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ), 
};


HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    Details: SingleBook,
  },{
  headerMode: 'none',
}
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Para ti',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Details: SingleBook,
  },{
    headerMode: 'none',
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Mis libros',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
}, {
  tabBarOptions: {
    style: {backgroundColor: 'black', height: 60},
    
  }
});

tabNavigator.path = '';

export default tabNavigator;
