import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImportData from '../ImportData/ImportData'
import { saveData } from '../../redux/trainingReducer'

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
        console.log(this.state.dataImports)
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
        console.log('Import Data Button Hit!')
    }

    delete = () => {
        console.log('Delete Button Clicked')
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
            sixthCategory,
            outcome
        } = this.props.training.categories

        if (trainingCategories === 1) {
            return (
                <div>
                    <div>
                        <div>Outcome:</div>
                        <div>{outcome}</div>
                        <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                    </div>
                    <div>Variables:</div>
                    <div>{firstCategory}</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                    <button onClick={this.save}>Import Data</button>
                    <ImportData />
                </div>
            )} else if (trainingCategories === 2) {
                 return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables:</div>
                        <div>{firstCategory}</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{secondCategory}</div>
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Import Data</button>
                        <ImportData />
                    </div>
            )} else if (trainingCategories === 3) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables:</div>
                        <div>{firstCategory}</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{secondCategory}</div>
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{thirdCategory}</div>
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Import Data</button>
                        <ImportData />
                    </div>
            )} else if (trainingCategories === 4) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables:</div>
                        <div>{firstCategory}</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{secondCategory}</div>
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{thirdCategory}</div>
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{fourthCategory}</div>
                        <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Import Data</button>
                        <ImportData />
                    </div>
            )} else if (trainingCategories === 5) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables:</div>
                        <div>{firstCategory}</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{secondCategory}</div>
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{thirdCategory}</div>
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{fourthCategory}</div>
                        <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{fifthCategory}</div>
                        <input value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Import Data</button>
                        <ImportData />
                    </div>
            )} else {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables:</div>
                        <div>{firstCategory}</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{secondCategory}</div>
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{thirdCategory}</div>
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{fourthCategory}</div>
                        <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{fifthCategory}</div>
                        <input value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange}  />
                        <div>{sixthCategory}</div>
                        <input value={sixthCategoryValue} name='sixthCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Import Data</button>
                        <ImportData />
                    </div>
                )
            }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { saveData })(UploadData)