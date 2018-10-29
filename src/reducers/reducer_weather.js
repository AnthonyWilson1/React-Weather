import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action) {
    console.log('Action called:',action)
    switch (action.type) {
        case FETCH_WEATHER:
        return [action.payload.data, ...state ];
    }
    return state;
}