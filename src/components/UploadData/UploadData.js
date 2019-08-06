import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ImportData from '../ImportData/ImportData'
import { saveData } from '../../redux/trainingReducer'
import './UploadData.css'

class UploadData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataImports: props.user.user.dataImports,
            trainingCategories: props.user.user.trainingCategories,
            firstCategoryValue: '',
            secondCategoryValue: '',
            thirdCategoryValue: '',
            fourthCategoryValue: '',
            fifthCategoryValue: '',
            sixthCategoryValue: '',
            outcomeValue: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
    }

    save = () => {
        this.props.saveData(
            this.state.dataImports,
            this.state.trainingCategories,
            this.state.outcomeValue,
            this.state.firstCategoryValue,
            this.state.secondCategoryValue,
            this.state.thirdCategoryValue,
            this.state.fourthCategoryValue,
            this.state.fifthCategoryValue,
            this.state.sixthCategoryValue,
            this.props.training.categories.firstOutcome,
            this.props.training.categories.secondOutcome
            )
        this.props.user.user.dataImports += 1
        this.setState({
            dataImports: this.props.user.user.dataImports,
            firstCategoryValue: '',
            secondCategoryValue: '',
            thirdCategoryValue: '',
            fourthCategoryValue: '',
            fifthCategoryValue: '',
            sixthCategoryValue: '',
            outcomeValue: '',
        })
    }

    render() {
        let {
            trainingCategories,
            firstCategoryValue,
            secondCategoryValue,
            thirdCategoryValue,
            fourthCategoryValue,
            fifthCategoryValue,
            sixthCategoryValue,
            outcomeValue
        } = this.state

        let {
            firstCategory,
            secondCategory,
            thirdCategory,
            fourthCategory,
            fifthCategory,
            sixthCategory
        } = this.props.training.categories

        if (trainingCategories === 1) {
        return (
            <div>
                <div className='testing-data-container'>
                    <div className='import-page-display'>
                        <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                        <div className='upload-outcome-container'>
                            <div className='upload-data-categories'>Outcome</div>
                            <input className='main-inputs upload-data-inputs' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                        </div>
                        <div className='upload-data-container'>
                            <div className='upload-category-input-box'>
                                <div className='upload-data-categories'>{firstCategory}</div>
                                <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                            </div>
                        </div>
                        <button className='main-button upload-data-button' onClick={this.save}>Import Data</button>
                    </div>
                    <ImportData />
                </div>
                <div className='previous-next-button-container'>
                    <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                    <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                </div>
            </div>
            )
        } else if (trainingCategories === 2) {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='upload-outcome-container'>
                                <div className='upload-data-categories'>Outcome</div>
                                <input className='main-inputs upload-data-inputs' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{firstCategory}</div>
                                    <input className='main-inputs upload-data-inputs' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                                </div>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{secondCategory}</div>
                                    <input className='main-inputs upload-data-inputs' value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Brown' />
                                </div>
                            </div>
                            <button className='main-button upload-data-button' onClick={this.save}>Import Data</button>
                        </div>
                        <ImportData />
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 3) {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='upload-outcome-container'>
                                <div className='upload-data-categories'>Outcome</div>
                                <input className='main-inputs upload-data-inputs' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
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
                            </div>
                            <button className='main-button upload-data-button' onClick={this.save}>Import Data</button>
                        </div>
                        <ImportData />
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 4) {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='upload-outcome-container'>
                                <div className='upload-data-categories'>Outcome</div>
                                <input className='main-inputs upload-data-inputs' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
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
                            </div>
                            <button className='main-button upload-data-button' onClick={this.save}>Import Data</button>
                        </div>
                        <ImportData />
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                    </div>
                </div>
            )
        } else if (trainingCategories === 5) {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='upload-outcome-container'>
                                <div className='upload-data-categories'>Outcome</div>
                                <input className='main-inputs upload-data-inputs' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
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
                            </div>
                            <button className='main-button upload-data-button' onClick={this.save}>Import Data</button>
                        </div>
                        <ImportData />
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='upload-outcome-container'>
                                <div className='upload-data-categories'>Outcome</div>
                                <input className='main-inputs upload-data-inputs' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
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
                                    <input className='main-inputs upload-data-inputs' value={sixthCategoryValue} name='sixthCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                                </div>
                            </div>
                            <button className='main-button upload-data-button' onClick={this.save}>Import Data</button>
                        </div>
                        <ImportData />
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { saveData })(withRouter(UploadData))