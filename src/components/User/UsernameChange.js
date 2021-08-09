import React from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './Style'
import UserSession from '../../libs/sessions'

class UsernameChange extends React.Component {

  state = {
    user:undefined,
    form:{
      profile:{},
    },
    token: '',
    loading:false,
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    let token = await UserSession.instance.getToken(user.username)
    console.log(user.id)
    this.setState({ user:user, token:token })
  }

  editProfile = async () => {
    const {user, token, form} = this.state
    let response = await UserSession.instance.editProfileUsername(
      user.id,
      token,
      form,
    )
    console.log(response)
    this.props.navigation.replace("SensorsTabNavigator")
  }

  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.subtitlesContainer}>
              <Text style={styles.titleText}>Cambiar Username</Text>
            </View>
            <View style={styles.form}>
              <Text style={styles.labels}>Nuevo Username</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Username"
                onChangeText={text => {
                  this.setState(prevState => {
                    let form = Object.assign({}, prevState.form)
                    form.username = text
                    return {form}
                  })
                }}
              ></TextInput>
              <Text style={styles.labels}>Contraseña</Text>
              <TextInput style={styles.input}  secureTextEntry={true} placeholder="Contraseña"></TextInput>
              <TouchableOpacity style={styles.buttonSmall} onPress={this.editProfile}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default UsernameChange