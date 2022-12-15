import axios from 'axios'

export const fetchData = async page => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos?${page}`, {
            headers : {
                Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
            }
        })
        return response.data
    } catch (e) {
        console.log('Error: ', e)
    }
}
