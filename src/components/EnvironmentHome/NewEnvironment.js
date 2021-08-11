import React from 'react'
import {Text, TouchableOpacity, View, ScrollView, TextInput, ImageBackground} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import styles from './Style'
import UserSession from '../../libs/sessions'
import Loader from '../Generics/Loader'


const imageBackground = {
  uri: 'https://besthqwallpapers.com/Uploads/12-11-2018/71528/thumb2-little-piggy-pink-piglet-funny-animals-farm-piggy.jpg'
}


class NewEnvironment extends React.Component {

  state = {
    form:{
      environment_type:0
    },
    error:null,
    loading:false
  }

  componentDidMount = () => {
    this.getUserData()
  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    console.log(user.username)
    let token = await UserSession.instance.getToken(user.username)
    let username = user.username
    this.setState({ form:{username},token:token})
    
  }

  handleSubmit = async () =>{
    const {token, form} = this.state
    console.log(this.state)
    this.setState({loading:true})
    if(form.environment_type != null && form.environment_name != null && form.arduino_id != null){
      let response = await UserSession.instance.createEnvironmet(
        token,
        form
      )
      console.log(response)
      this.setState({loading:false})
      this.props.navigation.replace('EnvironmentHome')
    } else {
      var message = "Debes llenar todos los campos!"
      this.setState({loading:false, error: message})
    }
  }

  render(){
    const {form,error,loading} = this.state
    if (loading === true){
      return <Loader/>
    }
    return(
      <ScrollView style={styles.imageContainer}>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View style={styles.subtitlesContainer}>
                <Text style={styles.titleText}>Nuevo sistema</Text>
              </View>
              <View style={styles.form}>
                {error ? (
                  <View style={styles.warning}>
                    <Text style={styles.warningText}>
                      {error}
                    </Text>
                  </View>
                ) : null}
                <Text style={styles.labels}>Nombre del ambiente:</Text>
                <TextInput style={styles.input} placeholder="Nombre del entorno"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.environment_name = text
                      return {form}
                    })
                  }}
                ></TextInput>
                <Text style={styles.labels}>Tipo de animales:</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    style={styles.picker}
                    selectedValue={form.environment_type}
                    onValueChange={(itemValue, itemIndex) =>{
                      this.setState(prevState =>{
                        let form = Object.assign({}, prevState.form)
                        form.environment_type = itemValue
                        return {form}
                      })
                    }}
                  >
                    <Picker.Item label="Tipo de animal" value={0}/>
                    <Picker.Item label="Gallinas" value={1}/>
                    <Picker.Item label="Cerdos" value={2} />
                    <Picker.Item label="Caballos" value={3} />
                    <Picker.Item label="Vacas" value={4} />
                  </Picker>
                </View>
                <Text style={styles.labels}>Id de tu sistema:</Text>
                <TextInput style={styles.input} placeholder="Id del sistema"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.arduino_id = text
                      return {form}
                    })
                  }}
                ></TextInput>
                <TouchableOpacity style={styles.buttonSmall} onPress={this.handleSubmit}>
                  <Text style={styles.buttonText}>Crear</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}

export default NewEnvironment