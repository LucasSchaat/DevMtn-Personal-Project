import { SAVE_TESTING_DATA } from './actionTypes'

const initialState = {
    testingData: []
}

export const saveTestingData = (
    firstCategoryValue,
    secondCategoryValue,
    thirdCategoryValue,
    fourthCategoryValue,
    fifthCategoryValue,
    sixthCategoryValue
) => {
    let testingData = {
        firstCategoryValue,
        secondCategoryValue,
        thirdCategoryValue,
        fourthCategoryValue,
        fifthCategoryValue,
        sixthCategoryValue
    }
    return {
        type: SAVE_TESTING_DATA,
        payload: testingData
    }
}

export default function (state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case SAVE_TESTING_DATA:
            return { ...state, testingData: payload}
        default:
            return state
    }
}