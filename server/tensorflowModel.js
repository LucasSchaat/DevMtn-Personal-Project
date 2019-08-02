const tf = require ("@tensorflow/tfjs")
require ("@tensorflow/tfjs-node")

module.exports = {
    async runModel(req, res) {
        let { trainingCategories } = req.body
        const db = req.app.get('db')
        let training = []
        let testing = []
        if (trainingCategories === 1) {
            let trainingDataFromDB = await db.get_training_data_for_model_1var()
            let testingDataFromDB = await db.get_testing_data_for_model_1var()
            training = JSON.parse([JSON.stringify(trainingDataFromDB)])
            testing = JSON.parse([JSON.stringify(testingDataFromDB)])
            console.log(training)
            console.log(testing)

            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data.first_id
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome_id === 1 ? 1 : 0,
                data.outcome_id === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data.first_id
            ]))

            // BUILD NEURAL NETWORK
            const model = tf.sequential()

            model.add(tf.layers.dense({
                inputShape: [1],
                activation: "sigmoid",
                units: 5
            }))
            model.add(tf.layers.dense({
                inputShape: [5],
                activation: "sigmoid",
                units: 2
            }))
            model.compile({
                loss: "meanSquaredError",
                optimizer: tf.train.adam(.06)
            })

            // TRAIN / FIT NETWORK
            model.fit(trainingData, outcomeData, {epochs: 100})
                .then(async () => {
                    let result = await model.predict(testingData).data()
                    model.predict(testingData).print()
                    res.send(result)
                    console.log(result)
                })
        } else if (trainingCategories === 2) {
            let trainingDataFromDB = await db.get_training_data_for_model_2var()
            let testingDataFromDB = await db.get_testing_data_for_model_2var()
            training = JSON.parse([JSON.stringify(trainingDataFromDB)])
            testing = JSON.parse([JSON.stringify(testingDataFromDB)])
    
            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data.first_id,
                data.second_id
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome_id === 1 ? 1 : 0,
                data.outcome_id === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data.first_id,
                data.second_id
            ]))

            // BUILD NEURAL NETWORK
            const model = tf.sequential()

            model.add(tf.layers.dense({
                inputShape: [2],
                activation: "sigmoid",
                units: 5
            }))
            model.add(tf.layers.dense({
                inputShape: [5],
                activation: "sigmoid",
                units: 2
            }))
            model.compile({
                loss: "meanSquaredError",
                optimizer: tf.train.adam(.06)
            })

            // TRAIN / FIT NETWORK
            model.fit(trainingData, outcomeData, {epochs: 100})
                .then(async () => {
                    let result = await model.predict(testingData).data()
                    model.predict(testingData).print()
                    res.send(result)
                    console.log(result)
                })
        } else if (trainingCategories === 3) {
            let trainingDataFromDB = await db.get_training_data_for_model_3var()
            let testingDataFromDB = await db.get_testing_data_for_model_3var()
            training = JSON.parse([JSON.stringify(trainingDataFromDB)])
            testing = JSON.parse([JSON.stringify(testingDataFromDB)])
            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data.first_id,
                data.second_id,
                data.third_id
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome_id === 1 ? 1 : 0,
                data.outcome_id === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data.first_id,
                data.second_id,
                data.third_id
            ]))

            // BUILD NEURAL NETWORK
            const model = tf.sequential()

            model.add(tf.layers.dense({
                inputShape: [3],
                activation: "sigmoid",
                units: 5
            }))
            model.add(tf.layers.dense({
                inputShape: [5],
                activation: "sigmoid",
                units: 2
            }))
            model.compile({
                loss: "meanSquaredError",
                optimizer: tf.train.adam(.06)
            })

            // TRAIN / FIT NETWORK
            model.fit(trainingData, outcomeData, {epochs: 100})
                .then(async () => {
                    let result = await model.predict(testingData).data()
                    model.predict(testingData).print()
                    res.send(result)
                    console.log(result)
                })
        } else if (trainingCategories === 4) {
            let trainingDataFromDB = await db.get_training_data_for_model_4var()
            let testingDataFromDB = await db.get_testing_data_for_model_4var()
            training = JSON.parse([JSON.stringify(trainingDataFromDB)])
            testing = JSON.parse([JSON.stringify(testingDataFromDB)])
    
            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data.first_id,
                data.second_id,
                data.third_id,
                data.fourth_id
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome_id === 1 ? 1 : 0,
                data.outcome_id === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data.first_id,
                data.second_id,
                data.third_id,
                data.fourth_id
            ]))

            // BUILD NEURAL NETWORK
            const model = tf.sequential()

            model.add(tf.layers.dense({
                inputShape: [4],
                activation: "sigmoid",
                units: 5
            }))
            model.add(tf.layers.dense({
                inputShape: [5],
                activation: "sigmoid",
                units: 2
            }))
            model.compile({
                loss: "meanSquaredError",
                optimizer: tf.train.adam(.06)
            })

            // TRAIN / FIT NETWORK
            model.fit(trainingData, outcomeData, {epochs: 100})
                .then(async () => {
                    let result = await model.predict(testingData).data()
                    model.predict(testingData).print()
                    res.send(result)
                    console.log(result)
                })
        } else if (trainingCategories === 5) {
            let trainingDataFromDB = await db.get_training_data_for_model_5var()
            let testingDataFromDB = await db.get_testing_data_for_model_5var()
            training = JSON.parse([JSON.stringify(trainingDataFromDB)])
            testing = JSON.parse([JSON.stringify(testingDataFromDB)])
    
            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data.first_id,
                data.second_id,
                data.third_id,
                data.fourth_id,
                data.fifth_id
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome_id === 1 ? 1 : 0,
                data.outcome_id === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data.first_id,
                data.second_id,
                data.third_id,
                data.fourth_id,
                data.fifth_id
            ]))

            // BUILD NEURAL NETWORK
            const model = tf.sequential()

            model.add(tf.layers.dense({
                inputShape: [5],
                activation: "sigmoid",
                units: 5
            }))
            model.add(tf.layers.dense({
                inputShape: [5],
                activation: "sigmoid",
                units: 2
            }))
            model.compile({
                loss: "meanSquaredError",
                optimizer: tf.train.adam(.06)
            })

            // TRAIN / FIT NETWORK
            model.fit(trainingData, outcomeData, {epochs: 100})
                .then(async () => {
                    let result = await model.predict(testingData).data()
                    model.predict(testingData).print()
                    res.send(result)
                    console.log(result)
                })
        } else {
            let trainingDataFromDB = await db.get_training_data_for_model_6var()
            let testingDataFromDB = await db.get_testing_data_for_model_6var()
            training = JSON.parse([JSON.stringify(trainingDataFromDB)])
            testing = JSON.parse([JSON.stringify(testingDataFromDB)])
    
            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data.first_id,
                data.second_id,
                data.third_id,
                data.fourth_id,
                data.fifth_id,
                data.sixth_id
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome_id === 1 ? 1 : 0,
                data.outcome_id === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data.first_id,
                data.second_id,
                data.third_id,
                data.fourth_id,
                data.fifth_id,
                data.sixth_id

            ]))

            // BUILD NEURAL NETWORK
            const model = tf.sequential()

            model.add(tf.layers.dense({
                inputShape: [6],
                activation: "sigmoid",
                units: 5
            }))
            model.add(tf.layers.dense({
                inputShape: [5],
                activation: "sigmoid",
                units: 2
            }))
            model.compile({
                loss: "meanSquaredError",
                optimizer: tf.train.adam(.06)
            })

            // TRAIN / FIT NETWORK
            model.fit(trainingData, outcomeData, {epochs: 100})
                .then(async () => {
                    let result = await model.predict(testingData).data()
                    model.predict(testingData).print()
                    res.send(result)
                    console.log(result)
                })
        }
    }
}


