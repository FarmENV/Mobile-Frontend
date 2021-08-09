import React from 'react'
import Colors from '../../res/Colors'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'

class EnvironmentItem extends React.Component {
  render(){
    const {item} = this.props
    return(
      <View style = {styles.itemContainer}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style = {styles.textItem}>{item.environment_name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer:{
    backgroundColor:Colors.green,
    marginHorizontal:20,
    marginVertical:10,
    padding:20,
    borderRadius:10,
  },
  textItem: {
    fontSize:30,
    alignSelf:'center',
    color:Colors.white
  }
})

export default EnvironmentItem