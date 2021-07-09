import React from 'react'
import {View,Text,StyleSheet,Image,StatusBar,TextInput,TouchableOpacity, ImageBackground, ScrollView} from 'react-native'
import Logo from '../../res/images/farmlogo.png'
import Colors from '../../res/Colors'

const imageBackground = {
  uri: 'https://besthqwallpapers.com/Uploads/12-11-2018/71528/thumb2-little-piggy-pink-piglet-funny-animals-farm-piggy.jpg'
}

class Signup extends React.Component {

  handlePressBtn = () => {
    this.props.navigation.replace('Login')
  }

  handlePressHere = () => {
    this.props.navigation.replace('Login')
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.layerColor}>
            <Image style={styles.logo} source={Logo}/>
            <View style={styles.form}>
              <Text style={styles.inputText}>First name</Text>
              <TextInput
                style={styles.input}
                placeholder="First name"
              />
              <Text style={styles.inputText}>Last name</Text>
              <TextInput
                style={styles.input}
                placeholder="Last name"
              />
              <Text style={styles.inputText}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
              />
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
              />
              <Text style={styles.inputText}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
              />
              <Text style={styles.inputText}>Password confirmation</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
              />
              <TouchableOpacity style={styles.submit} onPress={this.handlePressBtn}>
                <Text style={styles.submitText}>Sign up</Text>
              </TouchableOpacity>
              <Text style={styles.signup_text}>You don't have an account?</Text>
              <TouchableOpacity onPress={this.handlePressHere}><Text style={styles.here}>Log in here</Text></TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
  },
  layerColor:{
    flex:2,
    backgroundColor:'#21140890',
    justifyContent:'center',
    alignItems:'center',
  },
  logo: {
    width: 200,
    height: 200,
    position:'absolute',
    top: 65,
    left:'25%',
  },
  inputText:{
    paddingTop:15,
    paddingBottom:10,
    fontSize:20,
    marginTop:10,
    marginBottom:5,
    marginLeft:10,
    color:Colors.white
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: Colors.green,
    backgroundColor:Colors.white
  },
  form:{
    paddingTop: 300,
    paddingHorizontal:50,
    flex:2,
    width:'100%',
    paddingBottom:100
  },
  submit:{
    marginVertical:30,
    marginHorizontal:80,
    width:'50%',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:Colors.green
  },
  submitText:{
    fontSize:30,
    margin:5,
    
    color:Colors.white,
    textAlign:'center'
  },
  signup_text: {
    color:Colors.white,
    alignSelf:'center',
    fontSize:20,
  },
  here: {
    color:Colors.yellow,
    alignSelf:'center',
    fontSize:20,
  }
})

export default Signup