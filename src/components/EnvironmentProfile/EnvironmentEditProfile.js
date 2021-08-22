import React from 'react'
import { Image, Text, View, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native'
import Colors from '../../res/Colors'
import {Picker} from '@react-native-picker/picker'
import UserSession from '../../libs/sessions'
import Loader from '../Generics/Loader'

const imageBackgroundPigs = {
  uri: 'https://actualidadporcina.com/wp-content/uploads/2020/03/imagen-destacada-texto-cerdos-1_Mesa-de-trabajo-1.jpg',
}
const imageBackgroundChicken = {
  uri: 'https://t2.ea.ltmcdn.com/es/images/7/6/3/donde_y_cuanto_vive_una_gallina_24367_600.jpg'
}
const imageBackgroundHorses = {
  uri: 'https://www.caracteristicas.co/wp-content/uploads/2017/02/caballo-2-e1561604547982.jpg'
}
const imageBackgroundCows = {
  uri: 'https://share.america.gov/wp-content/uploads/2019/05/shutterstock_533100223.jpg'
}

class EnvironmentEditProfile extends React.Component {

  state = {
    form:{
      environment_type:0
    },
    token:'',
    loading:false,
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    let token = await UserSession.instance.getToken(user.username)
    this.setState({ token:token })
  }

  handleSubmit = async () => {
    const {form, token} = this.state
    const {item} = this.props.route.params
    this.setState({loading:true})
    console.log(item.id)
    if (form.environment_type == 0){
      form.environment_type = item.environment_type
    }
    try {
      let response = await UserSession.instance.editEnvironment(
        item.id,
        token,
        form
      )
      console.log(response)
      this.setState({loading:false})
      this.props.navigation.replace("EnvironmentHome")
    } catch (error) {
      console.log("submit data environment edit error", error)
    }
  }

  handleDelete = () => {
    const {token} = this.state
    const {item} = this.props.route.params
    Alert.alert('¿Estás seguro?',
      `¿Seguro que quieres eliminar el ambiente ${item.environment_name}?\n\nEste proseso no puede ser revertido.`,
      [
        {
          text:'Cancelar',
          style:'cancel',
        },
        {
          text:'Eliminar',
          onPress: async () =>{
            this.setState({loading:true})
            response = await UserSession.instance.deleteEnvironment(
              item.id,
              token,
            )
            console.log(response)
            this.props.navigation.replace('EnvironmentHome')
          },
          style:'destructive',
        }
      ],
      {
        cancelable:true,
      }
    )
  }
  
  render(){
    const {form, loading} = this.state
    const {item} = this.props.route.params
    if (loading === true){
      return <Loader/>
    }
    return(
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          {
            item.environment_type == 1 ? <ImageBackground style={styles.header} source={imageBackgroundChicken}/>
            : (item.environment_type == 2 ? <ImageBackground style={styles.header} source={imageBackgroundPigs}/>
              : (item.environment_type == 3 ? <ImageBackground style={styles.header} source={imageBackgroundHorses}/>
                : <ImageBackground style={styles.header} source={imageBackgroundCows}/>))
          }
        </View>
        <View style={styles.formContent}>
          <View style={styles.title}><Text style={styles.titleText}>Llena los campos que quieres actualizar</Text></View>
          <View style={styles.form}>
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
              />
          </View>
          <View style={styles.butonsContainers}>
            <TouchableOpacity style={styles.settings} onPress={this.handleSubmit}>
              <Text style={styles.settingsText}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteIconContainer} onPress={this.handleDelete}>
              <Image style={styles.deleteIcon} source={require('../../assets/delete.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    
  },
  header: {
    width:'100%',
    height:230,
    flex:2
  },

  formContent:{
    flex:3,
    marginHorizontal:50,
    top:-80,
    marginBottom:10,
    borderRadius:10,
    minHeight:200,
  },
  title:{
    width:'100%',
    marginBottom:2,
    backgroundColor:'#471B03',
    alignItems:'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignContent:'center'
  },
  form:{
    width:'100%',
    backgroundColor:'#7E6659',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingBottom:40,
  },
  titleText: {
    color:Colors.white,
    fontSize:28,
    fontWeight:'bold',
    marginVertical:28,
    alignSelf:'center'
  },
  settings:{
    width:'50%',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:Colors.green,
    marginHorizontal:10,
  },
  settingsText:{
    fontSize:30,
    margin:5,
    color:Colors.white,
    textAlign:'center'
  },
  settingsRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
  labels: {
    color:Colors.white,
    alignSelf:'center',
    marginBottom:20,
    marginTop:20,
    fontSize:25,
    minWidth:150,
    fontWeight:'bold'
  },
  input:{
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.blackPearl,
    backgroundColor:Colors.white,
    marginHorizontal:30,
  },
  picker:{
    height: 50, 
    width: "100%",
    color: Colors.blackPearl,
    alignSelf: 'center',
    fontSize: 15,
  },
  pickerContainer:{
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.blackPearl,
    backgroundColor:Colors.white,
    marginHorizontal:30,
  },
  list: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 10,
  },
  deleteIcon: {
    height:35,
    width:35,
    marginHorizontal:10,
  },
  butonsContainers:{
    flexDirection:'row',
    marginTop:20,
    alignSelf:'center'
  },
  deleteIconContainer: {
    height:36,
    marginTop:5
  }
})

export default EnvironmentEditProfile