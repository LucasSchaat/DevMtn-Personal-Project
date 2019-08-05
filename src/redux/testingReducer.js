import { SAVE_TESTING_DATA, RUN_MODEL, LOGOUT_REDUX_2 } from './actionTypes'
import axios from 'axios';

const initialState = {
    testingData: [{}],
    result: [],
    error: false
}

export function runModel (
    trainingCategories
) {
    let data = axios
        .post('/api/run', {trainingCategories})
        .then(res => res.data)
    return {
        type: RUN_MODEL,
        payload: data
    }
}

export const logout = (initialState) => {
    return {
        type: LOGOUT_REDUX_1,
        payload: initialState
    }
}

export function saveTestingData (
    trainingCategories,
    firstCategoryValue,
    secondCategoryValue,
    thirdCategoryValue,
    fourthCategoryValue,
    fifthCategoryValue,
    sixthCategoryValue
) {
    let data = axios
        .post('/api/save_testing_data', {
            trainingCategories,
            firstCategoryValue,
            secondCategoryValue,
            thirdCategoryValue,
            fourthCategoryValue,
            fifthCategoryValue,
            sixthCategoryValue
        })
        .then(res => res.data)
    return {
        type: SAVE_TESTING_DATA,
        payload: data
    }
}

export default function (state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case SAVE_TESTING_DATA + '_FULFILLED':
            return { ...state, testingData: payload, error: false }
        case SAVE_TESTING_DATA + '_REJECTED':
            return { ...state, error: payload }
        case RUN_MODEL + '_FULFILLED':
            return { ...state, result: payload, error: false }
        case RUN_MODEL + '_REJECTED':
            return { ...state, error: payload }
        case LOGOUT_REDUX_1 + '_FULFILLED':
            return { state: payload }
        default:
            return state
    }
}