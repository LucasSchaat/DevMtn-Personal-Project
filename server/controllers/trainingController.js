module.exports = {
    async getData(req, res) {
        const {user_id, trainingCategories} = req.params
        const db = req.app.get('db')
        if(trainingCategories === 1) {
            let data = await db.get_training_data_1var(+user_id)
            res.send(data)
        } else if (trainingCategories === 2) {
            let data = await db.get_training_data_2var(+user_id)
            res.send(data)
        } else if (trainingCategories === 3) {
            let data = await db.get_training_data_3var(+user_id)
            res.send(data)
        } else if (trainingCategories === 4) {
            let data = await db.get_training_data_4var(+user_id)
            res.send(data)
        } else if (trainingCategories === 5) {
            let data = await db.get_training_data_5var(+user_id)
            res.send(data)
        } else {
            let data = await db.get_training_data_6var(+user_id)
            res.send(data)
        }
    },

    async resetDatabase(req, res) {
        const {user_id} = req.params
        const db = req.app.get('db')
        let data = await db.delete_tables(+user_id)
        res.send(data)
    },
    
    async deleteData(req, res) {
        let { trainingCategories, user_id, id } = req.params
        const db = req.app.get('db')
        if(trainingCategories === 1) {
            let data = await db.delete_data_1var([+user_id, +id])
            res.send(data)
        } else if (trainingCategories === 2) {
            let data = await db.delete_data_2var([+user_id, +id])
            res.send(data)
        } else if (trainingCategories === 3) {
            let data = await db.delete_data_3var([+user_id, +id])
            res.send(data)
        } else if (trainingCategories === 4) {
            let data = await db.delete_data_4var([+user_id, +id])
            res.send(data)
        } else if (trainingCategories === 5) {
            let data = await db.delete_data_5var([+user_id, +id])
            res.send(data)
        } else {
            let data = await db.delete_data_6var([+user_id, +id])
            res.send(data)
        }
    },

    async editData(req, res) {
        const db = req.app.get('db')
        let { user_id, id } = req.params
        let { 
            reference_id,
            trainingCategories,
            newOutcomeValue,
            newFirstCategoryValue,
            newSecondCategoryValue,
            newThirdCategoryValue,
            newFourthCategoryValue,
            newFifthCategoryValue,
            newSixthCategoryValue,
        } = req.body
        if (trainingCategories === 1) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, newFirstCategoryValue)
            let data = await db.edit_data_1var([
                +user_id,
                +id,
                newOutcomeValue,
                newFirstCategoryValue
            ])
            if (firstUniqueCheck[0]) {
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 2) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, newFirstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, newSecondCategoryValue)
            let data = await db.edit_data_2var([
                +user_id,
                +id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 3) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, newFirstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, newSecondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, newThirdCategoryValue)
            let data = await db.edit_data_3var([
                +user_id,
                +id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 4) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, newFirstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, newSecondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, newThirdCategoryValue)
            let fourthUniqueCheck = await db.check_unique_4var(+user_id, newFourthCategoryValue)
            let data = await db.edit_data_4var([
                +user_id,
                +id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue,
                newFourthCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 5) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, newFirstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, newSecondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, newThirdCategoryValue)
            let fourthUniqueCheck = await db.check_unique_4var(+user_id, newFourthCategoryValue)
            let fifthUniqueCheck = await db.check_unique_5var(+user_id, newFifthCategoryValue)
            let data = await db.edit_data_5var([
                +user_id,
                +id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue,
                newFourthCategoryValue,
                newFifthCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            }

        } else {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, newFirstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, newSecondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, newThirdCategoryValue)
            let fourthUniqueCheck = await db.check_unique_4var(+user_id, newFourthCategoryValue)
            let fifthUniqueCheck = await db.check_unique_5var(+user_id, newFifthCategoryValue)
            let sixthUniqueCheck = await db.check_unique_6var(+user_id, newSixthCategoryValue)
            let data = await db.edit_data_6var([
                +user_id,
                +id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue,
                newFourthCategoryValue,
                newFifthCategoryValue,
                newSixthCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, reference_id, newFirstCategoryValue])
                await db.add_second_category_value([+user_id, reference_id, newSecondCategoryValue])
                await db.add_third_category_value([+user_id, reference_id, newThirdCategoryValue])
                await db.add_fourth_category_value([+user_id, reference_id, newFourthCategoryValue])
                await db.add_fifth_category_value([+user_id, reference_id, newFifthCategoryValue])
                await db.add_sixth_category_value([+user_id, reference_id, newSixthCategoryValue])
                res.send(data)
            }
        }
    },

    async saveData(req, res) {
        const db = req.app.get('db')
        let { 
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
        } = req.body
        const {user_id} = req.params
        if (trainingCategories === 1) {
            let data = await db.save_data_1var([
                +user_id,
                dataImports,
                firstOutcome,
                secondOutcome,
                outcomeValue,
                firstCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 2) {
            let data = await db.save_data_2var([
                +user_id,
                dataImports,
                firstOutcome,
                secondOutcome,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 3) {
            let data = await db.save_data_3var([
                +user_id,
                dataImports,
                firstOutcome,
                secondOutcome,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 4) {
            let data = await db.save_data_4var([
                +user_id,
                dataImports,
                firstOutcome,
                secondOutcome,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue,
                fourthCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 5) {
            let data = await db.save_data_5var([
                +user_id,
                dataImports,
                firstOutcome,
                secondOutcome,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue,
                fourthCategoryValue,
                fifthCategoryValue
            ])
            res.send(data)
        } else {
            let data = await db.save_data_6var([
                +user_id,
                dataImports,
                firstOutcome,
                secondOutcome,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue,
                fourthCategoryValue,
                fifthCategoryValue,
                sixthCategoryValue
            ])
            res.send(data)
        }
    }
}