import React, {useState} from 'react'
import {Text, TouchableOpacity, View, ScrollView, TextInput, ImageBackground, Picker} from 'react-native'
import styles from './Style'


const imageBackground = {
  uri: 'https://besthqwallpapers.com/Uploads/12-11-2018/71528/thumb2-little-piggy-pink-piglet-funny-animals-farm-piggy.jpg'
}


class NewEnvironment extends React.Component {

  render(){
    return(
      <ScrollView style={styles.imageContainer}>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View style={styles.subtitlesContainer}>
                <Text style={styles.titleText}>New Environment</Text>
              </View>
              <View style={styles.form}>
                <Text style={styles.labels}>Environment Name:</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.labels}>Environment Type:</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    style={styles.picker}
                  >
                    <Picker.Item label="PIGS" value="PG" />
                    <Picker.Item label="CHICKENS" value="CH" />
                    <Picker.Item label="DUCKS" value="DK" />
                    <Picker.Item label="HORSES" value="HS" />
                    <Picker.Item label="COWS" value="MUU" />
                  </Picker>
                </View>
                <TouchableOpacity style={styles.buttonSmall}>
                  <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}

export default NewEnvironment