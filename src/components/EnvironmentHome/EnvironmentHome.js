import React from 'react'
import {Text, TouchableOpacity, View, ScrollView, FlatList} from 'react-native'
import styles from './Style'
import UserSession from '../../libs/sessions'
import EnvironmentItem from './EnvironmentItem'
import Loader from '../Generics/Loader'


class EnvironmentHome extends React.Component {

  state = {
    user:undefined,
    form:{},
    loading:false,
    envs: undefined,
    loading:false,
    has_env:true
  }

  componentDidMount() {
    this.fetchdata()
    this.getUserData()

  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    console.log(user.id)
    let farmer_id = user.id
    this.setState({ form:{farmer_id} })
  }

  fetchdata = async () => {
    const {form,} = this.state
    this.setState({ loading: true })
    let response = await UserSession.instance.getEnvironments(form)
    console.log(response)
    this.setState({ loading: false, envs:response })
  }

  handleEnvironment = item => {
    this.props.navigation.navigate("EnvironmentProfile", {item})
  }
  handleCreateEnvironment = () => {
    this.props.navigation.navigate("NewEnvironment")
  }

  render(){
    const {envs, form, loading, has_env} = this.state
    if(loading===true){
      return(
        <Loader/>
      )
    }
    return(
      
      <View style={styles.container}>
        <View style={styles.tittleContainer}><Text style={styles.Tittle}> Tus ambientes </Text></View>
        <FlatList
          style={styles.list}
          data={envs}
          renderItem={({ item }) => (
            item.farmer_id == form.farmer_id ?
            <EnvironmentItem key={item._id} item={item} onPress={() => this.handleEnvironment(item)}/>
              : null
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.createButton} onPress={this.handleCreateEnvironment}>
          <Text style={styles.createButtonText}>Crear nuevo ambiente</Text>
        </TouchableOpacity>
      </View>
      
    )
  }
}

export default EnvironmentHome