import React from 'react'
import {Text, TouchableOpacity, View, ScrollView, StyleSheet} from 'react-native'
import Colors from '../../res/Colors'

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
          <TouchableOpacity style={styles.createButton} >
            <Text style={styles.createButtonText} onPress={this.handleCreateEnvironment}>Create New Environment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  envButton:{
    marginVertical:10,
    alignSelf:'center',
    width: 350,
    borderWidth:1,
    borderRadius:15,
    backgroundColor:Colors.green,
  },
  envButtonText:{
    fontSize:25,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  createButton:{
    marginVertical:25,
    alignSelf:'center',
    width: 250,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:Colors.buttonBrown,
  },
  createButtonText:{
    fontSize:20,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  Tittle:{
    fontSize:30,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  tittleContainer:{
    width: 300,
    marginVertical:25,
    marginBottom:25,
    backgroundColor:'#471B03',
    alignSelf:'center',
    borderRadius:10,
  },
})

export default EnvironmentHome