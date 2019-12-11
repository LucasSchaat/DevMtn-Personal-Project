import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ImportData from '../ImportData/ImportData'
import { saveData, saveBulkUpload } from '../../redux/trainingReducer'
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
            massDataUpload: props.training.bulkDownload.massDataUpload,
            massUploadCategories: props.training.bulkDownload.bulkCategoryCount,
            massDataArray: props.training.bulkDownload.bulkDataArray,
            massPreppedData: props.training.bulkDownload.bulkTrainingData,
            uniqueOutcomeValues: props.training.bulkDownload.uniqueOutcomeValues,
            uniqueFirstCategoryValues: props.training.bulkDownload.uniqueFirstCategoryValues,
            uniqueSecondCategoryValues: props.training.bulkDownload.uniqueSecondCategoryValues,
            uniqueThirdCategoryValues: props.training.bulkDownload.uniqueThirdCategoryValues,
            uniqueFourthCategoryValues: props.training.bulkDownload.uniqueFourthCategoryValues,
            uniqueFifthCategoryValues: props.training.bulkDownload.uniqueFifthCategoryValues,
            uniqueSixthCategoryValues: props.training.bulkDownload.uniqueSixthCategoryValues,
            massDataSaved: false
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
            massPreppedData: [],
            massUploadCategories: 0,
            uniqueOutcomeValues: [],
            uniqueFirstCategoryValues: [],
            uniqueSecondCategoryValues: [],
            uniqueThirdCategoryValues: [],
            uniqueFourthCategoryValues: [],
            uniqueFifthCategoryValues: [],
            uniqueSixthCategoryValues: []
        }, () => {
            this.props.saveBulkUpload(
                this.state.massDataArray,
                this.state.massDataUpload,
                this.state.massPreppedData,
                this.state.massUploadCategories,
                this.state.uniqueOutcomeValues,
                this.state.uniqueFirstCategoryValues,
                this.state.uniqueSecondCategoryValues,
                this.state.uniqueThirdCategoryValues,
                this.state.uniqueFourthCategoryValues,
                this.state.uniqueFifthCategoryValues,
                this.state.uniqueSixthCategoryValues
             )
        })
    }
    
    massUploadEditToggle = () => {
        this.setState ({ massDataSaved: !this.state.massDataSaved })
    }
    
    saveMassUpload = () => {
        let { massDataArray } = this.state
        const dataArray = JSON.parse(massDataArray)
        let categoryNames = Object.keys(dataArray[0])
        this.setState ({ massUploadCategories: categoryNames.length })
        let allValues = []
        for (let i=0; i<dataArray.length; i++) {
            allValues.push(Object.values(dataArray[i]))
        }
        
        if (categoryNames.length === 2) {
            let outcomeCategoryValues = allValues.map(data => data[0])
            let uniqueOutcomeCategoryValuesArray = [this.props.training.categories.secondOutcome, this.props.training.categories.firstOutcome]
            
            let firstCategoryValues = allValues.map(data => data[1])
            let uniqueFirstCategoryValuesArray = [...new Set(firstCategoryValues)]

            let firstCategoryName = this.props.training.categories.firstCategory

            let transformedData = []
            for (let i=0; i<firstCategoryValues.length; i++) {
                transformedData.push({
                    outcome: uniqueOutcomeCategoryValuesArray.indexOf(outcomeCategoryValues[i]),
                    [firstCategoryName]: uniqueFirstCategoryValuesArray.indexOf(firstCategoryValues[i])
                })
            }
            this.setState ({ 
                massPreppedData: transformedData,
                massUploadCategories: categoryNames.length - 1,
                uniqueOutcomeValues: uniqueOutcomeCategoryValuesArray,
                uniqueFirstCategoryValues: uniqueFirstCategoryValuesArray,
                massDataSaved: true
             }, () => {
                this.props.saveBulkUpload(
                    this.state.massDataArray,
                    this.state.massDataUpload,
                    this.state.massPreppedData,
                    this.state.massUploadCategories,
                    this.state.uniqueOutcomeValues,
                    this.state.uniqueFirstCategoryValues,
                    this.state.uniqueSecondCategoryValues,
                    this.state.uniqueThirdCategoryValues,
                    this.state.uniqueFourthCategoryValues,
                    this.state.uniqueFifthCategoryValues,
                    this.state.uniqueSixthCategoryValues
                 )
             })
        } else if (categoryNames.length === 3) {
            let outcomeCategoryValues = allValues.map(data => data[0])
            let uniqueOutcomeCategoryValuesArray = [this.props.training.categories.secondOutcome, this.props.training.categories.firstOutcome]
            
            let firstCategoryValues = allValues.map(data => data[1])
            let uniqueFirstCategoryValuesArray = [...new Set(firstCategoryValues)]
            
            let secondCategoryValues = allValues.map(data => data[1])
            let uniqueSecondCategoryValuesArray = [...new Set(secondCategoryValues)]

            let firstCategoryName = this.props.training.categories.firstCategory
            let secondCategoryName = this.props.training.categories.secondCategory

            let transformedData = []
            for (let i=0; i<firstCategoryValues.length; i++) {
                transformedData.push({
                    outcome: uniqueOutcomeCategoryValuesArray.indexOf(outcomeCategoryValues[i]),
                    [firstCategoryName]: uniqueFirstCategoryValuesArray.indexOf(firstCategoryValues[i]),
                    [secondCategoryName]: uniqueSecondCategoryValuesArray.indexOf(secondCategoryValues[i])
                })
            }
            this.setState ({ 
                massPreppedData: transformedData,
                massUploadCategories: categoryNames.length - 1,
                uniqueOutcomeValues: uniqueOutcomeCategoryValuesArray,
                uniqueFirstCategoryValues: uniqueFirstCategoryValuesArray,
                uniqueSecondCategoryValues: uniqueSecondCategoryValuesArray,
                massDataSaved: true
             }, () => {
                this.props.saveBulkUpload(
                    this.state.massDataArray,
                    this.state.massDataUpload,
                    this.state.massPreppedData,
                    this.state.massUploadCategories,
                    this.state.uniqueOutcomeValues,
                    this.state.uniqueFirstCategoryValues,
                    this.state.uniqueSecondCategoryValues,
                    this.state.uniqueThirdCategoryValues,
                    this.state.uniqueFourthCategoryValues,
                    this.state.uniqueFifthCategoryValues,
                    this.state.uniqueSixthCategoryValues
                 )
             })
        } else if (categoryNames.length === 4) {
            let outcomeCategoryValues = allValues.map(data => data[0])
            let uniqueOutcomeCategoryValuesArray = [this.props.training.categories.secondOutcome, this.props.training.categories.firstOutcome]
            
            let firstCategoryValues = allValues.map(data => data[1])
            let uniqueFirstCategoryValuesArray = [...new Set(firstCategoryValues)]
            
            let secondCategoryValues = allValues.map(data => data[1])
            let uniqueSecondCategoryValuesArray = [...new Set(secondCategoryValues)]
            
            let thirdCategoryValues = allValues.map(data => data[1])
            let uniqueThirdCategoryValuesArray = [...new Set(thirdCategoryValues)]

            let firstCategoryName = this.props.training.categories.firstCategory
            let secondCategoryName = this.props.training.categories.secondCategory
            let thirdCategoryName = this.props.training.categories.thirdCategory

            let transformedData = []
            for (let i=0; i<firstCategoryValues.length; i++) {
                transformedData.push({
                    outcome: uniqueOutcomeCategoryValuesArray.indexOf(outcomeCategoryValues[i]),
                    [firstCategoryName]: uniqueFirstCategoryValuesArray.indexOf(firstCategoryValues[i]),
                    [secondCategoryName]: uniqueSecondCategoryValuesArray.indexOf(secondCategoryValues[i]),
                    [thirdCategoryName]: uniqueThirdCategoryValuesArray.indexOf(thirdCategoryValues[i])
                })
            }
            this.setState ({ 
                massPreppedData: transformedData,
                massUploadCategories: categoryNames.length - 1,
                uniqueOutcomeValues: uniqueOutcomeCategoryValuesArray,
                uniqueFirstCategoryValues: uniqueFirstCategoryValuesArray,
                uniqueSecondCategoryValues: uniqueSecondCategoryValuesArray,
                uniqueThirdCategoryValues: uniqueThirdCategoryValuesArray,
                massDataSaved: true
             }, () => {
                this.props.saveBulkUpload(
                    this.state.massDataArray,
                    this.state.massDataUpload,
                    this.state.massPreppedData,
                    this.state.massUploadCategories,
                    this.state.uniqueOutcomeValues,
                    this.state.uniqueFirstCategoryValues,
                    this.state.uniqueSecondCategoryValues,
                    this.state.uniqueThirdCategoryValues,
                    this.state.uniqueFourthCategoryValues,
                    this.state.uniqueFifthCategoryValues,
                    this.state.uniqueSixthCategoryValues
                 )
             })
        } else if (categoryNames.length === 5) {
            let outcomeCategoryValues = allValues.map(data => data[0])
            let uniqueOutcomeCategoryValuesArray = [this.props.training.categories.secondOutcome, this.props.training.categories.firstOutcome]
            
            let firstCategoryValues = allValues.map(data => data[1])
            let uniqueFirstCategoryValuesArray = [...new Set(firstCategoryValues)]
            
            let secondCategoryValues = allValues.map(data => data[1])
            let uniqueSecondCategoryValuesArray = [...new Set(secondCategoryValues)]
            
            let thirdCategoryValues = allValues.map(data => data[1])
            let uniqueThirdCategoryValuesArray = [...new Set(thirdCategoryValues)]
            
            let fourthCategoryValues = allValues.map(data => data[1])
            let uniqueFourthCategoryValuesArray = [...new Set(fourthCategoryValues)]

            let firstCategoryName = this.props.training.categories.firstCategory
            let secondCategoryName = this.props.training.categories.secondCategory
            let thirdCategoryName = this.props.training.categories.thirdCategory
            let fourthCategoryName = this.props.training.categories.fourthCategory

            let transformedData = []
            for (let i=0; i<firstCategoryValues.length; i++) {
                transformedData.push({
                    outcome: uniqueOutcomeCategoryValuesArray.indexOf(outcomeCategoryValues[i]),
                    [firstCategoryName]: uniqueFirstCategoryValuesArray.indexOf(firstCategoryValues[i]),
                    [secondCategoryName]: uniqueSecondCategoryValuesArray.indexOf(secondCategoryValues[i]),
                    [thirdCategoryName]: uniqueThirdCategoryValuesArray.indexOf(thirdCategoryValues[i]),
                    [fourthCategoryName]: uniqueFourthCategoryValuesArray.indexOf(fourthCategoryValues[i])
                })
            }
            this.setState ({ 
                massPreppedData: transformedData,
                massUploadCategories: categoryNames.length - 1,
                uniqueOutcomeValues: uniqueOutcomeCategoryValuesArray,
                uniqueFirstCategoryValues: uniqueFirstCategoryValuesArray,
                uniqueSecondCategoryValues: uniqueSecondCategoryValuesArray,
                uniqueThirdCategoryValues: uniqueThirdCategoryValuesArray,
                uniqueFourthCategoryValues: uniqueFourthCategoryValuesArray,
                massDataSaved: true
             }, () => {
                this.props.saveBulkUpload(
                    this.state.massDataArray,
                    this.state.massDataUpload,
                    this.state.massPreppedData,
                    this.state.massUploadCategories,
                    this.state.uniqueOutcomeValues,
                    this.state.uniqueFirstCategoryValues,
                    this.state.uniqueSecondCategoryValues,
                    this.state.uniqueThirdCategoryValues,
                    this.state.uniqueFourthCategoryValues,
                    this.state.uniqueFifthCategoryValues,
                    this.state.uniqueSixthCategoryValues
                 )
             })
        } else if (categoryNames.length === 6) {
            let outcomeCategoryValues = allValues.map(data => data[0])
            let uniqueOutcomeCategoryValuesArray = [this.props.training.categories.secondOutcome, this.props.training.categories.firstOutcome]
            
            let firstCategoryValues = allValues.map(data => data[1])
            let uniqueFirstCategoryValuesArray = [...new Set(firstCategoryValues)]
            
            let secondCategoryValues = allValues.map(data => data[1])
            let uniqueSecondCategoryValuesArray = [...new Set(secondCategoryValues)]
            
            let thirdCategoryValues = allValues.map(data => data[1])
            let uniqueThirdCategoryValuesArray = [...new Set(thirdCategoryValues)]
            
            let fourthCategoryValues = allValues.map(data => data[1])
            let uniqueFourthCategoryValuesArray = [...new Set(fourthCategoryValues)]
            
            let fifthCategoryValues = allValues.map(data => data[1])
            let uniqueFifthCategoryValuesArray = [...new Set(fifthCategoryValues)]

            let firstCategoryName = this.props.training.categories.firstCategory
            let secondCategoryName = this.props.training.categories.secondCategory
            let thirdCategoryName = this.props.training.categories.thirdCategory
            let fourthCategoryName = this.props.training.categories.fourthCategory
            let fifthCategoryName = this.props.training.categories.fifthCategory

            let transformedData = []
            for (let i=0; i<firstCategoryValues.length; i++) {
                transformedData.push({
                    outcome: uniqueOutcomeCategoryValuesArray.indexOf(outcomeCategoryValues[i]),
                    [firstCategoryName]: uniqueFirstCategoryValuesArray.indexOf(firstCategoryValues[i]),
                    [secondCategoryName]: uniqueSecondCategoryValuesArray.indexOf(secondCategoryValues[i]),
                    [thirdCategoryName]: uniqueThirdCategoryValuesArray.indexOf(thirdCategoryValues[i]),
                    [fourthCategoryName]: uniqueFourthCategoryValuesArray.indexOf(fourthCategoryValues[i]),
                    [fifthCategoryName]: uniqueFifthCategoryValuesArray.indexOf(fifthCategoryValues[i])
                })
            }
            this.setState ({ 
                massPreppedData: transformedData,
                massUploadCategories: categoryNames.length - 1,
                uniqueOutcomeValues: uniqueOutcomeCategoryValuesArray,
                uniqueFirstCategoryValues: uniqueFirstCategoryValuesArray,
                uniqueSecondCategoryValues: uniqueSecondCategoryValuesArray,
                uniqueThirdCategoryValues: uniqueThirdCategoryValuesArray,
                uniqueFourthCategoryValues: uniqueFourthCategoryValuesArray,
                uniqueFifthCategoryValues: uniqueFifthCategoryValuesArray,
                massDataSaved: true
             }, () => {
                this.props.saveBulkUpload(
                    this.state.massDataArray,
                    this.state.massDataUpload,
                    this.state.massPreppedData,
                    this.state.massUploadCategories,
                    this.state.uniqueOutcomeValues,
                    this.state.uniqueFirstCategoryValues,
                    this.state.uniqueSecondCategoryValues,
                    this.state.uniqueThirdCategoryValues,
                    this.state.uniqueFourthCategoryValues,
                    this.state.uniqueFifthCategoryValues,
                    this.state.uniqueSixthCategoryValues
                 )
             })
        } else {
            let outcomeCategoryValues = allValues.map(data => data[0])
            let uniqueOutcomeCategoryValuesArray = [this.props.training.categories.secondOutcome, this.props.training.categories.firstOutcome]
            
            let firstCategoryValues = allValues.map(data => data[1])
            let uniqueFirstCategoryValuesArray = [...new Set(firstCategoryValues)]
            
            let secondCategoryValues = allValues.map(data => data[1])
            let uniqueSecondCategoryValuesArray = [...new Set(secondCategoryValues)]
            
            let thirdCategoryValues = allValues.map(data => data[1])
            let uniqueThirdCategoryValuesArray = [...new Set(thirdCategoryValues)]
            
            let fourthCategoryValues = allValues.map(data => data[1])
            let uniqueFourthCategoryValuesArray = [...new Set(fourthCategoryValues)]
            
            let fifthCategoryValues = allValues.map(data => data[1])
            let uniqueFifthCategoryValuesArray = [...new Set(fifthCategoryValues)]
            
            let sixthCategoryValues = allValues.map(data => data[1])
            let uniqueSixthCategoryValuesArray = [...new Set(sixthCategoryValues)]

            let firstCategoryName = this.props.training.categories.firstCategory
            let secondCategoryName = this.props.training.categories.secondCategory
            let thirdCategoryName = this.props.training.categories.thirdCategory
            let fourthCategoryName = this.props.training.categories.fourthCategory
            let fifthCategoryName = this.props.training.categories.fifthCategory
            let sixthCategoryName = this.props.training.categories.sixthCategory

            let transformedData = []
            for (let i=0; i<firstCategoryValues.length; i++) {
                transformedData.push({
                    outcome: uniqueOutcomeCategoryValuesArray.indexOf(outcomeCategoryValues[i]),
                    [firstCategoryName]: uniqueFirstCategoryValuesArray.indexOf(firstCategoryValues[i]),
                    [secondCategoryName]: uniqueSecondCategoryValuesArray.indexOf(secondCategoryValues[i]),
                    [thirdCategoryName]: uniqueThirdCategoryValuesArray.indexOf(thirdCategoryValues[i]),
                    [fourthCategoryName]: uniqueFourthCategoryValuesArray.indexOf(fourthCategoryValues[i]),
                    [fifthCategoryName]: uniqueFifthCategoryValuesArray.indexOf(fifthCategoryValues[i]),
                    [sixthCategoryName]: uniqueSixthCategoryValuesArray.indexOf(sixthCategoryValues[i])
                })
            }
            this.setState ({ 
                massPreppedData: transformedData,
                massUploadCategories: categoryNames.length - 1,
                uniqueOutcomeValues: uniqueOutcomeCategoryValuesArray,
                uniqueFirstCategoryValues: uniqueFirstCategoryValuesArray,
                uniqueSecondCategoryValues: uniqueSecondCategoryValuesArray,
                uniqueThirdCategoryValues: uniqueThirdCategoryValuesArray,
                uniqueFourthCategoryValues: uniqueFourthCategoryValuesArray,
                uniqueFifthCategoryValues: uniqueFifthCategoryValuesArray,
                uniqueSixthCategoryValues: uniqueSixthCategoryValuesArray,
                massDataSaved: true
             }, () => {
                this.props.saveBulkUpload(
                    this.state.massDataArray,
                    this.state.massDataUpload,
                    this.state.massPreppedData,
                    this.state.massUploadCategories,
                    this.state.uniqueOutcomeValues,
                    this.state.uniqueFirstCategoryValues,
                    this.state.uniqueSecondCategoryValues,
                    this.state.uniqueThirdCategoryValues,
                    this.state.uniqueFourthCategoryValues,
                    this.state.uniqueFifthCategoryValues,
                    this.state.uniqueSixthCategoryValues
                 )
             })
        }
    }

    save = () => {
        this.props.saveData(
            this.props.user.user.id,
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

        if (massDataUpload === true && this.state.massDataSaved === false) {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='outcome-description upload-title-2'>Because this will be a bulk data upload, please paste the data in JSON format with Outcome as the first category variable</div>
                            <div className='upload-outcome-container-2'>
                                <textarea className='main-inputs upload-data-inputs-2' value={massDataArray} name='massDataArray' onChange={this.handleChange} placeholder='Make sure to input the data in JSON format and only includes up to six variables!' />
                            </div>
                            <button className='main-button upload-data-button mass-training-save-button' onClick={this.saveMassUpload}>Import JSON Data</button>
                            <button className='main-button upload-data-button-2 import-training-method-toggle' onClick={this.massUploadToggle}>Import Individual Data Points</button>
                        </div>
                    </div>
                    <div className='previous-next-button-container'>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/training_variables')}>Previous Step</button>
                        <button className='next-previous-buttons' onClick={() => this.props.history.push('/dashboard/test_model')}>Test Your Model</button>
                    </div>
                </div>
                )
        } else if (massDataUpload === true && this.state.massDataSaved === true) {
            return (
                <div>
                    <div className='testing-data-container'>
                        <div className='import-page-display'>
                            <div className='outcome-description upload-title'>Now Let's Import Some Data for Use in Training the Model</div>
                            <div className='outcome-description upload-title-2'>Because This Will be a Mass Upload, Please Input the Data in JSON Format with the Outcome as the First Category Variable</div>
                            <div className='upload-outcome-container-2'>
                                <div className='outcome-description upload-title-3'>Data Saved!</div>
                                <div className='outcome-description upload-title-3'>Press the "Test Your Model" button to continue</div>
                            </div>
                            <button className='main-button upload-data-button-3' onClick={this.massUploadEditToggle}>Edit Imported Data</button>
                            <button className='main-button upload-data-button-2 import-training-method-toggle' onClick={this.massUploadToggle}>Import Individual Data Points</button>
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
                                <input className='main-inputs upload-data-inputs outcome-training-input' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{firstCategory}</div>
                                    <input className='main-inputs upload-data-inputs first-category-training-input' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                                </div>
                            </div>
                            <button className='main-button upload-data-button save-training-input-button' onClick={this.save}>Import Data</button>
                            <button className='main-button upload-data-button-2 mass-training-import-button' onClick={this.massUploadToggle}>Import Data Using a JSON File</button>
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
                                <input className='main-inputs upload-data-inputs outcome-training-input' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{firstCategory}</div>
                                    <input className='main-inputs upload-data-inputs first-category-training-input' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
                                </div>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{secondCategory}</div>
                                    <input className='main-inputs upload-data-inputs' value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: Brown' />
                                </div>
                            </div>
                            <button className='main-button upload-data-button save-training-input-button' onClick={this.save}>Import Data</button>
                            <button className='main-button upload-data-button-2 mass-training-import-button' onClick={this.massUploadToggle}>Import Data Using a JSON File</button>
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
                                <input className='main-inputs upload-data-inputs outcome-training-input' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{firstCategory}</div>
                                    <input className='main-inputs upload-data-inputs first-category-training-input' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
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
                            <button className='main-button upload-data-button save-training-input-button' onClick={this.save}>Import Data</button>
                            <button className='main-button upload-data-button-2 mass-training-import-button' onClick={this.massUploadToggle}>Import Data Using a JSON File</button>
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
                                <input className='main-inputs upload-data-inputs outcome-training-input' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{firstCategory}</div>
                                    <input className='main-inputs upload-data-inputs first-category-training-input' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
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
                            <button className='main-button upload-data-button save-training-input-button' onClick={this.save}>Import Data</button>
                            <button className='main-button upload-data-button-2 mass-training-import-button' onClick={this.massUploadToggle}>Import Data Using a JSON File</button>
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
                                <input className='main-inputs upload-data-inputs outcome-training-input' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{firstCategory}</div>
                                    <input className='main-inputs upload-data-inputs first-category-training-input' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
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
                            <button className='main-button upload-data-button save-training-input-button' onClick={this.save}>Import Data</button>
                            <button className='main-button upload-data-button-2 mass-training-import-button' onClick={this.massUploadToggle}>Import Data Using a JSON File</button>
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
                                <input className='main-inputs upload-data-inputs outcome-training-input' value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                            </div>
                            <div className='upload-data-container'>
                                <div className='upload-category-input-box'>
                                    <div className='upload-data-categories'>{firstCategory}</div>
                                    <input className='main-inputs upload-data-inputs first-category-training-input' value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange} placeholder='Ex: 26' />
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
                            <button className='main-button upload-data-button save-training-input-button' onClick={this.save}>Import Data</button>
                            <button className='main-button upload-data-button-2 mass-training-import-button' onClick={this.massUploadToggle}>Import Data Using a JSON File</button>
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

export default connect(mapStateToProps, { saveData, saveBulkUpload })(withRouter(UploadData))