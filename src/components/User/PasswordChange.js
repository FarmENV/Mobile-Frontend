import React from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './Style'

class PasswordChange extends React.Component {
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.subtitlesContainer2}><Text style={styles.titleText}>Change Username</Text></View>
            <View style={styles.form}>
              <Text style={styles.labels}>Old password</Text>
              <TextInput style={styles.input} secureTextEntry={true}></TextInput>
              <Text style={styles.labels}>New password</Text>
              <TextInput style={styles.input} secureTextEntry={true}></TextInput>
              <Text style={styles.labels}>Confirm new password</Text>
              <TextInput style={styles.input}  secureTextEntry={true}></TextInput>
              <TouchableOpacity style={styles.buttonSmall}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default PasswordChange