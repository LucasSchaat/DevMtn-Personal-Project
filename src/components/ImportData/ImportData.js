import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../Data/Data'
import { getData } from '../../redux/trainingReducer'

class ImportData extends Component {
    componentDidMount() {
        let { getData } = this.props
        if (!this.props.training.trainingData) {
            getData()
        }
    }
    
    render() {
        const { trainingData } = this.props.training
        const {
            outcome,
            firstCategory,
            secondCategory,
            thirdCategory,
            fourthCategory,
            fifthCategory,
            sixthCategory
        } = this.props.training.categories
        const { trainingCategories } = this.props.user.user
        if( trainingCategories === 1) {
            return(
                <div>
                    <div>
                        <div>Import Number</div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                    </div>
                    {/* {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))} */}
                </div>
            )
        } else if( trainingCategories === 2) {
            return(
                <div>
                    <div>
                        <div>Import Number</div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                    </div>
                    {/* {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))} */}
                </div>
            )
        } else if( trainingCategories === 3) {
            return(
                <div>
                    <div>
                        <div>Import Number</div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                    </div>
                    {/* {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))} */}
                </div>
            )
        } else if( trainingCategories === 4) {
            return(
                <div>
                    <div>
                        <div>Import Number</div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                    </div>
                    {/* {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))} */}
                </div>
            )
        } else if( trainingCategories === 5) {
            return(
                <div>
                    <div>
                        <div>Import Number</div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <div>{fifthCategory}</div>
                    </div>
                    {/* {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))} */}
                </div>
            )
        } else {
            return(
                <div>
                    <div>
                        <div>Import Number</div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <div>{fifthCategory}</div>
                        <div>{sixthCategory}</div>
                    </div>
                    {/* {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))} */}
                </div>
            )
        } 
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getData })(ImportData)