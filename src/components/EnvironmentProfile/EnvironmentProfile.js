import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../res/Colors'
import Http from '../../libs/http'
import variables from './EnvironmentVariables'

const imageBackground = {
  uri: 'https://actualidadporcina.com/wp-content/uploads/2020/03/imagen-destacada-texto-cerdos-1_Mesa-de-trabajo-1.jpg',
}

class EnvironmentProfile extends React.Component {

  state = {
    loading: false,
    environment: {},
    environment_type:2,
    measurements: {"airQuality":"","food": "0","temp": "0","humidity":"0"}
  }

  componentDidMount() {
    this.getEnvironment()
    this.fetchdata()
    this.focusEvent()
    this.blurEvent()
  }

  getEnvironment = () => {
    const {item} = this.props.route.params
    this.setState({environment:item, envionment_type:item.envionment_type})
    this.props.navigation.setOptions({title:item.environment_name})
    
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
    const {environment} = this.state
    this.setState({ loading: true })
    let arduino_id = environment.arduino_id
    let response = await Http.instance.get_measurements(arduino_id)
    console.log(response)
    this.setState({ loading: false, measurements: response })
  }

  handlePress = () => {
    this.props.navigation.navigate('EnvironmentSettings')
  }

  render() {
    const {measurements, environment} = this.state
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.header} source={imageBackground}/>
          <View style={styles.infoContent}>
            <View style={styles.title}><Text style={styles.titleText}>Pigs Environment</Text></View>
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

                {measurements.airQuality == "Mala" ? 
                <Text style={styles.infoWarning}>{measurements.airQuality}</Text>
                : <Text style={styles.infoData}>{measurements.airQuality}</Text>}

                {measurements.food == 0 ? <Text style={styles.infoWarning}>{measurements.food} Kg</Text>
                : <Text style={styles.infoData}>{measurements.food} Kg</Text>}

              </View>
            </View>
            <TouchableOpacity style={styles.settings} onPress={this.handlePress}>
              <Text style={styles.settingsText}>Opciones</Text>
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
  infoData:{
    color:Colors.white,
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
})

export default EnvironmentProfile