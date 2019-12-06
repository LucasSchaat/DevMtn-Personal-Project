import axios from 'axios'
import {
    SAVE_CATEGORIES,
    GET_DATA,
    SAVE_BULK_DATA,
    SAVE_DATA,
    EDIT_DATA,
    DELETE_DATA,
    LOGOUT_REDUX_1,
    RESET_DB
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
    bulkDownload: {
        bulkDataArray: [],
        massDataUpload: false,
        bulkTrainingData: [],
        bulkCategoryCount: 0,
        uniqueOutcomeValues: [],
        uniqueFirstCategoryValues: [],
        uniqueSecondCategoryValues: [],
        uniqueThirdCategoryValues: [],
        uniqueFourthCategoryValues: [],
        uniqueFifthCategoryValues: [],
        uniqueSixthCategoryValues: [],
    },
    error: false
}

export function setupDatabase(user_id) {
    let data = axios.delete(`/api/reset_db/${user_id}`).then(res => res.data)
    return {
        type: RESET_DB,
        payload: data
    }
}

export const saveBulkUpload = (
    bulkDataArray,
    massDataUpload,
    bulkTrainingData,
    bulkCategoryCount,
    uniqueOutcomeValues,
    uniqueFirstCategoryValues,
    uniqueSecondCategoryValues,
    uniqueThirdCategoryValues,
    uniqueFourthCategoryValues,
    uniqueFifthCategoryValues,
    uniqueSixthCategoryValues
) => {
    let bulkDownloadData = {
        bulkDataArray,
        massDataUpload,
        bulkTrainingData,
        bulkCategoryCount,
        uniqueOutcomeValues,
        uniqueFirstCategoryValues,
        uniqueSecondCategoryValues,
        uniqueThirdCategoryValues,
        uniqueFourthCategoryValues,
        uniqueFifthCategoryValues,
        uniqueSixthCategoryValues
    }
    console.log('bulkDownloadData', bulkDownloadData)
    return {
        type: SAVE_BULK_DATA,
        payload: bulkDownloadData
    }
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

export function getData(user_id, trainingCategories) {
    let data = axios.get(`/api/training_data/${user_id}/${trainingCategories}`).then(res => res.data)
    return {
        type: GET_DATA,
        payload: data
    }
}

export function deleteData (user_id, trainingCategories, id) {
    let data = axios.delete(`/api/delete/${user_id}/${trainingCategories}/${id}`).then(res => res.data)
    return {
        type: DELETE_DATA,
        payload: data
    }
}

export function saveData(
    user_id, 
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
        .post(`/api/save_data/${user_id}`,{
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
    user_id,
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
        .put(`/api/edit_data/${user_id}/${id}`, {
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
        case SAVE_BULK_DATA:
            return { ...state, bulkDownload: payload}
        case GET_DATA + '_PENDING':
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
        case RESET_DB + '_FULFILLED':
            return { ...state }
        default:
            return state
    }
}