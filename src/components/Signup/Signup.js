import React, { Component } from 'react'
import { signup } from '../../redux/userReducer'
import { setupDatabase } from '../../redux/trainingReducer'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import './Signup.css'

class Signup extends Component {
    constructor() {
        super ()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    signupUser = async () => {
        await this.props.signup(this.state.username, this.state.password)
        this.props.setupDatabase(this.props.user.id)
    }

    render() {
        let { username, password } = this.state
        let { user } = this.props
        if (user.loggedIn) return <Redirect to='/dashboard' />
        return(
            <div className='background-container'>
                <div className='background-overlay'>
                    <div className='nav-bar'>
                        <div className='logo'>Prediktion</div>
                        <div className='button-container'>
                            <button onClick={() => this.props.history.push('/login')} className='nav-button login-button'>Login</button>
                            <button className='nav-button signup-button'>Sign Up</button>
                        </div>
                    </div>
                    <div className='main-block'> 
                        <div className='signup-main'>
                            <div className='signup-container'>
                                <div className='signup-box'>
                                    <div className='signup-title'>Create New User</div>
                                    <input className='signup-input signup-username' type='text' value={username} name='username' onChange={this.handleChange} placeholder='Username' />
                                    <input className='signup-input signup-password' type='password' value={password} name='password' onChange={this.handleChange} placeholder='Password' />
                                    <button className='submit-signup-button' onClick={this.signupUser}>Sign Up</button>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className='footer-container'>
                        <div>Prediktion Copyright 2019</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state) {
     return state.user
}

export default connect(mapStatetoProps, { signup, setupDatabase })(withRouter(Signup))