import { HOTELS_URL } from './endpoints.js';
import axios from 'axios'

export default async (hotelTag) => {

  const config = {
    method: 'GET',
    url: `${HOTELS_URL}/${hotelTag}`,
    json: true
  }

  try {
    const result = await axios(config)
    if(result.data){
      return result.data
    } else {
      return null
    }
  } catch (err) {
    return {err}
  }
}