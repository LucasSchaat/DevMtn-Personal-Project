require('dotenv').config({ path: __dirname + '/../.env'})
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const uc = require('./controllers/userController')
const tc = require('./controllers/trainingController')
const testc = require('./controllers/testingController')
const model = require('./tensorflowModel')
const path = require('path')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

// TOP LEVEL MIDDLEWARE

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    app.listen(SERVER_PORT, () => console.log(`Server listening on Port: ${SERVER_PORT}`))
    console.log('db connected')
})

// USER LOGIN ENDPOINTS
app.post('/api/login', uc.login)
app.post('/api/signup', uc.signup)
app.delete('/api/logout', uc.logout)

// DATA TRAINING ENDPOINTS
app.delete('/api/reset_db/:user_id', tc.resetDatabase)
app.post('/api/save_data/:user_id', tc.saveData)
app.get('/api/training_data/:user_id/:trainingCategories', tc.getData)
app.put('/api/edit_data/:user_id/:id', tc.editData)
app.delete('/api/delete/:user_id/:trainingCategories/:id', tc.deleteData)

// DATA TESTING ENDPOINTS
app.post('/api/save_testing_data/:user_id', testc.saveTestData)
app.post('/api/run/:user_id', model.runModel)