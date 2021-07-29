import React from 'react'
import {Text, Image, TouchableOpacity, View} from 'react-native'
import Colors from '../../res/Colors'
import styles from './Style'
import Help from '../../assets/information.png'

const profileImage = {
  uri:'https://static.educalingo.com/img/en/800/farmer.jpg',
}

class UserProfile extends React.Component {

  handleChangeUsername = () => {
    this.props.navigation.navigate("UsernameChange")
  }
  handleChangePassword = () => {
    this.props.navigation.navigate("PasswordChange")
  }

  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={profileImage}/>
        <TouchableOpacity style={styles.button} onPress={this.handleChangeUsername}>
          <Text style={styles.buttonText}>Change Username</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={this.handleChangePassword}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSmall}><Text style={styles.buttonText}>Help <Image style={styles.help} source={Help}/></Text></TouchableOpacity>
      </View>
    )
  }
}

export default UserProfile