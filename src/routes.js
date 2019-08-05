import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import TrainingVariables from './components/TrainingVariables/TrainingVariables'
import TestModel from './components/TestModel/TestModel'
import UploadData from './components/UploadData/UploadData'
import DashboardHome from './components/DashboardHome/DashboardHome'
import { connect } from 'react-redux'
import { userLogout } from './redux/userReducer'
import { firstReduxLogout } from './redux/trainingReducer'
import { secondReduxLogout } from './redux/testingReducer'

class routes extends Component {
    logout = () => {
        console.log(this.props)
        this.props.firstReduxLogout()
        this.props.secondReduxLogout()
        this.props.userLogout()
    }
    
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' render={() => {
                    return (
                        <div className='background-container'>
                            <div className='background-overlay'>
                                <div className='nav-bar'>
                                    <div className='logo'>DevShop.js</div>
                                    <button onClick={this.logout} className='logout-button'>Log Out</button>
                                </div>
                                <div className='main-model-block'>
                                    <Dashboard/>
                                    <Switch>
                                        <Route exact path='/dashboard' component={DashboardHome} />
                                        <Route path='/dashboard/training_variables' component={TrainingVariables} />
                                        <Route path='/dashboard/test_model' component={TestModel} />
                                        <Route path='/dashboard/import_data' component={UploadData} />
                                    </Switch>
                                </div>
                                <div className='footer-container'>
                                    <div>DevShop.js Copyright 2019</div>
                                </div>
                            </div>
                        </div>
                    )
                }} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps,{ userLogout, firstReduxLogout, secondReduxLogout })(routes)