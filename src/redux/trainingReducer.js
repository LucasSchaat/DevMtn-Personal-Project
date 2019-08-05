import axios from 'axios'
import {
    SAVE_CATEGORIES,
    GET_DATA,
    SAVE_DATA,
    EDIT_DATA,
    DELETE_DATA,
    LOGOUT_REDUX_1
} from './actionTypes'

const initialState = {
    categories: {
        firstCategory: '',
        secondCategory: '',
        thirdCategory: '',
        fourthCategory: '',
        fifthCategory: '',
        sixthCategory: ''
    },
    trainingData: [],
    error: false
}

export const saveCategories = (
    dataImports,
    outcome,
    firstCategory,
    secondCategory,
    thirdCategory,
    fourthCategory,
    fifthCategory,
    sixthCategory,
    firstOutcome,
    secondOutcome
    ) => {
        let categories = {
            dataImports,
            outcome,
            firstCategory,
            secondCategory,
        thirdCategory,
        fourthCategory,
        fifthCategory,
        sixthCategory,
        firstOutcome,
        secondOutcome
    }
    return {
        type: SAVE_CATEGORIES,
        payload: categories 
    }
}

export const firstReduxLogout = () => {
    return {
        type: LOGOUT_REDUX_1,
        payload: initialState
    }
}

export function getData() {
    let data = axios.get('/api/training_data').then(res => res.data)
    return {
        type: GET_DATA,
        payload: data
    }
}

export function deleteData (id) {
    let data = axios.delete(`/api/delete/${id}`).then(res => res.data)
    return {
        type: DELETE_DATA,
        payload: data
    }
}

export function saveData(
    dataImports,
    trainingCategories,
    outcomeValue,
    firstCategoryValue,
    secondCategoryValue,
    thirdCategoryValue,
    fourthCategoryValue,
    fifthCategoryValue,
    sixthCategoryValue,
    firstOutcome,
    secondOutcome
) {
    let data = axios
        .post('/api/save_data',{
            dataImports,
            trainingCategories,
            outcomeValue,
            firstCategoryValue,
            secondCategoryValue,
            thirdCategoryValue,
            fourthCategoryValue,
            fifthCategoryValue,
            sixthCategoryValue,
            firstOutcome,
            secondOutcome
        })
        .then(res => res.data)
    return {
        type: SAVE_DATA,
        payload: data
    }
}

export function editData (
    reference_id,
    id,
    trainingCategories,
    newOutcomeValue,
    newFirstCategoryValue,
    newSecondCategoryValue,
    newThirdCategoryValue,
    newFourthCategoryValue,
    newFifthCategoryValue,
    newSixthCategoryValue
) {
    let data = axios
        .put(`/api/edit_data/${id}`, {
            reference_id,
            trainingCategories,
            newOutcomeValue,
            newFirstCategoryValue,
            newSecondCategoryValue,
            newThirdCategoryValue,
            newFourthCategoryValue,
            newFifthCategoryValue,
            newSixthCategoryValue
        })
        .then(res => res.data)
    return {
        type: EDIT_DATA,
        payload: data
    }
}

export default function (state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case SAVE_CATEGORIES:
            return { ...state, categories: payload}
        case GET_DATA + '_PENDING':
            console.log('getData request pending on reducer')
            return { ...state}
        case GET_DATA + '_FULFILLED':
            return { ...state, trainingData: payload, error: false }
        case GET_DATA + '_REJECTED':
            return { ...state, error: payload}
        case SAVE_DATA + '_FULFILLED':
            return { ...state, trainingData: payload, error: false }
        case SAVE_DATA + '_REJECTED':
            return { ...state, error: payload }
        case EDIT_DATA + '_FULFILLED':
            return { ...state, trainingData: payload, error: false }
        case EDIT_DATA + '_REJECTED':
            return { ...state, error: payload }
        case DELETE_DATA + '_FULFILLED':
            return { ...state, trainingData: payload, error: false }
        case DELETE_DATA + '_REJECTED':
            return { ...state, error: payload }
        case LOGOUT_REDUX_1:
            return { ...state, ...payload }
        default:
            return state
    }
}