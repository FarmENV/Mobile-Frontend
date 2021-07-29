import React from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './Style'

class UsernameChange extends React.Component {
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.subtitlesContainer}><Text style={styles.titleText}>Change Username</Text></View>
            <View style={styles.form}>
              <Text style={styles.labels}>New username</Text>
              <TextInput style={styles.input}></TextInput>
              <Text style={styles.labels}>Password</Text>
              <TextInput style={styles.input}  secureTextEntry={true}></TextInput>
              <TouchableOpacity style={styles.buttonSmall}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default UsernameChange