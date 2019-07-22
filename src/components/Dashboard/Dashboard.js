import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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
                    </div>
                </div>
            )
        }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps,{ getUser })(Dashboard)