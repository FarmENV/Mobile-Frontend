import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Sensors from '../Sensors/Sensors'
import ProfileStack from '../User/ProfileStack'
import SensorsStack from '../Sensors/SensorsStack'
import Colors from '../../res/Colors'

const Tabs = createBottomTabNavigator()

const SensorsTabNavigator = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel:false,
        tintColor: Colors.white,
        activeTintColor: Colors.green,
        style: {
          backgroundColor:Colors.brown,
        }
      }}
    >
      <Tabs.Screen name='UserProfile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({size,color}) => (
            <Image
              style={{ tintColor: color, width: size, height: size }}
              source={require('../../assets/profile.png')}
            />
          )
        }}
      />
      <Tabs.Screen name='Sensors'
        component={SensorsStack}
        options={{
          tabBarIcon: ({size,color}) => (
            <Image
              style={{ tintColor: color, width: size, height: size }}
              source={require('../../assets/resistor.png')}
            />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

export default SensorsTabNavigator