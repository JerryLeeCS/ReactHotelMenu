import { HOTELS_URL } from './endpoints.js';
import axios from 'axios'

export default async () => {

  const config = {
    method: 'GET',
    url: HOTELS_URL,
    json: true,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'}
  }
  console.log('config ', config)
  try {
    const result = await axios(config)
    if(result.data){
      return result.data.list
    } else {
      return []
    }
  } catch (err) {
    return {err}
  }
}