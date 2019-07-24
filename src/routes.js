import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import TrainingData from './components/TrainingData/TrainingData'

class routes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/dashboard/trainingData' component={TrainingData} />
            </Switch>
        )
    }
}

export default routes