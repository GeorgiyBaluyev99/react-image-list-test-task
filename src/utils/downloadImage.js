import axios from '../axios'
import { saveAs } from 'file-saver'

export const downloadImage = async (url, downloadUrl, id) => {
    try {
        await axios.get(downloadUrl)
        saveAs(url, id)
    } catch (e) {
        console.log('Download Error: ', e)
    }
}
