module.exports = {
    async getData(req, res) {
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
    // async editData(req, res) {
    //     let { table, id } = req.params
    //     // let { newTitle, newContent } = req.body
    //     const db = req.app.get('db')
    //     let data = await db.edit_data([
    //         table,
    //         +id,
    //         // newTitle,
    //         // newContent,
    //         req.session.user.id
    //     ])
    //     res.send(data)
    // },
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