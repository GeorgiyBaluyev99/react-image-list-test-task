import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`

export default axios
