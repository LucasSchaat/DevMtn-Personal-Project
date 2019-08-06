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
            outcomeValue: '',
            massDataUpload: false,
            massUploadCategories: 0,
            massDataArray:[],
            massPreppedData: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.render()
        }
    }
    
    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
    }

    massUploadToggle = () => {
        this.setState ({
            massDataUpload: !this.state.massDataUpload,
            massDataArray: [],
            massPreppedData: []
        })
    }
    
    saveMassUpload = () => {
        let { massDataArray, massUploadCategories } = this.state

        let dataArray = JSON.parse(massDataArray)
        let categoryNames = Object.keys(dataArray[0])
        this.setState ({ massUploadCategories: categoryNames.length })
        let allValues = []
        for (let i=0; i<massDataArray.length; i++) {
            allValues.push(Object.values(massDataArray[i]))
        }

        console.log('dataArray', dataArray)
        console.log(categoryNames)
        console.log(massUploadCategories)

        if (massUploadCategories === 2) {
            console.log('Save Mass Upload Button Hit at #1!')
            let firstCategoryValues = allValues.map(data => data[0])
            let uniqueFirstCategoryValues = [...new Set(firstCategoryValues)]
            let firstCategoryName = categoryNames[0]
            let transformedData = []
            for (let i=0; i<firstCategoryValues.length; i++) {
                transformedData.push({
                    [firstCategoryName]: firstCategoryValues.indexOf(firstCategoryValues[i])
                })
            }
            this.setState ({ massPreppedData: transformedData })
            console.log(this.state)
            console.log(this.massDataArray)
            console.log(this.state.massPreppedData)
        } else if (massUploadCategories === 3) {
            console.log('Save Mass Upload Button Hit at #2!')
        } else if (massUploadCategories === 4) {
            console.log('Save Mass Upload Button Hit at #3!')
        } else if (massUploadCategories === 5) {
            console.log('Save Mass Upload Button Hit at #4!')
        } else if (massUploadCategories === 6) {
            console.log('Save Mass Upload Button Hit at #5!')
        } else {
            console.log('Save Mass Upload Button Hit at #6!')
        }
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
            outcomeValue,
            massDataUpload,
            massDataArray
        } = this.state

        let {
            firstCategory,
            secondCategory,
            thirdCategory,
            fourthCategory,
            fifthCategory,
            sixthCategory
        } = this.props.training.categories

        if (massDataUpload === true) {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='outcome-description upload-title-2'>Because This Will be a Mass Upload, Please Input the Data in JSON Format</div>
                            <div className='upload-outcome-container-2'>
                                <textarea className='main-inputs upload-data-inputs-2' value={massDataArray} name='massDataArray' onChange={this.handleChange} placeholder='Make sure to input the data in JSON format!' />
                            </div>
                            <button className='main-button upload-data-button' onClick={this.saveMassUpload}>Import JSON Data</button>
                            <button className='main-button upload-data-button-2' onClick={this.massUploadToggle}>Import Individual Data Points</button>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                    </div>
                </div>
                )
        } else if (trainingCategories === 1) {
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
                            <button className='main-button upload-data-button-2' onClick={this.massUploadToggle}>Import Data Using a JSON File</button>
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