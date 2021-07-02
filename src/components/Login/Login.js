import React from 'react'
import {View,Text,StyleSheet,Image,StatusBar,TextInput,TouchableOpacity} from 'react-native'
import Login_hero from '../../res/images/login_hero.png'
import Logo from '../../res/images/farmlogo.png'
import Colors from '../../res/Colors'

const imageBackground = {
  uri: 'https://www.abc4.com/wp-content/uploads/sites/4/2021/02/GettyImages-862701736.jpg?w=876&h=493&crop=1',
}

class BadgesLanding extends React.Component {
  handlePress = () => {
    
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
        <View style={styles.login_content}>
          <Image style={styles.header} source={imageBackground}/>
          <Image style={styles.logo} source={Logo}/>
          <View style={styles.form}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.input}
            />
            <TouchableOpacity style={styles.submit}>
              <Text style={styles.submitText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.signup_text}>You don't have an account?</Text>
            <Text style={styles.signup_text}>Sign up <Text style={styles.here}>here</Text></Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  header: {
    width:'100%',
    height:'30%',
  },
  logo: {
    width: 200,
    height: 200,
    position:'absolute',
    top: 65,
    left:'25%'
  },
  login_content: {
    flex:2,
    backgroundColor:Colors.brown,
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
    paddingVertical:45,
    paddingHorizontal:50,
    flex:2,
  },
  submit:{
    marginVertical:30,
    marginHorizontal:110,
    width:'30%',
    borderWidth:1,
    borderRadius:10,
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
    alignSelf:'center'
  },
  here: {
    color:Colors.yellow
  }
})

export default BadgesLanding