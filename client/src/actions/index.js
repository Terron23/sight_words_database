import axios from 'axios'
import {FETCH_WORDS} from './types'

export const fetchWords = () => async dispatch => {
const res = await axios.get('/api/sight_words');
console.log(res.data)
dispatch({type: FETCH_WORDS, payload: res.data})
    }