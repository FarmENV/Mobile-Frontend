import React from 'react'
import {View,Text,StyleSheet,Image,StatusBar,TextInput,TouchableOpacity, ImageBackground, ScrollView} from 'react-native'
import Logo from '../../assets/farmlogo.png'
import Colors from '../../res/Colors'
import UserSession from '../../libs/sessions'
import Loader from '../Generics/Loader'

const imageBackground = {
  uri: 'https://besthqwallpapers.com/Uploads/12-11-2018/71528/thumb2-little-piggy-pink-piglet-funny-animals-farm-piggy.jpg'
}

class Signup extends React.Component {

  state = {
    loading:false,
    error:false,
    errors:[],
    user:undefined,
    isPasswordVisible: true,
    isPasswordConfVisible: true,
    form:{}
  }

  handleSubmit = async () => {
    try{
      this.setState({loading:true, user:undefined})
      let response = await UserSession.instance.signup(this.state.form)
      console.log(response)
      if (typeof response === 'object'){
        let _errors = []
        let cont = 0
        
        for(let error in response) {
          console.log(response.email)
          let key = error
          if (error ==='username'){
            error = 'Username'
          }else if (error === 'last_name'){
            error = 'Apellidos'
          }else if (error === 'first_name'){
            error = 'Nombre'
          }else if (error === 'password'){
            error = 'Contraseña'
          }else if (error === 'password_confirmation'){
            error = 'Confirmar contraseña'
          }
          _errors.push(
            <View key={cont}>
              <Text style={styles.warningText}>
                {`${error} : ${response[key][0]}`}
              </Text>
            </View>
          )
          cont++
        }
        this.setState({loading:false, user:undefined, errors: _errors, error:true})
      } else {
        this.setState({loading:false, error: false, user:response, errors:[]})
      }
    } catch (error) {
      console.log('Signup error', error)
      throw Error(error)
    }
    if(this.state.user){
      this.props.navigation.navigate('Login')
    }
  }

  ToggleisPasswordVisible = () => {
    if (this.state.isPasswordVisible) {
        this.setState({isPasswordVisible : false});
    } else {
        this.setState({isPasswordVisible: true});
    }
  };

  ToggleisPasswordConfVisible = () => {
    if (this.state.isPasswordConfVisible) {
        this.setState({isPasswordConfVisible : false});
    } else {
        this.setState({isPasswordConfVisible: true});
    }
  };

  handlePressHere = () => {
    this.props.navigation.replace('Login')
  }

  render() {
    const {errors, error, loading, isPasswordVisible, isPasswordConfVisible,} = this.state
    if (loading === true){
      return <Loader/>
    }
    return(
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.layerColor}>
            <Image style={styles.logo} source={Logo}/>
            <View style={styles.form}>
            {error
              ? <View style={styles.warning}>
                  {errors}
                </View>
              : null }
              <Text style={styles.inputText}>Nombre</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={text => {
                  this.setState(prevState => {
                    let form = Object.assign({}, prevState.form)
                    form.first_name = text
                    return {form}
                  })
                }}
              />
              <Text style={styles.inputText}>Apellidos</Text>
              <TextInput
                style={styles.input}
                placeholder="Apellidos"
                onChangeText={text => {
                  this.setState(prevState => {
                    let form = Object.assign({}, prevState.form)
                    form.last_name = text
                    return {form}
                  })
                }}
              />
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
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => {
                  this.setState(prevState => {
                    let form = Object.assign({}, prevState.form)
                    form.email = text
                    return {form}
                  })
                }}
              />
              <Text style={styles.inputText}>Constraseña</Text>
              <View style={styles.passwordRow}>
              <TextInput
                style={styles.inputPassword}
                secureTextEntry={isPasswordVisible}
                placeholder="Constraseña"
                onChangeText={text => {
                  this.setState(prevState => {
                    let form = Object.assign({}, prevState.form)
                    form.password = text
                    return {form}
                  })
                }}
              />
              <TouchableOpacity onPress={this.ToggleisPasswordVisible}>
                  <Image 
                      style={{marginRight: 10}}
                      source={
                          isPasswordVisible
                          ? require('../../assets/view.png')
                          : require('../../assets/hide.png')
                      }
                  />
              </TouchableOpacity>
              </View>
              <Text style={styles.inputText}>Confirmar constraseña</Text>
              <View style={styles.passwordRow}>
              <TextInput
                style={styles.inputPassword}
                secureTextEntry={isPasswordConfVisible}
                placeholder="Confirmar constraseña"
                onChangeText={text => {
                  this.setState(prevState => {
                    let form = Object.assign({}, prevState.form)
                    form.password_confirmation = text
                    return {form}
                  })
                }}
              />
              <TouchableOpacity onPress={this.ToggleisPasswordConfVisible}>
                                        <Image 
                                            style={{marginRight: 10}}
                                            source={
                                                isPasswordConfVisible
                                                ? require('../../assets/view.png')
                                                : require('../../assets/hide.png')
                                            }
                                        />
                                    </TouchableOpacity>
                                    </View>
              <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
                <Text style={styles.submitText}>Registrarse</Text>
              </TouchableOpacity>
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
    fontSize:25,
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
    marginBottom:20,
    backgroundColor:"#C14242",
    borderRadius:10,
    flex:1,
  },
  warningText:{
    color:Colors.white
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: Colors.green,
    backgroundColor:Colors.white,
  },
  inputPassword:{
    paddingVertical: 6,
    paddingHorizontal: 12,
    
  }
})

export default Signup