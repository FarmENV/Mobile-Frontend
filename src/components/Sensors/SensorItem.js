import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './Style'

class SensorItem extends React.Component{
  render() {
    const { item } = this.props
    return(
      <View style={styles.container}>
        
          <View style={styles.row}>
            <Image style={styles.sensorImage} source={{uri: `${item.img_url}`}}/>
            <View style={styles.separator}></View>
            <View style={styles.sensorData}>
              <Text style={styles.sensorName}>{item.name}</Text>
              <Text style={styles.sensorInfo}>{item.description}</Text>
            </View>
          </View>
        
      </View>
    )
  }
}

export default SensorItem