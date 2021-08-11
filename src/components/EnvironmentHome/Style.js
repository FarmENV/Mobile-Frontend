import {StyleSheet} from 'react-native'
import Colors from '../../res/Colors'

const styles = StyleSheet.create({
  envButton:{
    marginVertical:10,
    alignSelf:'center',
    width: 350,
    borderWidth:1,
    borderRadius:15,
    backgroundColor:Colors.green,
  },
  envButtonText:{
    fontSize:25,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  createButton:{
    marginVertical:25,
    alignSelf:'center',
    width: 250,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:Colors.buttonBrown,
  },
  createButtonText:{
    fontSize:20,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  Tittle:{
    fontSize:30,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  tittleContainer:{
    width: 300,
    marginVertical:25,
    marginBottom:25,
    backgroundColor:'#471B03',
    alignSelf:'center',
    borderRadius:10,
  },
  container:{
    marginVertical:50,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  },
  formContainer:{
    flex:2,
    marginHorizontal:50,
    marginTop:15,
    marginBottom:20,
    borderRadius:50,
  },
  subtitlesContainer:{
    height:102,
    width:'100%',
    marginBottom:2,
    backgroundColor:'#471B03',
    alignItems:'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  titleText: {
    color:Colors.white,
    fontSize:28,
    fontWeight:'bold',
    marginVertical:28,
  },
  form:{
    width:'100%',
    backgroundColor:'#7E6659',
    opacity: 0.8,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:'column',
    justifyContent:'space-between',
    paddingBottom:40,
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
  buttonText:{
    fontSize:25,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  buttonSmall:{
    marginVertical:28,
    marginTop:35,
    alignSelf:'center',
    width: 150,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:Colors.green,
  },
  imageContainer: {
    flex:1,
    flexDirection:'column',
  },
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
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
  warning:{
    padding:20,
    marginBottom:20,
    marginTop:20,
    backgroundColor:"#C14242",
    borderRadius:10,
    flex:1,
  },
  warningText:{
    color:Colors.white
  },
})

export default styles