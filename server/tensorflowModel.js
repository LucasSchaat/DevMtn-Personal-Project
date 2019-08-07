const tf = require ("@tensorflow/tfjs")
require ("@tensorflow/tfjs-node")

module.exports = {
    async runModel(req, res) {
        let { 
            trainingCategories,
            bulkCategoryCount,
            bulkTrainingData,
            firstCategory,
            secondCategory,
            thirdCategory,
            fourthCategory,
            fifthCategory,
            sixthCategory,
            firstCategoryValue,
            secondCategoryValue,
            thirdCategoryValue,
            fourthCategoryValue,
            fifthCategoryValue,
            sixthCategoryValue,
            uniqueFirstCategoryValues,
            uniqueSecondCategoryValues,
            uniqueThirdCategoryValues,
            uniqueFourthCategoryValues,
            uniqueFifthCategoryValues,
            uniqueSixthCategoryValues
        } = req.body
        const db = req.app.get('db')
        let training = []
        let testing = []

        if (bulkTrainingData.length && trainingCategories === 1) {
            let firstIndex = uniqueFirstCategoryValues.indexOf(firstCategoryValue)
            console.log('firstIndex', firstIndex)
            if (firstIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex
                })
            } else {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1
                })
            }
            training = bulkTrainingData

            console.log('firstCategoryValue', firstCategoryValue)
            console.log('uniqueFirstCategoryValues', uniqueFirstCategoryValues)
            console.log('data point', uniqueFirstCategoryValues.indexOf(firstCategoryValue))
            console.log('testing', testing)
            console.log('training', training)

            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data[firstCategory]
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome === 1 ? 1 : 0,
                data.outcome === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data[firstCategory]
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

        } else if (bulkTrainingData.length && trainingCategories === 2) {
            let firstIndex = uniqueFirstCategoryValues.indexOf(firstCategoryValue)
            let secondIndex = uniqueSecondCategoryValues.indexOf(secondCategoryValue)
            if (firstIndex !== -1 && secondIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex
                })
            } else {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1
                })
            }
            training = bulkTrainingData

            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data[firstCategory],
                data[secondCategory]
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome === 1 ? 1 : 0,
                data.outcome === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data[firstCategory],
                data[secondCategory]
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

        } else if (bulkTrainingData.length && trainingCategories === 3) {
            let firstIndex = uniqueFirstCategoryValues.indexOf(firstCategoryValue)
            let secondIndex = uniqueSecondCategoryValues.indexOf(secondCategoryValue)
            let thirdIndex = uniqueThirdCategoryValues.indexOf(thirdCategoryValue)
            if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 & thirdIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 & thirdIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 & thirdIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1
                })
            } else {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1
                })
            }
            training = bulkTrainingData

            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory]
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome === 1 ? 1 : 0,
                data.outcome === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory]
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

        } else if (bulkTrainingData.length && trainingCategories === 4) {
            let firstIndex = uniqueFirstCategoryValues.indexOf(firstCategoryValue)
            let secondIndex = uniqueSecondCategoryValues.indexOf(secondCategoryValue)
            let thirdIndex = uniqueThirdCategoryValues.indexOf(thirdCategoryValue)
            let fourthIndex = uniqueFourthCategoryValues.indexOf(fourthCategoryValue)
            if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 & thirdIndex === -1 && fourthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 & thirdIndex !== -1 && fourthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 & thirdIndex !== -1 && fourthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            } else {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1
                })
            }
            training = bulkTrainingData

            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory],
                data[fourthCategory]
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome === 1 ? 1 : 0,
                data.outcome === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory],
                data[fourthCategory]
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

        } else if (bulkTrainingData.length && trainingCategories === 5) {
            let firstIndex = uniqueFirstCategoryValues.indexOf(firstCategoryValue)
            let secondIndex = uniqueSecondCategoryValues.indexOf(secondCategoryValue)
            let thirdIndex = uniqueThirdCategoryValues.indexOf(thirdCategoryValue)
            let fourthIndex = uniqueFourthCategoryValues.indexOf(fourthCategoryValue)
            let fifthIndex = uniqueFifthCategoryValues.indexOf(fifthCategoryValue)
            if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 & thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 & thirdIndex !== -1 && fourthIndex !== -1  && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 & thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            }
            training = bulkTrainingData

            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory],
                data[fourthCategory]
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome === 1 ? 1 : 0,
                data.outcome === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory],
                data[fourthCategory]
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

        } else if (bulkTrainingData.length && trainingCategories === 6) {
            let firstIndex = uniqueFirstCategoryValues.indexOf(firstCategoryValue)
            let secondIndex = uniqueSecondCategoryValues.indexOf(secondCategoryValue)
            let thirdIndex = uniqueThirdCategoryValues.indexOf(thirdCategoryValue)
            let fourthIndex = uniqueFourthCategoryValues.indexOf(fourthCategoryValue)
            let fifthIndex = uniqueFifthCategoryValues.indexOf(fifthCategoryValue)
            let sixthIndex = uniqueSixthCategoryValues.indexOf(sixthCategoryValue)
            if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex !== -1 && sixthIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex,
                    [sixthCategory]: sixthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1 && sixthIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1,
                    [sixthCategory]: sixthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {    
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 & thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 & thirdIndex !== -1 && fourthIndex !== -1  && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 & thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex !== -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: fifthIndex
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex !== -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: fourthIndex,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex === -1 && thirdIndex !== -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: thirdIndex,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex === -1 && secondIndex !== -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: secondIndex,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else if (firstIndex !== -1 && secondIndex === -1 && thirdIndex === -1 && fourthIndex === -1 && fifthIndex === -1) {
                testing.push({
                    [firstCategory]: firstIndex,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1
                })
            } else {
                testing.push({
                    [firstCategory]: +uniqueFirstCategoryValues.length + 1,
                    [secondCategory]: +uniqueSecondCategoryValues.length + 1,
                    [thirdCategory]: +uniqueThirdCategoryValues.length + 1,
                    [fourthCategory]: +uniqueFourthCategoryValues.length + 1,
                    [fifthCategory]: +uniqueFifthCategoryValues.length + 1,
                    [sixthCategory]: +uniqueSixthCategoryValues.length + 1
                })
            }
            training = bulkTrainingData

            // CONVERT / SETUP DATA
            const trainingData = tf.tensor2d(training.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory],
                data[fourthCategory]
            ]))
            const outcomeData = tf.tensor2d(training.map(data => [
                data.outcome === 1 ? 1 : 0,
                data.outcome === 0 ? 1 : 0
            ]))
            const testingData = tf.tensor2d(testing.map(data => [
                data[firstCategory],
                data[secondCategory],
                data[thirdCategory],
                data[fourthCategory]
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

        } else if (trainingCategories === 1) {
            let trainingDataFromDB = await db.get_training_data_for_model_1var()
            let testingDataFromDB = await db.get_testing_data_for_model_1var()
            training = JSON.parse([JSON.stringify(trainingDataFromDB)])
            testing = JSON.parse([JSON.stringify(testingDataFromDB)])

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


