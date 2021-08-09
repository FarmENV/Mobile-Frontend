import React from 'react'
import {Text, Image, TouchableOpacity, View, ScrollView} from 'react-native'
import Colors from '../../res/Colors'
import styles from './Style'
import Help from '../../assets/information.png'
import UserSession from '../../libs/sessions'
import { launchImageLibrary } from 'react-native-image-picker'

const profileImage = {
  uri:'https://static.educalingo.com/img/en/800/farmer.jpg',
}

class UserProfile extends React.Component {

  state = {
    user: {
      profile: {}
    },
    token: '',
    picture: {}
  }

  componentDidMount = () => {
    this.getUserData()
  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    let token = await UserSession.instance.getToken(user.username)
    this.setState({user:user, token:token})
    
  }

  handleChooseProfileImg = () => {
    const options = {
      includeBase64:false,
      mediaType:'photo',
    }

    launchImageLibrary (options, response => {
      if(!response.didCancel){
        let photo = response.assets[0].uri
        this.setState({picture:photo})
        console.log('Estate', this.state)
        this.editProfilePicture()
      }
    })
  }

  editProfilePicture = async () => {
    const {user, token, picture} = this.state
    let response = await UserSession.instance.editProfile(
      user.id,
      token,
      picture,
    )
    
    this.setState({user:response})
  }

  handleChangeUsername = () => {
    this.props.navigation.navigate("UsernameChange")
  }
  handleChangePassword = () => {
    this.props.navigation.navigate("PasswordChange")
  }
  handleEnvironmentsHome = () => {
    this.props.navigation.navigate("EnvironmentHome")
  }

  render(){
    const {user} = this.state
    console.log(user)
    return(
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: `${user.profile.profile_picture}`}}/>
          <Text style={styles.names}>{user.first_name} {user.last_name}</Text>
          <TouchableOpacity 
            style = {styles.cameraContainer}
            onPress = {this.handleChooseProfileImg}
          >
            <Image 
              style = {styles.cameraIcon}
              source = {require('../../assets/cameraicon.png')}/>
          </TouchableOpacity>
          <Text style={styles.username}></Text>
          <TouchableOpacity style={styles.button} onPress={this.handleChangeUsername}>
            <Text style={styles.buttonText}>Cambiar Username</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText} onPress={this.handleChangePassword}>Cambiar contraseña</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText} onPress={this.handleEnvironmentsHome}>Ambientes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall}><Text style={styles.buttonText}>Ayuda <Image style={styles.help} source={Help}/></Text></TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default UserProfile