import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/Colors'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import EnvironmentHome from '../EnvironmentHome/EnvironmentHome'
import NewEnvironment from '../EnvironmentHome/NewEnvironment'
import EnvironmentProfile from '../EnvironmentProfile/EnvironmentProfile'
import EnvironmentEditProfile from '../EnvironmentProfile/EnvironmentEditProfile'
import EnvironmentSettings from '../EnvironmentSettings/EnvironmentSettings'
import UserProfile from './UserProfile'
import UsernameChange from './UsernameChange'
import PasswordChange from './PasswordChange'
import Sensors from '../Sensors/Sensors'

const Stack = createStackNavigator()

const ProfileStack = () => {

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
      <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="UsernameChange" component={UsernameChange} options={{title:'Configuración del perfil'}}/>
      <Stack.Screen name="PasswordChange" component={PasswordChange} options={{title:'Profile Settings'}}/>
      <Stack.Screen name="EnvironmentSettings" component={EnvironmentSettings} options={{title:'Environment Profile'}}/>
      <Stack.Screen name="EnvironmentEditProfile" component={EnvironmentEditProfile} options={{title:'Configurar ambiente'}}/>
      <Stack.Screen name="EnvironmentProfile" component={EnvironmentProfile}/>
      <Stack.Screen name="EnvironmentHome" component={EnvironmentHome} options={{title:'Ambientes'}}/>
      <Stack.Screen name="NewEnvironment" component={NewEnvironment} options={{title:'Crear nuevo ambiente'}}/>
    </Stack.Navigator>
    
  )
}

export default ProfileStack