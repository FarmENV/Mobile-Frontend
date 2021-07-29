import React from 'react'
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native'
import styles from './Style'

const imageBackground = {
  uri: 'https://actualidadporcina.com/wp-content/uploads/2020/03/imagen-destacada-texto-cerdos-1_Mesa-de-trabajo-1.jpg',
}

class EnvironmentSettings extends React.Component {

  handlePress = () => {
    
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.header} source={imageBackground}/>
          <View style={styles.infoContent}>
            <View style={styles.title}><Text style={styles.titleText}>Pigs Environment</Text></View>
            <View style={styles.info}>
              <View style={styles.settingsRow}>
                <Text style={styles.infoHeader2}></Text>
                <Text style={styles.infoInputHeader}>Max.</Text>
                <Text style={styles.infoInputHeader}>Min.</Text>
              </View>
              <View style={styles.settingsRow}>
                <Text style={styles.infoHeader}>Humidity:</Text>
                <TextInput 
                  style={styles.infoInput}
                />
                <TextInput 
                  style={styles.infoInput}
                />
              </View>
              <View style={styles.settingsRow}>
                <Text style={styles.infoHeader}>Temperature:</Text>
                <TextInput 
                  style={styles.infoInput}
                />
                <TextInput 
                  style={styles.infoInput}
                />
              </View>
              <View style={styles.settingsRow}>
                <Text style={styles.infoHeader}>Air quality:</Text>
                <TextInput 
                  style={styles.infoInput}
                />
                <TextInput 
                  style={styles.infoInput}
                />
              </View>
              <View style={styles.settingsRow}>
                <Text style={styles.infoHeader}>Food:</Text>
                <TextInput 
                  style={styles.infoInput}
                />
                <TextInput 
                  style={styles.infoInput}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.settings} onPress={this.handlePress}>
              <Text style={styles.settingsText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default EnvironmentSettings