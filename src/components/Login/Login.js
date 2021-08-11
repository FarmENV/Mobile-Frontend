import React from 'react'
import {View,Text,StyleSheet,Image,StatusBar,TextInput,TouchableOpacity, ImageBackground} from 'react-native'
import Logo from '../../assets/farmlogo.png'
import UserSession from '../../libs/sessions'
import Colors from '../../res/Colors'
import Loader from '../Generics/Loader'

const imageBackground = {
  uri: 'https://www.abc4.com/wp-content/uploads/sites/4/2021/02/GettyImages-862701736.jpg?w=876&h=493&crop=1',
}

class Login extends React.Component {

  state = {
    loading:false,
    error:null,
    user:undefined,
    form:{}
  }

  componentDidMount = () => {
    this.deleteTokens()
  }

  deleteTokens = async () => {
    await UserSession.instance.logout()
  }

  handleSubmit = async () => {
    try {
      this.setState({loading:true, error:null, user:undefined})
      let response = await UserSession.instance.login(this.state.form)
      console.log(response)
      if (typeof response === 'object'){
        console.log(response)
        if (response["Login Error"]){
          var message = "La cuenta no está verificada, ¡revisa tu email!"
        } else {
          var message = "Los datos no coinciden con los de ninguna cuenta creada, inténtelo de nuevo"
        }
        this.setState({loading:false, error: message, user: undefined})
      }else {
        this.setState({loading:false, error: null, user:response})
      }
    } catch (err) {
      this.setState({loading:false, error:err})
    }
    if(this.state.user){
      this.props.navigation.replace('SensorsTabNavigator')
    }
  }

  handlePressHere = () => {
    this.props.navigation.navigate('Signup')
  }

  render(){
    const {error, loading} = this.state
    if (loading === true){
      return <Loader/>
    }
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
        
          <ImageBackground style={styles.header} source={imageBackground}/>
        
        <View style={styles.login_content}>
          <Image style={styles.logo} source={Logo}/>
          <View style={styles.form}>
            {error ? (
              <View style={styles.warning}>
                <Text style={styles.warningText}>
                  {error}
                </Text>
              </View>
            ) : null}
            <Text style={styles.inputText}>Username</Text>
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
            />
            <Text style={styles.inputText}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              onChangeText={text => {
                this.setState(prevState => {
                  let form = Object.assign({}, prevState.form)
                  form.password = text
                  return {form}
                })
              }}
            />
            <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
              <Text style={styles.submitText}>Iniciar{'\n'}sesión</Text>
            </TouchableOpacity>
            <Text style={styles.signup_text}>¿No tienes una cuenta?</Text>
            <TouchableOpacity onPress={this.handlePressHere}><Text style={styles.here}>Crea tu cuenta aquí</Text></TouchableOpacity>
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
    height:250,
    
  },
  logo: {
    width: 200,
    height: 200,
    
    bottom:190,
    left:'25%'
  },
  login_content: {
    flex:3,
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
    
    paddingHorizontal:50,
    bottom:150
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
  },
  warning:{
    padding:20,
    marginBottom:10,
    backgroundColor:"#C14242",
    borderRadius:10,
    flex:1,
  },
  warningText:{
    color:Colors.white
  },
})

export default Login