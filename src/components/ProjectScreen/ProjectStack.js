import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/Colors'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const Stack = createStackNavigator()

const ProjectStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.brown,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
    </Stack.Navigator>
    
  )
}

export default ProjectStack