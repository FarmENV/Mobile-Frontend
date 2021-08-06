import React from 'react'
import {Text, TouchableOpacity, View, ScrollView} from 'react-native'
import styles from './Style'


class EnvironmentHome extends React.Component {

  handleEnvironment = () => {
    this.props.navigation.navigate("EnvironmentProfile")
  }
  handleCreateEnvironment = () => {
    this.props.navigation.navigate("NewEnvironment")
  }

  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.tittleContainer}><Text style={styles.Tittle}> Your Environments </Text></View>
          <TouchableOpacity style={styles.envButton} onPress={this.handleEnvironment}>
            <Text style={styles.envButtonText}>PIGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.envButton} onPress={this.handleEnvironment}>
            <Text style={styles.envButtonText}>CHICKENS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.envButton} onPress={this.handleEnvironment}>
            <Text style={styles.envButtonText}>DUCKS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.envButton} onPress={this.handleEnvironment}>
            <Text style={styles.envButtonText}>HORSES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.envButton} onPress={this.handleEnvironment}>
            <Text style={styles.envButtonText}>COWS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton} onPress={this.handleCreateEnvironment}>
            <Text style={styles.createButtonText}>Create New Environment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default EnvironmentHome