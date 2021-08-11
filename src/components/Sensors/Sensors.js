import React from 'react'
import {Image, Text, View, StatusBar, FlatList, TouchableOpacity} from 'react-native'
import styles from './Style.js'
import Loader from '../Generics/Loader'
import SensorItem from './SensorItem.js'
import Http from '../../libs/http'

class Sensors extends React.Component{
  
  state = {
    loading: false,
    sensors: undefined,
    sensorsCopy: undefined, 
  }

  handlePress() {

  }

  componentDidMount() {
    this.fetchdata()
    this.focusEvent()
    this.blurEvent()
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
    this.setState({ loading: true })
    let response = await Http.instance.get_all()
    this.setState({ loading: false, sensors: response, sensorsCopy: response })
  }

  componentWillUnmount() {
    this.focusListener()
    this.blurListener()
  }

  render(){
    const {sensors,loading} = this.state
    if(loading==true && !sensors){
      return(
        <Loader/>
      )
    }
    return(
      <View style={[styles.containerList, styles.horizontal]}>
        <Text style={styles.tituloSensores}>Estos son los sensores que incluye nuestro kit:</Text>
        <FlatList
          style={styles.list}
          data={sensors}
          renderItem={({item}) => (
            <SensorItem key = {item._id} item={item} onPress={() => this.handlePress()}/>
          )}
          keyExtractor={(item,index) => index.toString()}
        />
        <TouchableOpacity style={styles.buttonSmall}><Text style={styles.buttonText}>Obtén tu kit</Text></TouchableOpacity>
      </View>
    )
  }
}

export default Sensors