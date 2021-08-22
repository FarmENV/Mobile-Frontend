import React from 'react'
import {Text, Image, TouchableOpacity, View, ScrollView, StatusBar} from 'react-native'
import Colors from '../../res/Colors'
import styles from './Style'
import Help from '../../assets/information.png'
import Logout from '../../assets/logout.png'
import UserSession from '../../libs/sessions'
import { launchImageLibrary } from 'react-native-image-picker'
import { Linking } from 'react-native'

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

  logout = async () => {
    await UserSession.instance.logout()
    this.props.navigation.replace("Login")
  }

  render(){
    const {user} = this.state
    console.log(user)
    return(
      <ScrollView>
          <Image style={styles.profileImage} source={{uri: `${user.profile.profile_picture}`}}/>
        <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
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
            <Text style={styles.buttonText} onPress={this.handleEnvironmentsHome}>Ambientes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={this.logout}>
            <Text style={styles.buttonText}>Cerrar{'\n'}sesión</Text>
            <Image style={styles.logout} source={Logout}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall}>
            <Text style={styles.buttonText} onPress={() => Linking.openURL('https://pedantic-panini-9d6199.netlify.app/helpCel')}>Ayuda</Text>
            <Image style={styles.help} source={Help}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default UserProfile