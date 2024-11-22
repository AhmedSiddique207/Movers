import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import SelectCategory from './SelectCategory';
import Forget from './Forget';
import OrderFreight from './OrderFreight'
import SidebarMenu from './SidebarMenu'

const Drawer = createDrawerNavigator();
const screenOptions = {
  tabBarShownLabel: false,
  headerShown: false,
}
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName='OrderFreight'
      screenOptions={screenOptions}
      drawerContent={(props) => <SidebarMenu {...props} />} 
    >
      <Drawer.Screen name='OrderFreight'   options={{   drawerItemStyle: { display: 'none' }}} component={OrderFreight} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  
})

