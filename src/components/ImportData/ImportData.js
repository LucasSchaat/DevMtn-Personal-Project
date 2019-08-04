import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../Data/Data'
import { getData } from '../../redux/trainingReducer'
import './ImportData.css'

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
                <div className='import-divider'>
                    <div className='import-title'>Imported Model Training Data</div>
                    <div className='data-import-container'>
                        <div className='training-data-titles two-column-titles'>Outcome</div>
                        <div className='training-data-titles two-column-titles'>{firstCategory}</div>
                    </div>
                    {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))}
                </div>
            )
        } else if( trainingCategories === 2) {
            return(
                <div className='import-divider'>
                    <div className='import-title'>Imported Model Training Data</div>
                    <div className='data-import-container'>
                        <div className='training-data-titles three-column-titles'>Outcome</div>
                        <div className='training-data-titles three-column-titles'>{firstCategory}</div>
                        <div className='training-data-titles three-column-titles'>{secondCategory}</div>
                    </div>
                    {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))}
                </div>
            )
        } else if( trainingCategories === 3) {
            return(
                <div className='import-divider'>
                    <div className='import-title'>Imported Model Training Data</div>
                    <div className='data-import-container'>
                        <div className='training-data-titles four-column-titles'>Outcome</div>
                        <div className='training-data-titles four-column-titles'>{firstCategory}</div>
                        <div className='training-data-titles four-column-titles'>{secondCategory}</div>
                        <div className='training-data-titles four-column-titles'>{thirdCategory}</div>
                    </div>
                    {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))}
                </div>
            )
        } else if( trainingCategories === 4) {
            return(
                <div className='import-divider'>
                    <div className='import-title'>Imported Model Training Data</div>
                    <div className='data-import-container'>
                        <div className='training-data-titles five-column-titles'>Outcome</div>
                        <div className='training-data-titles five-column-titles'>{firstCategory}</div>
                        <div className='training-data-titles five-column-titles'>{secondCategory}</div>
                        <div className='training-data-titles five-column-titles'>{thirdCategory}</div>
                        <div className='training-data-titles five-column-titles'>{fourthCategory}</div>
                    </div>
                    {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))}
                </div>
            )
        } else if( trainingCategories === 5) {
            return(
                <div className='import-divider'>
                    <div className='import-title'>Imported Model Training Data</div>
                    <div className='data-import-container'>
                        <div className='training-data-titles six-column-titles'>Outcome</div>
                        <div className='training-data-titles six-column-titles'>{firstCategory}</div>
                        <div className='training-data-titles six-column-titles'>{secondCategory}</div>
                        <div className='training-data-titles six-column-titles'>{thirdCategory}</div>
                        <div className='training-data-titles six-column-titles'>{fourthCategory}</div>
                        <div className='training-data-titles six-column-titles'>{fifthCategory}</div>
                    </div>
                    {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))}
                </div>
            )
        } else {
            return(
                <div className='import-divider'>
                    <div className='import-title'>Imported Model Training Data</div>
                    <div className='data-import-container'>
                        <div className='training-data-titles seven-column-titles'>Outcome</div>
                        <div className='training-data-titles seven-column-titles'>{firstCategory}</div>
                        <div className='training-data-titles seven-column-titles'>{secondCategory}</div>
                        <div className='training-data-titles seven-column-titles'>{thirdCategory}</div>
                        <div className='training-data-titles seven-column-titles'>{fourthCategory}</div>
                        <div className='training-data-titles seven-column-titles'>{fifthCategory}</div>
                        <div className='training-data-titles seven-column-titles'>{sixthCategory}</div>
                    </div>
                    {trainingData.map(data => (
                        <Data key={data.id} {...data} />
                    ))}
                </div>
            )
        } 
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getData })(ImportData)