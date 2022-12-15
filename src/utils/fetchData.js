import axios from '../axios'

export const fetchData = async page => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos?${page}`)
        return response.data
    } catch (e) {
        console.log('Error: ', e)
    }
}
