module.exports = {
    async getTrainingData(req, res) {
        let { table, userID } = req.params
        const db = req.app.get('db')
        let data = await db.get_training_data([table, userID])
        res.send(data)
    },
    async deleteData(req, res) {
        let { table, id } = req.params
        const db = req.app.get('db')
        let data = await db.delete_data([table, +id, req.session.user.id])
        res.send(data)
    },
    async editData(req, res) {
        let { table, id } = req.params
        // let { newTitle, newContent } = req.body
        const db = req.app.get('db')
        let data = await db.edit_data([
            table,
            +id,
            // newTitle,
            // newContent,
            req.session.user.id
        ])
        res.send(data)
    },
    async saveData(req, res) {
        const db = req.app.get('db')
        console.log(this.props.user)
        let { 
            categoryValue,
            outcomeValue
        } = req.body
        let data = await db.save_data_1var([
            categoryValue,
            outcomeValue
        ])
        res.send(data)
    }
}