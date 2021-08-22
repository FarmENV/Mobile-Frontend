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
    error:null,
    flag:false
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    let token = await UserSession.instance.getToken(user.username)
    this.setState({ user:user, token:token })
  }

  editProfile = async () => {
    const {user, token, form,flag} = this.state
    if (form.username){
      try {
        let response = await UserSession.instance.editProfileUsername(
          user.id,
          token,
          form,
        )
        console.log(response["username"])
        if (response["username"] == 'Ya existe un usuario con este nombre.'){
          var message = "Este Username ya está en uso."
          this.setState({loading:false, error: message})
        }else {
          this.setState({loading:false, flag:true})
          this.props.navigation.navigate("UserProfile")
        }
      } catch (error) {
        console.log("edit profile error:", error)
      }
    } else {
      var message = "El campo Nuevo Username debe contener un nombre de usuario."
      this.setState({loading:false, error: message})
    }
  }

  render(){
    const {error} = this.state
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.subtitlesContainer}>
              <Text style={styles.titleText}>Cambiar Username</Text>
            </View>
            <View style={styles.form}>
              {error ? (
                <View style={styles.warning}>
                  <Text style={styles.warningText}>
                    {error}
                  </Text>
                </View>
              ) : null}
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