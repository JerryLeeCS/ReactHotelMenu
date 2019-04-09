import { HOTELS_URL, BASE_URL } from './endpoints.js';
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
      //populate the images' urls
      result.data.media[0].href = BASE_URL + result.data.media[0].href
      result.data.media[1].href = BASE_URL + result.data.media[1].href
      return result.data
    } else {
      return null
    }
  } catch (err) {
    return {err}
  }
}