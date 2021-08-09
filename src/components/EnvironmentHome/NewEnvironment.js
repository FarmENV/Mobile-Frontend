import React from 'react'
import {Text, TouchableOpacity, View, ScrollView, TextInput, ImageBackground} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import styles from './Style'
import UserSession from '../../libs/sessions'


const imageBackground = {
  uri: 'https://besthqwallpapers.com/Uploads/12-11-2018/71528/thumb2-little-piggy-pink-piglet-funny-animals-farm-piggy.jpg'
}


class NewEnvironment extends React.Component {

  state = {
    form:{}
  }

  componentDidMount = () => {
    this.getUserData()
  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    console.log(user.username)
    let token = await UserSession.instance.getToken(user.username)
    let username = user.username
    this.setState({ form:{username},token:token})
    
  }

  handleSubmit = async () =>{
    const {token, form} = this.state
    console.log(this.state)
    let response = await UserSession.instance.createEnvironmet(
      token,
      form
    )
    console.log(response)
    this.props.navigation.replace('EnvironmentHome')
  }

  render(){
    const {form} = this.state
    return(
      <ScrollView style={styles.imageContainer}>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View style={styles.subtitlesContainer}>
                <Text style={styles.titleText}>Nuevo sistema</Text>
              </View>
              <View style={styles.form}>
                <Text style={styles.labels}>Nombre del entorno:</Text>
                <TextInput style={styles.input} placeholder="Nombre del entorno"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.environment_name = text
                      return {form}
                    })
                  }}
                ></TextInput>
                <Text style={styles.labels}>Tipo de animales:</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    style={styles.picker}
                    onValueChange={type =>{
                      this.setState(prevState =>{
                        let form = Object.assign({}, prevState.form)
                        form.environment_type = type
                        return {form}
                      })
                    }}
                  >
                    <Picker.Item label="Gallinas" value={1}/>
                    <Picker.Item label="Cerdos" value={2} />
                    <Picker.Item label="Caballos" value={3} />
                    <Picker.Item label="Vacas" value={4} />
                  </Picker>
                </View>
                <Text style={styles.labels}>Id de tu sistema:</Text>
                <TextInput style={styles.input} placeholder="Id del sistema"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.arduino_id = text
                      return {form}
                    })
                  }}
                ></TextInput>
                <TouchableOpacity style={styles.buttonSmall} onPress={this.handleSubmit}>
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