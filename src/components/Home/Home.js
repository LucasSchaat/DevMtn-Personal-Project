import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../redux/userReducer'
import './Home.css'

class Home extends Component {
    componentDidMount() {
        if (!this.props.user.loggedIn) {
            this.props.getUser()
        }
    }

    gotoLogin = () => {
        this.props.history.push('/login')
    }

    gotoSignup = () => {
        this.props.history.push('/signup')
    }

    render() {
        return (
            <div className='background-container'>
                <div className='background-overlay'>
                    <div className='nav-bar'>
                        <div className='logo'>DevShop.js</div>
                        <div className='button-container'>
                            <button onClick={this.gotoLogin} className='nav-button login-button'>Login</button>
                            <button onClick={this.gotoSignup} className='nav-button signup-button'>Sign Up</button>
                        </div>
                    </div>
                    <div className='main-block'>
                        <div className='home-main'>
                            <div className='home-intro'>
                                <div className='home-intro-blocks'>Train Your Own</div>
                                <div className='home-intro-blocks'>Machine Learning</div>
                                <div className='home-intro-blocks'>Model with</div>
                                <div className='tf-logo-container'>
                                    <img className='tf-logo' src='https://www.gstatic.com/devrel-devsite/va3a0eb1ff00a004a87e2f93101f27917d794beecfd23556fc6d8627bba2ff3cf/tensorflow/images/lockup.svg' alt='tensorflow logo'/>
                                </div>
                            </div>
                            <div className='home-content'>Please log in or sign up to begin</div>
                        </div>
                    </div>
                    <div className='footer-container'>
                        <div>DevShop.js Copyright 2019</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps,{ getUser })(withRouter(Home))