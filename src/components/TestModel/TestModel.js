import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setupDatabase, firstReduxLogout } from '../../redux/trainingReducer'
import { saveTestingData, runModel, secondReduxLogout } from '../../redux/testingReducer'
import './TestModel.css'

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
            sixthCategoryValue: props.testing.testingData[0].sixth_category,
            result: props.testing.result
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

    save = async () => {
        await this.props.saveTestingData(
            this.props.user.user.trainingCategories,
            this.state.firstCategoryValue,
            this.state.secondCategoryValue,
            this.state.thirdCategoryValue,
            this.state.fourthCategoryValue,
            this.state.fifthCategoryValue,
            this.state.sixthCategoryValue
        )
        await this.props.runModel(this.props.user.user.trainingCategories)
    }

    retestModel = () => {
        this.props.testing.result = []
        this.setState ({ result: this.props.testing.result })
    }

    testNewModel = () => {
        this.props.setupDatabase()
        this.props.firstReduxLogout()
        this.props.secondReduxLogout()
        this.props.history.push('/dashboard')
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
        let { result } = this.props.testing
        if(trainingCategories === 1 && !result.length) {
            return(
                <div>
                    <div className='testing-data-container'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title test-model-title-adj'>Now Let's Use the Model in a Sample Scenario to Find the Probability of the Occurrence of a Desired Outcome</div>
                            <div className='outcome-description upload-title scenario-title-adj'>Scenario Parameters</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                            </div>
                        <button className='test-model-button' onClick={this.save}>Test the Model</button>
                        </div>
                    </div>
                    <div className='back-to-input-button-container'>
                        <button className='back-to-input-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Previous Step</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 2 && !result.length) {
            return(
                <div>
                    <div className='testing-data-container'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title test-model-title-adj'>Now Let's Use the Model in a Sample Scenario to Find the Probability of the Occurrence of a Desired Outcome</div>
                            <div className='outcome-description upload-title scenario-title-adj'>Scenario Parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Brown' />
                            </div>
                        <button className='test-model-button' onClick={this.save}>Test the Model</button>
                        </div>
                    </div>
                    <div className='back-to-input-button-container'>
                        <button className='back-to-input-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Previous Step</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 3 && !result.length) {
            return(
                <div>
                    <div className='testing-data-container'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title test-model-title-adj'>Now Let's Use the Model in a Sample Scenario to Find the Probability of the Occurrence of a Desired Outcome</div>
                            <div className='outcome-description upload-title scenario-title-adj'>Scenario Parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Brown' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Blue' />
                            </div>
                        <button className='test-model-button' onClick={this.save}>Test the Model</button>
                        </div>
                    </div>
                    <div className='back-to-input-button-container'>
                        <button className='back-to-input-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Previous Step</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 4 && !result.length) {
            return(
                <div>
                    <div className='testing-data-container'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title test-model-title-adj'>Now Let's Use the Model in a Sample Scenario to Find the Probability of the Occurrence of a Desired Outcome</div>
                            <div className='outcome-description upload-title scenario-title-adj'>Scenario Parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Brown' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Blue' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fourthCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Short' />
                            </div>
                        <button className='test-model-button' onClick={this.save}>Test the Model</button>
                        </div>
                    </div>
                    <div className='back-to-input-button-container'>
                        <button className='back-to-input-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Previous Step</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 5 && !result.length) {
            return(
                <div>
                    <div className='testing-data-container'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title test-model-title-adj'>Now Let's Use the Model in a Sample Scenario to Find the Probability of the Occurrence of a Desired Outcome</div>
                            <div className='outcome-description upload-title scenario-title-adj'>Scenario Parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Brown' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Blue' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fourthCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Short' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fifthCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                        <button className='test-model-button' onClick={this.save}>Test the Model</button>
                        </div>
                    </div>
                    <div className='back-to-input-button-container'>
                        <button className='back-to-input-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Previous Step</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 6 && !result.length) {
            return(
                <div>
                    <div className='testing-data-container'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title test-model-title-adj'>Now Let's Use the Model in a Sample Scenario to Find the Probability of the Occurrence of a Desired Outcome</div>
                            <div className='outcome-description upload-title scenario-title-adj'>Scenario Parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Brown' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Blue' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fourthCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Short' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fifthCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{sixthCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={sixthCategoryValue} name='sixthCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Great!' />
                            </div>
                        <button className='test-model-button' onClick={this.save}>Test the Model</button>
                        </div>
                    </div>
                    <div className='back-to-input-button-container'>
                        <button className='back-to-input-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Previous Step</button>
                    </div>
                </div>
            )
        } else if(trainingCategories === 1 && result[0]) {
            return(
                <div>
                    <div className='testing-data-container-results'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title scenario-title-adj-3'>So, {this.props.training.categories.outcome.charAt(0).toLowerCase() + this.props.training.categories.outcome.slice(1)}</div>
                            <div className='outcome-description upload-title scenario-title-adj-4'>Based on the below parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <div className='test-category-values'>{firstCategoryValue}</div>
                            </div>
                            <div className='outcome-description upload-title scenario-title-adj-5'>The model predicts</div>
                            <div className='outcome-probability-container'>
                                <div>a</div>
                                <div className='outcome-probability'>{Number(this.props.testing.result[0][0]).toLocaleString('en', {style: 'percent', minimumFractionDigits: 2})}</div>
                                <div>probability</div>
                            </div>
                            <div className='outcome-results-text'>that the outcome will be</div>
                            <div className='desired-outcome'>{this.props.training.categories.firstOutcome}</div>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='outcome-buttons' onClick={() => this.retestModel()}>Test Another Scenario</button>
                        <button className='outcome-buttons' onClick={() => this.testNewModel()}>Train a New Model</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 2 && result[0]) {
            return(
                <div>
                    <div className='testing-data-container-results'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title scenario-title-adj-3'>So, {this.props.training.categories.outcome.charAt(0).toLowerCase() + this.props.training.categories.outcome.slice(1)}</div>
                            <div className='outcome-description upload-title scenario-title-adj-4'>Based on the below parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <div className='test-category-values'>{firstCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <div className='test-category-values'>{secondCategoryValue}</div>
                            </div>
                            <div className='outcome-description upload-title scenario-title-adj-5'>The model predicts</div>
                            <div className='outcome-probability-container'>
                                <div>a</div>
                                <div className='outcome-probability'>{Number(this.props.testing.result[0][0]).toLocaleString('en', {style: 'percent', minimumFractionDigits: 2})}</div>
                                <div>probability</div>
                            </div>
                            <div className='outcome-results-text'>that the outcome will be</div>
                            <div className='desired-outcome'>{this.props.training.categories.firstOutcome}</div>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='outcome-buttons' onClick={() => this.retestModel()}>Test Another Scenario</button>
                        <button className='outcome-buttons' onClick={() => this.testNewModel()}>Train a New Model</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 3 && result[0]) {
            return(
                <div>
                    <div className='testing-data-container-results'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title scenario-title-adj-3'>So, {this.props.training.categories.outcome.charAt(0).toLowerCase() + this.props.training.categories.outcome.slice(1)}</div>
                            <div className='outcome-description upload-title scenario-title-adj-4'>Based on the below parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <div className='test-category-values'>{firstCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <div className='test-category-values'>{secondCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <div className='test-category-values'>{thirdCategoryValue}</div>
                            </div>
                            <div className='outcome-description upload-title scenario-title-adj-5'>The model predicts</div>
                            <div className='outcome-probability-container'>
                                <div>a</div>
                                <div className='outcome-probability'>{Number(this.props.testing.result[0][0]).toLocaleString('en', {style: 'percent', minimumFractionDigits: 2})}</div>
                                <div>probability</div>
                            </div>
                            <div className='outcome-results-text'>that the outcome will be</div>
                            <div className='desired-outcome'>{this.props.training.categories.firstOutcome}</div>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='outcome-buttons' onClick={() => this.retestModel()}>Test Another Scenario</button>
                        <button className='outcome-buttons' onClick={() => this.testNewModel()}>Train a New Model</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 4 && result[0]) {
            return(
                <div>
                    <div className='testing-data-container-results'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title scenario-title-adj-3'>So, {this.props.training.categories.outcome.charAt(0).toLowerCase() + this.props.training.categories.outcome.slice(1)}</div>
                            <div className='outcome-description upload-title scenario-title-adj-4'>Based on the below parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <div className='test-category-values'>{firstCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <div className='test-category-values'>{secondCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <div className='test-category-values'>{thirdCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fourthCategory}</div>
                                <div className='test-category-values'>{fourthCategoryValue}</div>
                            </div>
                            <div className='outcome-description upload-title scenario-title-adj-5'>The model predicts</div>
                            <div className='outcome-probability-container'>
                                <div>a</div>
                                <div className='outcome-probability'>{Number(this.props.testing.result[0][0]).toLocaleString('en', {style: 'percent', minimumFractionDigits: 2})}</div>
                                <div>probability</div>
                            </div>
                            <div className='outcome-results-text'>that the outcome will be</div>
                            <div className='desired-outcome'>{this.props.training.categories.firstOutcome}</div>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='outcome-buttons' onClick={() => this.retestModel()}>Test Another Scenario</button>
                        <button className='outcome-buttons' onClick={() => this.testNewModel()}>Train a New Model</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 5 && result[0]) {
            return(
                <div>
                    <div className='testing-data-container-results'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title scenario-title-adj-3'>So, {this.props.training.categories.outcome.charAt(0).toLowerCase() + this.props.training.categories.outcome.slice(1)}</div>
                            <div className='outcome-description upload-title scenario-title-adj-4'>Based on the below parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <div className='test-category-values'>{firstCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <div className='test-category-values'>{secondCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <div className='test-category-values'>{thirdCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fourthCategory}</div>
                                <div className='test-category-values'>{fourthCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fifthCategory}</div>
                                <div className='test-category-values'>{fifthCategoryValue}</div>
                            </div>
                            <div className='outcome-description upload-title scenario-title-adj-5'>The model predicts</div>
                            <div className='outcome-probability-container'>
                                <div>a</div>
                                <div className='outcome-probability'>{Number(this.props.testing.result[0][0]).toLocaleString('en', {style: 'percent', minimumFractionDigits: 2})}</div>
                                <div>probability</div>
                            </div>
                            <div className='outcome-results-text'>that the outcome will be</div>
                            <div className='desired-outcome'>{this.props.training.categories.firstOutcome}</div>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='outcome-buttons' onClick={() => this.retestModel()}>Test Another Scenario</button>
                        <button className='outcome-buttons' onClick={() => this.testNewModel()}>Train a New Model</button>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <div className='testing-data-container-results'>
                        <div className='test-model-container'>
                            <div className='outcome-description upload-title scenario-title-adj-3'>So, {this.props.training.categories.outcome.charAt(0).toLowerCase() + this.props.training.categories.outcome.slice(1)}</div>
                            <div className='outcome-description upload-title scenario-title-adj-4'>Based on the below parameters:</div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <div className='test-category-values'>{firstCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{secondCategory}</div>
                                <div className='test-category-values'>{secondCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{thirdCategory}</div>
                                <div className='test-category-values'>{thirdCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fourthCategory}</div>
                                <div className='test-category-values'>{fourthCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{fifthCategory}</div>
                                <div className='test-category-values'>{fifthCategoryValue}</div>
                            </div>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{sixthCategory}</div>
                                <div className='test-category-values'>{sixthCategoryValue}</div>
                            </div>
                            <div className='outcome-description upload-title scenario-title-adj-5'>The model predicts</div>
                            <div className='outcome-probability-container'>
                                <div>a</div>
                                <div className='outcome-probability'>{Number(this.props.testing.result[0][0]).toLocaleString('en', {style: 'percent', minimumFractionDigits: 2})}</div>
                                <div>probability</div>
                            </div>
                            <div className='outcome-results-text'>that the outcome will be</div>
                            <div className='desired-outcome'>{this.props.training.categories.firstOutcome}</div>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='outcome-buttons' onClick={() => this.retestModel()}>Test Another Scenario</button>
                        <button className='outcome-buttons' onClick={() => this.testNewModel()}>Train a New Model</button>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { saveTestingData, runModel, setupDatabase, firstReduxLogout, secondReduxLogout })(withRouter(TestModel))