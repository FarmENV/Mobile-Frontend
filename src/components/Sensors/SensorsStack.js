import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/Colors'
import Sensors from './Sensors'

const Stack = createStackNavigator()

const SensorsStack = () => {

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
      <Stack.Screen name="Sensors" component={Sensors} options={{title:'Kit de sensores'}}/>
    </Stack.Navigator>
    
  )
}

export default SensorsStack