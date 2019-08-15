import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../redux/userReducer'
import './Dashboard.css'

class Dashboard extends Component {
    componentDidMount() {
        if (!this.props.user.loggedIn) {
            this.props.getUser()
        }
    }

    render() {
        let { error, redirect } = this.props
        if(error || redirect) return <Redirect to='/' />
        return (
            <div className='step-nav-box'>
                <div className='link-container'>
                    <Link className='links create-model-variables-link' to='/dashboard/training_variables'>Create Model Variables</Link>
                </div>
                <div className='link-container'>
                    <Link className='links import-data-link' to='/dashboard/import_data'>Import Your Data</Link>
                </div>
                <div className='link-container'>
                    <Link className='links test-model-link' to='/dashboard/test_model'>Test Your Model</Link>
                </div>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps,{ getUser })(Dashboard)