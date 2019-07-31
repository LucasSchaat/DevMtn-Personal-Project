import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveTestingData } from '../../redux/testingReducer'

class TestModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainingCategories: props.user.user.trainingCategories,
            firstCategoryValue: props.testing.testingData[0].first_category,
            secondCategoryValue: props.testing.testingData[0].second_category,
            thirdCategoryValue: props.testing.testingData[0].third_category,
            fourthCategoryValue: props.testing.testingData[0].fourth_category,
            fifthCategoryValue: props.testing.testingData[0].fifth_category,
            sixthCategoryValue: props.testing.testingData[0].sixth_category
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.render()
        }
    }
    
    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    saveAndTest = async () => {
        await this.props.saveTestingData(
            this.props.user.user.trainingCategories,
            this.state.firstCategoryValue,
            this.state.secondCategoryValue,
            this.state.thirdCategoryValue,
            this.state.fourthCategoryValue,
            this.state.fifthCategoryValue,
            this.state.sixthCategoryValue
        )
        console.log('This is where the testing functionality will occur!')

    }

    render() {
        let {
            trainingCategories,
            firstCategoryValue,
            secondCategoryValue,
            thirdCategoryValue,
            fourthCategoryValue,
            fifthCategoryValue,
            sixthCategoryValue
         } = this.state
        let { 
            firstCategory,
            secondCategory,
            thirdCategory,
            fourthCategory,
            fifthCategory,
            sixthCategory
        } = this.props.training.categories
        console.log('this.props.testing', this.props.testing)
        if(trainingCategories === 1) {
            return(
                <div>
                    <div>{firstCategory}</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} />
                    <button onClick={this.saveAndTest}>Save and Test the Model</button>
                </div>
            )
        } else if (trainingCategories === 2) {
            return(
                <div>
                    <div>{firstCategory}</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{secondCategory}</div>
                    <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} />
                    <button onClick={this.saveAndTest}>Save and Test the Model</button>
                </div>
            )
        } else if (trainingCategories === 3) {
            return(
                <div>
                    <div>{firstCategory}</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{secondCategory}</div>
                    <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{thirdCategory}</div>
                    <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} />
                    <button onClick={this.saveAndTest}>Save and Test the Model</button>
                </div>
            )
        } else if (trainingCategories === 4) {
            return(
                <div>
                    <div>{firstCategory}</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{secondCategory}</div>
                    <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{thirdCategory}</div>
                    <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{fourthCategory}</div>
                    <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange} />
                    <button onClick={this.saveAndTest}>Save and Test the Model</button>
                </div>
            )
        } else if (trainingCategories === 5) {
            return(
                <div>
                    <div>{firstCategory}</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{secondCategory}</div>
                    <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{thirdCategory}</div>
                    <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{fourthCategory}</div>
                    <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{fifthCategory}</div>
                    <input value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange} />
                    <button onClick={this.saveAndTest}>Save and Test the Model</button>
                </div>
            )
        } else {
            return(
                <div>
                    <div>{firstCategory}</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{secondCategory}</div>
                    <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{thirdCategory}</div>
                    <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{fourthCategory}</div>
                    <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{fifthCategory}</div>
                    <input value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange} />
                    <div>{sixthCategory}</div>
                    <input value={sixthCategoryValue} name='sixthCategoryValue' type='text' onChange={this.handleChange} />
                    <button onClick={this.saveAndTest}>Save and Test the Model</button>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { saveTestingData })(TestModel)