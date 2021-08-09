import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
  static instance = new Storage()

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key,value)
      return true
    } catch (error) {
      console.log('Storage store error', error)
      return false
    }
  }

  get = async key => {
    try {
      return await AsyncStorage.getItem(key)
    } catch (error) {
      console.log('Storage get error', error)
      throw Error(error)
    }
  }

  multiGet = async keys => {
    try {
      return await AsyncStorage.multiGet(keys)
    } catch (error) {
      console.log('Storage multiget error', error)
      throw Error(error)
    }
  }

  multiRemove = async keys =>{
    try {
      await AsyncStorage.multiRemove(keys)
      return true
    } catch (error) {
      console.log('Multiremove error', error)
      return false
    }
  }

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys()
    } catch (error) {
      console.log('Storage getAllKeys error', error)
      throw Error(error)
    }
  }

  remove = async key => {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (error) {
      console.log('Storage remove error', error)
      throw Error(error)
    }
  }
}

export default Storage