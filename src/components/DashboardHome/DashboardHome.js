import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './DashboardHome.css'

class DashboardHome extends Component {
    render() {
        return (
            <div className='dashboardHome-main'>
                <div className='intro-first'>
                    <div>Welcome to the Machine Learning Model Tutorial</div>
                </div>
                <div className='intro-second'>
                    <div>Let's begin setting up our model by establishing some outcome and dependent variables</div>
                </div>
                <div className='intro-third'>
                    <div>Click the button below to get started</div>
                    <button className='create-variables-button' onClick={() => this.props.history.push('/dashboard/training_variables')}>Create Model Variables</button>
                </div>
            </div>
        )
    }
}

export default withRouter(DashboardHome)