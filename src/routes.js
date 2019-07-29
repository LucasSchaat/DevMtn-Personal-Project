import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import TrainingVariables from './components/TrainingVariables/TrainingVariables'
import TestModel from './components/TestModel/TestModel'
import UploadData from './components/UploadData/UploadData'

class routes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' render={() => {
                    return (
                        <div>
                            <Dashboard/>
                            <Switch>
                                <Route path='/dashboard/training_variables' component={TrainingVariables} />
                                <Route path='/dashboard/testModel' component={TestModel} />
                                <Route path='/dashboard/import_data' component={UploadData} />
                            </Switch>
                        </div>
                    )
                }} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
        )
    }
}

export default routes