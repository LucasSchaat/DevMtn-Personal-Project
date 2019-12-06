module.exports = {
    async saveTestData(req, res) {
        const db = req.app.get('db')
        let { 
            trainingCategories,
            firstCategoryValue,
            secondCategoryValue,
            thirdCategoryValue,
            fourthCategoryValue,
            fifthCategoryValue,
            sixthCategoryValue,
        } = req.body
        const {user_id} = req.params
        if (trainingCategories === 1) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, firstCategoryValue)
            let data = await db.save_testing_data_1var(+user_id, firstCategoryValue)
            if (firstUniqueCheck[0]) {
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 2) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, firstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, secondCategoryValue)
            let data = await db.save_testing_data_2var([
                +user_id,
                firstCategoryValue,
                secondCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 3) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, firstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, secondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, thirdCategoryValue)
            let data = await db.save_testing_data_3var([
                +user_id,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 4) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, firstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, secondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, thirdCategoryValue)
            let fourthUniqueCheck = await db.check_unique_4var(+user_id, fourthCategoryValue)
            let data = await db.save_testing_data_4var([
                +user_id,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue,
                fourthCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            }

        } else if (trainingCategories === 5) {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, firstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, secondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, thirdCategoryValue)
            let fourthUniqueCheck = await db.check_unique_4var(+user_id, fourthCategoryValue)
            let fifthUniqueCheck = await db.check_unique_5var(+user_id, fifthCategoryValue)
            let data = await db.save_testing_data_5var([
                +user_id,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue,
                fourthCategoryValue,
                fifthCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            }
            
        } else {
            let firstUniqueCheck = await db.check_unique_1var(+user_id, firstCategoryValue)
            let secondUniqueCheck = await db.check_unique_2var(+user_id, secondCategoryValue)
            let thirdUniqueCheck = await db.check_unique_3var(+user_id, thirdCategoryValue)
            let fourthUniqueCheck = await db.check_unique_4var(+user_id, fourthCategoryValue)
            let fifthUniqueCheck = await db.check_unique_5var(+user_id, fifthCategoryValue)
            let sixthUniqueCheck = await db.check_unique_6var(+user_id, sixthCategoryValue)
            let data = await db.save_testing_data_6var([
                +user_id,
                firstCategoryValue,
                secondCategoryValue,
                thirdCategoryValue,
                fourthCategoryValue,
                fifthCategoryValue,
                sixthCategoryValue
            ])
            if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && !secondUniqueCheck[0] && thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (!firstUniqueCheck[0] && secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else if (firstUniqueCheck[0] && !secondUniqueCheck[0] && !thirdUniqueCheck[0] && !fourthUniqueCheck[0] && !fifthUniqueCheck[0] && !sixthUniqueCheck[0]) {
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            } else {
                await db.add_first_category_value([+user_id, 0, firstCategoryValue])
                await db.add_second_category_value([+user_id, 0, secondCategoryValue])
                await db.add_third_category_value([+user_id, 0, thirdCategoryValue])
                await db.add_fourth_category_value([+user_id, 0, fourthCategoryValue])
                await db.add_fifth_category_value([+user_id, 0, fifthCategoryValue])
                await db.add_sixth_category_value([+user_id, 0, sixthCategoryValue])
                res.send(data)
            }
        }
    }
} 