import React from 'react'
import { View, Text, Button } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'
import HelloWorldApp from '../page/Home'
import DetailsScreen from '../page/Detail'
import SettingsScreen from '../page/SettingScreen'
const AppNavigator = createStackNavigator(
  {
    Home: HelloWorldApp,
    Detail: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
)
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})
const TabNavigator = createBottomTabNavigator({
  Home: AppNavigator,
  Settings: SettingsStack
})
export default createAppContainer(TabNavigator)
