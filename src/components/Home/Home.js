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
            <div>
                <div className='home-nav-bar'>
                    <div className='logo'>DevShop.js</div>
                    <div className='button-container'>
                        <button onClick={this.gotoLogin} className='home-button'>Login</button>
                        <button onClick={this.gotoSignup} className='home-button'>Signup</button>
                    </div>
                </div>
                <div className='home-main'>
                    <div>
                        Train Your Own Machine Learning Model with Tensorflow.js
                    </div>
                    <div>Please log in or sign up to begin</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps,{ getUser })(withRouter(Home))