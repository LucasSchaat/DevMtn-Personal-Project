import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../redux/userReducer'

class Dashboard extends Component {
    componentDidMount() {
        if (!this.props.user.loggedIn) {
            this.props.getUser()
        }
    }

        render() {
            let { error, redirect } = this.props
            if(error || redirect) return <Redirect to='/login' />
            return (
                <div className='Dashboard'>
                    <div>
                        Dashboard
                        <Link to='/dashboard/trainingData'>Train the Model</Link>
                        <Link to='/dashboard/testModel'>Test Your Model</Link>
                    </div>
                </div>
            )
        }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps,{ getUser })(Dashboard)