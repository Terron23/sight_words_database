import { FETCH_WORDS } from '../actions/types'

export default function(states = null, action){
    switch(action.type){
        case FETCH_WORDS:
        return action.payload || false

        default:
        return states;
    }

}