import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ProjectStack from './src/components/ProjectScreen/ProjectStack'

const App = () => {
  return <NavigationContainer>
    <ProjectStack/>
  </NavigationContainer>;
}

export default App;