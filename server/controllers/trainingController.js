module.exports = {
    async getData(req, res) {
        console.log('hit get data')
        const db = req.app.get('db')
        let data = await db.get_training_data()
        res.send(data)
    },

    // async deleteData(req, res) {
    //     let { table, id } = req.params
    //     const db = req.app.get('db')
    //     let data = await db.delete_data([table, +id, req.session.user.id])
    //     res.send(data)
    // },

    async editData(req, res) {
        console.log('hit edit data')
        const db = req.app.get('db')
        let { id } = req.params
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
            let firstUniqueCheck = await db.check_unique_1var(newFirstCategoryValue)
            let data = await db.edit_data_1var([
                +id,
                newOutcomeValue,
                newFirstCategoryValue
            ])
            if (firstUniqueCheck[0]) {
                res.send(data)
            } else {
                await db.add_first_category_value([reference_id, newFirstCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 2) {
            let firstUniqueCheck = await db.check_unique_1var(newFirstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(newSecondCategoryValue)
            let data = await db.edit_data_2var([
                +id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0]) {
                await db.add_first_category_value([reference_id, newFirstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0]) {
                await db.add_second_category_value([reference_id, newSecondCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([reference_id, newFirstCategoryValue])
                await db.add_second_category_value([reference_id, newSecondCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 3) {
            console.log('trainingCategory 3')
            let firstUniqueCheck = await db.check_unique_1var(newFirstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(newSecondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_2var(newThirdCategoryValue)
            let data = await db.edit_data_3var([
                +id,
                reference_id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_first_category_value([reference_id, newFirstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_second_category_value([reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_third_category_value([reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_first_category_value([reference_id, newFirstCategoryValue])
                await db.add_second_category_value([reference_id, newSecondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_second_category_value([reference_id, newSecondCategoryValue])
                await db.add_third_category_value([reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_first_category_value([reference_id, newFirstCategoryValue])
                await db.add_third_category_value([reference_id, newThirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_first_category_value([reference_id, newFirstCategoryValue])
                await db.add_second_category_value([reference_id, newSecondCategoryValue])
                await db.add_third_category_value([reference_id, newThirdCategoryValue])
                res.send(data)
            }
        } else if (trainingCategories === 4) {
            console.log('trainingCategory 4')
            let data = await db.edit_data_4var([
                +id,
                reference_id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue,
                newFourthCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 5) {
            console.log('trainingCategory 5')
            let data = await db.edit_data_5var([
                +id,
                reference_id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue,
                newFourthCategoryValue,
                newFifthCategoryValue
            ])
            res.send(data)
        } else {
            console.log('trainingCategory 6', trainingCategories)
            console.log(newOutcomeValue)
            console.log(newFirstCategoryValue)
            console.log(newSecondCategoryValue)
            let data = await db.edit_data_6var([
                +id,
                reference_id,
                newOutcomeValue,
                newFirstCategoryValue,
                newSecondCategoryValue,
                newThirdCategoryValue,
                newFourthCategoryValue,
                newFifthCategoryValue,
                newSixthCategoryValue
            ])
            res.send(data)
        }
    },

    async saveData(req, res) {
        console.log('hit save data')
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
            sixthCategoryValue
        } = req.body
        if (trainingCategories === 1) {
            let data = await db.save_data_1var([
                dataImports,
                outcomeValue,
                firstCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 2) {
            let data = await db.save_data_2var([
                dataImports,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 3) {
            let data = await db.save_data_3var([
                dataImports,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 4) {
            let data = await db.save_data_4var([
                dataImports,
                outcomeValue,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue,
                fourthCategoryValue
            ])
            res.send(data)
        } else if (trainingCategories === 5) {
            let data = await db.save_data_5var([
                dataImports,
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
                dataImports,
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