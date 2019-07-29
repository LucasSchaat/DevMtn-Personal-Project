import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveCategories } from '../../redux/trainingReducer'

class TrainingVariables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataImports: props.user.user.dataImports,
            trainingCategories: props.user.user.trainingCategories,
            firstCategory: props.training.categories.firstCategory,
            secondCategory: props.training.categories.secondCategory,
            thirdCategory: props.training.categories.thirdCategory,
            fourthCategory: props.training.categories.fourthCategory,
            fifthCategory: props.training.categories.fifthCategory,
            sixthCategory: props.training.categories.sixthCategory,
            outcome: props.training.categories.outcome,
            editingCategories: true,
            editingOutcome: true
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }
    
    addCategory = () => {
        if(this.props.user.user.trainingCategories < 6) {
            this.props.user.user.trainingCategories += 1
            this.setState({ trainingCategories: this.props.user.user.trainingCategories})
        } else {
            this.props.user.user.trainingCategories = 6
            this.setState({ trainingCategories: this.props.user.user.trainingCategories})
        }
        if(this.state.editingCategories === false){
            this.flipEditCategories()
        }
    }
    
    delete = () => {
        if(this.props.user.user.trainingCategories === 2) {
            this.props.user.user.trainingCategories -= 1
            this.setState({ 
                trainingCategories: this.props.user.user.trainingCategories,
                secondCategory: '',
                thirdCategory: '',
                fourthCategory: '',
                fifthCategory: '',
                sixthCategory: ''
            })
        } else if (this.props.user.user.trainingCategories === 3) {
            this.props.user.user.trainingCategories -= 1
            this.setState({ 
                trainingCategories: this.props.user.user.trainingCategories,
                thirdCategory: '',
                fourthCategory: '',
                fifthCategory: '',
                sixthCategory: ''
            })
        } else if (this.props.user.user.trainingCategories === 4) {
            this.props.user.user.trainingCategories -= 1
            this.setState({ 
                trainingCategories: this.props.user.user.trainingCategories,
                fourthCategory: '',
                fifthCategory: '',
                sixthCategory: ''
            })
        } else if (this.props.user.user.trainingCategories === 5) {
            this.props.user.user.trainingCategories -= 1
            this.setState({ 
                trainingCategories: this.props.user.user.trainingCategories,
                fifthCategory: '',
                sixthCategory: ''
            })
        } else if (this.props.user.user.trainingCategories === 6) {
            this.props.user.user.trainingCategories -= 1
            this.setState({ 
                trainingCategories: this.props.user.user.trainingCategories,
                sixthCategory: ''
            })
        } else {
            this.props.user.user.trainingCategories = 1
            this.setState({ 
                trainingCategories: this.props.user.user.trainingCategories
            })
        }
        if(this.state.editingCategories === true){
            this.flipEditCategories()
        }
    }
    
    save = () => {
        this.props.saveCategories(
            this.state.dataImports,
            this.state.outcome,
            this.state.firstCategory,
            this.state.secondCategory,
            this.state.thirdCategory,
            this.state.fourthCategory,
            this.state.fifthCategory,
            this.state.sixthCategory
        )
        this.flipEditCategories()
        this.flipEditOutcome()
    }
    
    flipEditCategories = () => this.setState ({ editingCategories: !this.state.editingCategories })

    flipEditOutcome = () => this.setState ({ editingOutcome: !this.state.editingOutcome })

    render() {
        let {
            trainingCategories,
            firstCategory,
            secondCategory,
            thirdCategory,
            fourthCategory,
            fifthCategory,
            sixthCategory,
            outcome,
            editingCategories
        } = this.state
        
        if (trainingCategories === 1 && editingCategories === true) {
            return (
                <div>
                    <div>
                        <div>Outcome:</div>
                        <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                    </div>
                    <div>Variables</div>
                    <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                    <button onClick={this.addCategory} >Add Variable</button>
                    <button onClick={this.save}>Save</button>
                </div>
            )} else if (trainingCategories === 1 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 2 && editingCategories === true) {
                 return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 2 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 3 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 3 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 4 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 4 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 5 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <input value={fifthCategory} name='fifthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 5 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <div>{fifthCategory}</div>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 6 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <input value={fifthCategory} name='fifthCategory' type='text' onChange={this.handleChange}  />
                        <input value={sixthCategory} name='sixthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else {
                return (
                    <div>
                        <div>
                            <div>Outcome:</div>
                            <div>{outcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <div>{fifthCategory}</div>
                        <div>{sixthCategory}</div>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )}
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, { saveCategories })(TrainingVariables)