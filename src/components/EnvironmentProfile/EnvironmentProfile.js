import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../res/Colors'

const imageBackground = {
  uri: 'https://actualidadporcina.com/wp-content/uploads/2020/03/imagen-destacada-texto-cerdos-1_Mesa-de-trabajo-1.jpg',
}

class EnvironmentProfile extends React.Component {

  handlePress = () => {
    this.props.navigation.navigate('EnvironmentSettings')
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.header} source={imageBackground}/>
          <View style={styles.infoContent}>
            <View style={styles.title}><Text style={styles.titleText}>Pigs Environment</Text></View>
            <View style={styles.info}>
              <View>
                <Text style={styles.infoHeader}>Humidity:</Text>
                <Text style={styles.infoHeader}>Temperature:</Text>
                <Text style={styles.infoHeader}>Air quality:</Text>
                <Text style={styles.infoHeader}>Food:</Text>
              </View>
              <View>
                <Text style={styles.infoData}>20%</Text>
                <Text style={styles.infoData}>30°C</Text>
                <Text style={styles.infoData}>Good</Text>
                <Text style={styles.infoData}>2Kg</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.settings} onPress={this.handlePress}>
              <Text style={styles.settingsText}>Settings</Text>
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