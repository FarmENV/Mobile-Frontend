import {StyleSheet} from 'react-native'
import Colors from '../../res/Colors'

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
    paddingBottom:40,
  },
  titleText: {
    color:Colors.white,
    fontSize:28,
    fontWeight:'bold',
    marginVertical:28,
  },
  infoHeader: {
    color:Colors.white,
    marginBottom:20,
    fontSize:20,
    marginLeft: 20,
    minWidth:150,
  },
  infoHeader2: {
  
    marginLeft: 20,
    minWidth:150,
  },
  infoInput:{
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.blackPearl,
    backgroundColor:Colors.white,
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
  settingsRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
  infoInputHeader: {
    color:Colors.white,
    fontSize:18,
    marginRight:28
  }
})

export default styles