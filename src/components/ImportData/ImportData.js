import React, { Component } from 'react'
import { connect } from 'react-redux'

class ImportData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainingCategories: props.user.user.trainingCategories,
            firstCategoryValue: '',
            secondCategoryValue: '',
            thirdCategoryValue: '',
            fourthCategoryValue: '',
            fifthCategoryValue: '',
            sixthCategoryValue: '',
            outcomeValue: '',
            editing: true,
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
    }

    flipEdit = () => this.setState ({ editing: !this.state.editing })    
    
    save = () => {
        console.log('Save Button Clicked')
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
            outcomeValue,
            editing
        } = this.state
        
        if (trainingCategories === 1 && editing === true) {
            return (
                <div>
                    <div>
                        <div>Outcome:</div>
                        <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                    </div>
                    <div>Variables</div>
                    <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.addCategory} >Add Variable</button>
                </div>
            )} else if (trainingCategories === 1 && editing === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcomeValue}</div>
                            <button onClick={this.flipEditCategories}>Edit</button>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategoryValue}</div>
                        <button onClick={this.flipEditCategories}>Edit</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 2 && editing === true) {
                 return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                            <button onClick={this.save}>Save</button>
                        </div>
                        <div>Variables</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 2 && editing === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcomeValue}</div>
                            <button onClick={this.flipEditCategories}>Edit</button>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategoryValue}</div>
                        <div>{secondCategoryValue}</div>
                        <button onClick={this.flipEditCategories}>Edit</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 3 && editing === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                            <button onClick={this.save}>Save</button>
                        </div>
                        <div>Variables</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 3 && editing === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcomeValue}</div>
                            <button onClick={this.flipEditCategories}>Edit</button>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategoryValue}</div>
                        <div>{secondCategoryValue}</div>
                        <div>{thirdCategoryValue}</div>
                        <button onClick={this.flipEditCategories}>Edit</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 4 && editing === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                            <button onClick={this.save}>Save</button>
                        </div>
                        <div>Variables</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 4 && editing === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcomeValue}</div>
                            <button onClick={this.flipEditCategories}>Edit</button>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategoryValue}</div>
                        <div>{secondCategoryValue}</div>
                        <div>{thirdCategoryValue}</div>
                        <div>{fourthCategoryValue}</div>
                        <button onClick={this.flipEditCategories}>Edit</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 5 && editing === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                            <button onClick={this.save}>Save</button>
                        </div>
                        <div>Variables</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 5 && editing === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcomeValue}</div>
                            <button onClick={this.flipEditCategories}>Edit</button>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategoryValue}</div>
                        <div>{secondCategoryValue}</div>
                        <div>{thirdCategoryValue}</div>
                        <div>{fourthCategoryValue}</div>
                        <div>{fifthCategoryValue}</div>
                        <button onClick={this.flipEditCategories}>Edit</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                    </div>
            )} else if (trainingCategories === 6 && editing === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcomeValue} name='outcomeValue' type='text' onChange={this.handleChange}  />
                            <button onClick={this.save}>Save</button>
                        </div>
                        <div>Variables</div>
                        <input value={firstCategoryValue} name='firstCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={secondCategoryValue} name='secondCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategoryValue} name='thirdCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategoryValue} name='fourthCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={fifthCategoryValue} name='fifthCategoryValue' type='text' onChange={this.handleChange}  />
                        <input value={sixthCategoryValue} name='sixthCategoryValue' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcomeValue}</div>
                            <button onClick={this.flipEditCategories}>Edit</button>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategoryValue}</div>
                        <div>{secondCategoryValue}</div>
                        <div>{thirdCategoryValue}</div>
                        <div>{fourthCategoryValue}</div>
                        <div>{fifthCategoryValue}</div>
                        <div>{sixthCategoryValue}</div>
                        <button onClick={this.flipEditCategories}>Edit</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                    </div>
            )}
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(ImportData)