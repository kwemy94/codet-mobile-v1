import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Status from '../components/Status';
import Message from '../components/Message';
import Setting from '../components/Setting';
import Home from '../components/Home';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import DrawerNav from './DrawerNav';


const Tab = createBottomTabNavigator();

const ButtonTabsNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTabs" component={DrawerNav} options={{
        tabBarIcon: ({size, color}) => <AntDesign name="home" size={size} color={color} />,
        tabBarLabel: 'Home',
        headerShown: false
      }} />
      <Tab.Screen name="Status" component={Status} options={{
        tabBarIcon: ({size, color}) => <FontAwesome name="whatsapp" size={size} color={color} />,
      }} />
      <Tab.Screen name="Message" component={Message} options={{
        tabBarIcon: ({size, color}) => <AntDesign name="phone" size={size} color={color} />,
        tabBarLabel: 'Appels'
      }} />
      <Tab.Screen name="Settings" component={Setting} options={{
        tabBarIcon: ({size, color}) => <Feather name="settings" size={size} color={color} />,
        tabBarLabel: 'Parametres'
      }} />
    </Tab.Navigator>
  )
}

export default ButtonTabsNav