import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import SensorsTabNavigator from '../TabNavigator/TabNavigator'
import Colors from '../../res/Colors'
import UserProfile from '../User/UserProfile'

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.brown,
          shadowColor: Colors.brown,
        },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SensorsTabNavigator' component={SensorsTabNavigator} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default AppStack