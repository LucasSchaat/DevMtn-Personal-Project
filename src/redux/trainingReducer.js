import axios from 'axios'
import { SAVE_CATEGORIES } from './actionTypes'

const initialState = {
    categories: {}
}

export const saveCategories = (
    firstCategory,
    secondCategory,
    thirdCategory,
    fourthCategory,
    fifthCategory,
    sixthCategory,
    outcome
) => {
    let categories = {
        firstCategory,
        secondCategory,
        thirdCategory,
        fourthCategory,
        fifthCategory,
        sixthCategory,
        outcome
    }
    return {
        type: SAVE_CATEGORIES,
        payload: categories 
    }
}

export default function (state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case SAVE_CATEGORIES:
            return { ...state, categories: payload}
        default:
            return state
    }
}