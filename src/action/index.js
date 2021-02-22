import axios from 'axios'
import { API } from '../config'

export const GET_VIDEO_BY_NAME = 'GET_VIDEO_BY_NAME'

export function getVideoByName(name){
    const url = API + 'q='+ name
    const request = axios.get(url)
    console.log(request)
    return{
        type:GET_VIDEO_BY_NAME,
        payload:request
    }
}
