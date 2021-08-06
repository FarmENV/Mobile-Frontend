import {StyleSheet} from 'react-native'
import Colors from '../../res/Colors'

const styles = StyleSheet.create({
  container:{
    marginVertical:50,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  },
  image:{
    width:250,
    height:250,
    borderRadius:200,
    borderColor:Colors.green,
    borderWidth:5,
    alignSelf:'center',
    marginBottom:20,
    resizeMode: 'cover',
  },
  button:{
    marginVertical:20,
    alignSelf:'center',
    width: 250,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:Colors.green,
  },
  buttonText:{
    fontSize:25,
    margin:10,
    color:Colors.white,
    textAlign:'center',
  },
  help:{
    height:25,
    width:25
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
  subtitlesContainer:{
    height:102,
    width:'100%',
    marginBottom:2,
    backgroundColor:'#471B03',
    alignItems:'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  subtitlesContainer2:{
    height:102,
    width:'100%',
    marginBottom:2,
    backgroundColor:'#471B03',
    alignItems:'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  formContainer:{
    flex:2,
    marginHorizontal:50,
    marginTop:15,
    marginBottom:20,
    borderRadius:10,
  },
  form:{
    width:'100%',
    backgroundColor:'#7E6659',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:'column',
    justifyContent:'space-between',
    paddingBottom:40,
  },
  subtitle:{
    height:'20%',
    width:'100%',
    marginBottom:2,
    backgroundColor:'#7E6659',
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
  input:{
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.blackPearl,
    backgroundColor:Colors.white,
    marginHorizontal:30,
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
})

export default styles