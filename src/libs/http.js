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

  get_measurements = async arduino_id => {
    try {
      let request = await fetch(`${URLS.sensors_url}/system/${arduino_id}`)
      let response = await request.json()
      return response
    }catch (error) {
      console.log('HTTP get measurements method error', error)
      throw Error(error)
    }
  }

  remove = async id => {
    try {
        let request = await fetch(`${URLS.sensors_url}/del/${id}/`,{
            method:'DELETE',
        })
        let response = await request.json()
        return response
    } catch (err) {
        console.log('HTTP delete method error', err)
        throw Error(err)
    }
}
}

export default Http