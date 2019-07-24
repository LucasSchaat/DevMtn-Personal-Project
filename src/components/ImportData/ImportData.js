import React, { Component } from 'react'
import { connect } from 'react-redux'

class ImportData extends Component {
    render() {
        return(
            <div>
                Import Your Data Here and See what it is below
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps, null)(ImportData)