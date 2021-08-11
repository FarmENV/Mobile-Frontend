import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Colors from '../../res/Colors'
import Http from '../../libs/http'
import variables from './EnvironmentVariables'
import Loader from '../Generics/Loader'
import UserSession from '../../libs/sessions'

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

class EnvironmentProfile extends React.Component {

  state = {
    loading: false,
    environment: {},
    environment_type:2,
    measurements: {"airQuality":"","food": "0","temp": "0","humidity":"0"},
    not_found:false,
    shown:false,
    token: ''
  }

  componentDidMount() {
    this.fetchdata()
    this.focusEvent()
    this.blurEvent()
  }

  getEnvironment = async () => {
    const {item} = this.props.route.params
    this.setState({environment:item, environment_type:item.environment_type})
    this.props.navigation.setOptions({title:item.environment_name})
    
    let user = await UserSession.instance.getUser()
    let token = await UserSession.instance.getToken(user.username)
    this.setState({ token:token })
  }

  focusEvent = () => {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setFetchInterval()
    })
  }

  blurEvent = () => {
    this.blurListener = this.props.navigation.addListener('blur', () => {
      clearInterval(this.interval)
    })
  }

  setFetchInterval = () =>{
    this.interval = setInterval(this.fetchdata,3000)
  }

  fetchdata = async () => {
    this.setState({ loading: true})
    await this.getEnvironment()
    const {environment, not_found} = this.state
    let arduino_id = environment.arduino_id
    let response = await Http.instance.get_measurements(arduino_id)
    
    if (response.status){
      if (not_found == false){
        console.log("ola")
        this.setState({not_found:true})
      }
    } else {
      
      this.setState({not_found:false})
      
    }
    this.setState({ loading: false, measurements: response })
  }

  handlePress = () => {
    const {item} = this.props.route.params
    this.props.navigation.replace('EnvironmentEditProfile', {item})
  }

  handleDeleteOrEdit = () => {
    const {token, shown} = this.state
    const {item} = this.props.route.params
    if (!shown) {
      Alert.alert('¡Este sistema no tiene datos!',
        `El sistema con id: ${item.arduino_id} no tiene datos registrados.\n\nPuedes cambiar su id o eliminarlo.`,
        [
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
          },
          {
            text:'Cambiar id',
            onPress: async () =>{
              const {item} = this.props.route.params
              this.props.navigation.replace('EnvironmentEditProfile', {item})
            },
            style:'default',
          }
        ],
      )
      this.setState({shown:true})
    }
  }

  render() {
    const {measurements, environment, loading, not_found} = this.state
    if (loading === true && !measurements){
      return <Loader/>
    }
    return(
      <View style={styles.container}>
        {
          not_found ? this.handleDeleteOrEdit() : null
        }
        <View style={styles.content}>
          {
            environment.environment_type == 1 ? <Image style={styles.header} source={imageBackgroundChicken}/>
            : (environment.environment_type == 2 ? <Image style={styles.header} source={imageBackgroundPigs}/>
              : (environment.environment_type == 3 ? <Image style={styles.header} source={imageBackgroundHorses}/>
                : <Image style={styles.header} source={imageBackgroundCows}/>))
          }
          <View style={styles.infoContent}>
            <View style={styles.title}><Text style={styles.titleText}>{environment.environment_name}</Text></View>
            <View style={styles.info}>
              <View>
                <Text style={styles.infoHeader}>Humedad:</Text>
                <Text style={styles.infoHeader}>Temperatura:</Text>
                <Text style={styles.infoHeader}>Calidad de aire:</Text>
                <Text style={styles.infoHeader}>Comida:</Text>
              </View>
              <View>
                {environment.environment_type == 1 ? (parseFloat(measurements.humidity) >= variables.maxVariables.chicken.humidity || 
                parseFloat(measurements.humidity) <= variables.minVariables.chicken.humidity ? 
                <Text style={styles.infoWarning}>{measurements.humidity}%</Text>
                : <Text style={styles.infoData}>{measurements.humidity}%</Text>) 
                : environment.environment_type == 2 ? (parseFloat(measurements.humidity) >= variables.maxVariables.pigs.humidity || 
                parseFloat(measurements.humidity) <= variables.minVariables.pigs.humidity ? 
                <Text style={styles.infoWarning}>{measurements.humidity}%</Text>
                : <Text style={styles.infoData}>{measurements.humidity}%</Text>) 
                : environment.environment_type == 3 ? (parseFloat(measurements.humidity) >= variables.maxVariables.horses.humidity || 
                parseFloat(measurements.humidity) <= variables.minVariables.horses.humidity ? 
                <Text style={styles.infoWarning}>{measurements.humidity}%</Text>
                : <Text style={styles.infoData}>{measurements.humidity}%</Text>) 
                : (parseFloat(measurements.humidity) >= variables.maxVariables.cows.humidity || 
                parseFloat(measurements.humidity) <= variables.minVariables.cows.humidity ? 
                <Text style={styles.infoWarning}>{measurements.humidity}%</Text>
                : <Text style={styles.infoData}>{measurements.humidity}%</Text>) }

                {environment.environment_type == 1 ? (parseFloat(measurements.temp) >= variables.maxVariables.chicken.temp || 
                parseFloat(measurements.temp) <= variables.minVariables.chicken.temp ? 
                <Text style={styles.infoWarning}>{measurements.temp}°C</Text>
                : <Text style={styles.infoData}>{measurements.temp}°C</Text>) 
                : environment.environment_type == 2 ? (parseFloat(measurements.temp) >= variables.maxVariables.pigs.temp || 
                parseFloat(measurements.temp) <= variables.minVariables.pigs.temp ? 
                <Text style={styles.infoWarning}>{measurements.temp}°C</Text>
                : <Text style={styles.infoData}>{measurements.temp}°C</Text>) 
                : environment.environment_type == 3 ? (parseFloat(measurements.temp) >= variables.maxVariables.horses.temp || 
                parseFloat(measurements.temp) <= variables.minVariables.horses.temp ? 
                <Text style={styles.infoWarning}>{measurements.temp}°C</Text>
                : <Text style={styles.infoData}>{measurements.temp}°C</Text>) 
                : (parseFloat(measurements.temp) >= variables.maxVariables.cows.temp || 
                parseFloat(measurements.temp) <= variables.minVariables.cows.temp ? 
                <Text style={styles.infoWarning}>{measurements.temp}°C</Text>
                : <Text style={styles.infoData}>{measurements.temp}°C</Text>) }

                {measurements.airQuality == "Buena" ? 
                <Text style={styles.infoGood}>{measurements.airQuality}</Text>
                : ( measurements.airQuality == "Regular" ? <Text style={styles.infoRegular}>{measurements.airQuality}</Text>
                : (measurements.airQuality == "Mala" ? <Text style={styles.infoBad}>{measurements.airQuality}</Text>
                : <Text style={styles.infoWarning}>{measurements.airQuality}</Text>))}

                {measurements.food == 0 ? <Text style={styles.infoWarning}>{measurements.food} Kg</Text>
                : <Text style={styles.infoData}>{measurements.food} Kg</Text>}

              </View>
            </View>
            <TouchableOpacity style={styles.settings} onPress={this.handlePress}>
              <Text style={styles.settingsText}>Modificar</Text>
            </TouchableOpacity>
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
  content: {
    flex:2,
  },
  infoContent:{
    flex:2,
    marginHorizontal:50,
    marginTop:70,
    marginBottom:40,
    borderRadius:10,
  },
  title:{
    height:'20%',
    width:'100%',
    marginBottom:2,
    backgroundColor:'#471B03',
    alignItems:'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  info:{
    width:'100%',
    backgroundColor:'#7E6659',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:40,
  },
  titleText: {
    color:Colors.white,
    fontSize:25,
    fontWeight:'bold',
    marginVertical:28,
  },
  infoHeader: {
    color:Colors.white,
    marginTop:15,
    fontSize:25,
    marginLeft: 20,
  },
  settings:{
    marginVertical:30,
    marginHorizontal:80,
    width:'50%',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:Colors.green
  },
  settingsText:{
    fontSize:30,
    margin:5,
    
    color:Colors.white,
    textAlign:'center'
  },
  infoData:{
    color:Colors.white,
    marginTop:15,
    fontSize:25,
    marginRight: 20,
  },
  infoGood:{
    color:Colors.white,
    marginTop:15,
    fontSize:25,
    marginRight: 20,
  },
  infoRegular:{
    color:'#fff033',
    marginTop:15,
    fontSize:25,
    marginRight: 20,
  },
  infoBad:{
    color:'#e67e22',
    marginTop:15,
    fontSize:25,
    marginRight: 20,
  },
  infoWarning:{
    color:Colors.red,
    marginTop:15,
    fontSize:25,
    marginRight: 20,
  },
})

export default EnvironmentProfile