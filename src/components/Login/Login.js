import React, {Component} from 'react'
import { login } from '../../redux/userReducer'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import './Login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
    }

    loginUser = () => {
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        let { username, password } = this.state
        let { user } = this.props
        if (user.loggedIn) return <Redirect to='/dashboard' />
        return (
           <div>
               <div className='login-page'>
                    <div className='login-page-overlay'>
                        <div className='nav-bar'>
                            <div className='logo'>DevShop.js</div>
                            <div className='button-container'>
                                <button className='login-button'>Login</button>
                                <button onClick={() => this.props.history.push('/signup')} className='login-button'>Signup</button>
                            </div>
                        </div>
                        <div className='login-main'>
                            <div className='login-container'>
                                <div className='login-box'>
                                    <div className='login-title'>User Login</div>
                                    <input className='login-input' type='text' value={username} name='username' onChange={this.handleChange} placeholder='Username' />
                                    <input className='login-input' type='password' value={password} name='password' onChange={this.handleChange} placeholder='Password' />
                                    <button className='submit-login-button' onClick={this.loginUser}>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className='footer-container'>
                            <div>DevShop.js Copyright 2019</div>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps,{ login })(withRouter(Login))