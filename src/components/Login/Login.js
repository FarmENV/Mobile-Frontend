import React from 'react'
import {View,Text,StyleSheet,Image,StatusBar,TextInput,TouchableOpacity} from 'react-native'
import Logo from '../../assets/farmlogo.png'
import Colors from '../../res/Colors'

const imageBackground = {
  uri: 'https://www.abc4.com/wp-content/uploads/sites/4/2021/02/GettyImages-862701736.jpg?w=876&h=493&crop=1',
}

class Login extends React.Component {
  handlePressBtn = () => {
    this.props.navigation.navigate('Sensors')
  }

  handlePressHere = () => {
    this.props.navigation.replace('Signup')
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
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.submit} onPress={this.handlePressBtn}>
              <Text style={styles.submitText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.signup_text}>You don't have an account?</Text>
            <TouchableOpacity onPress={this.handlePressHere}><Text style={styles.here}>Sign up here</Text></TouchableOpacity>
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

export default Login