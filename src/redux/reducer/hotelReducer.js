import { SET_HOTELS, SET_FAVORITES } from '../actionTypes'

const initialState = {hotels: [], favorites: []}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOTELS:
            return {
                ...state, 
                hotels: action.payload
            }
        default:
            return state
    }
}

export default reducer;