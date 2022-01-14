import axios from 'axios'

const API_KEY = 'https://scba-e5689-default-rtdb.asia-southeast1.firebasedatabase.app'

export const Api = {
    get: (endPoint , params = '') => {
        return axios.get(`${API_KEY}/${endPoint}${params}.json` , {
            headers: {
                'Content-type': 'application/json'
            }
        })
    }
}