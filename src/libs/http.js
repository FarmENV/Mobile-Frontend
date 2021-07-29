import URLS from './url'

class Http {
  static instance = new Http()
  get_all = async () => {
    try {
      let request = await fetch(`${URLS.sensors_url}/all/`)
      let response = await request.json()
      return response
    } catch (error) {
      console.log('HTTP get all method error', error)
      throw Error(error)
    }
  }
  get = async sensorId => {
    try {
        let request = await fetch(`${URLS.sensors_url}/_id:${sensorId}/`)
        let response = await request.json()
        return response
    } catch (error) {
        console.log('HTTP get method error', error)
        throw Error(error)
    }
  }
}

export default Http