import { StyleSheet } from "react-native"
import Colors from '../../res/Colors'

const styles = StyleSheet.create({
  containerList:{
    flex:1,
    flexDirection:"column",
  },
  horizontal:{
    justifyContent:"space-around",
    alignItems:"center",
  },
  tituloSensores:{
    fontSize:25,
    marginTop:20,
    fontWeight:"bold",
  },
  loader: {
    height: '100%',
    paddingHorizontal: 10,
  },
  list: {
    width: '100%',
    paddingHorizontal: 10,
  },
  container:{
    flex:1,
    backgroundColor:Colors.brown,
    borderRadius:8,
    marginVertical:20,
  },
  row:{
    flexDirection:"row",
  },
  sensorImage:{
    height:"auto",
    width:"auto",
    minHeight:90,
    minWidth:90,
    resizeMode:"cover",
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    borderWidth:2,
    borderColor:Colors.brown,
  },
  sensorData:{
    marginRight:110,
  },
  sensorName:{
    color:Colors.white,
    fontSize:25,
    fontWeight:"bold",
    marginRight:20,
  },
  sensorInfo:{
    color:Colors.white,
    
    fontSize:14.5,
    marginBottom:5,
  },
  separator:{
    backgroundColor:Colors.green,
    width:5,
    marginRight:8,
    borderColor:Colors.brown,
  }
})

export default styles