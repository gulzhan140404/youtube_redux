import {GET_VIDEO_BY_NAME} from '../action'

export default function(state=[], action){
    switch(action.type){
        case GET_VIDEO_BY_NAME:
            return [action.payload]
    }
    return state
}
