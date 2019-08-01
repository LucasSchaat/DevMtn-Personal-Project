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
            firstOutcome: props.training.categories.firstOutcome,
            secondOutcome: props.training.categories.secondOutcome,
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
    }
    
    save = () => {
        let {
            trainingCategories,
            dataImports,
            outcome,
            firstCategory,
            secondCategory,
            thirdCategory,
            fourthCategory,
            fifthCategory,
            sixthCategory,
            firstOutcome,
            secondOutcome
        } = this.state
        
        if (trainingCategories === 1) {
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory) {
                return console.log('This is where the toast error would go!')
            } else {
                this.props.saveCategories(
                    dataImports,
                    outcome,
                    firstCategory,
                    secondCategory,
                    thirdCategory,
                    fourthCategory,
                    fifthCategory,
                    sixthCategory,
                    firstOutcome,
                    secondOutcome
                )
                this.flipEditCategories()
                this.flipEditOutcome()
            }
        } else if (trainingCategories === 2) {
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory || !secondCategory) {
                return console.log('This is where the toast error would go!')
            } else {
                this.props.saveCategories(
                    dataImports,
                    outcome,
                    firstCategory,
                    secondCategory,
                    thirdCategory,
                    fourthCategory,
                    fifthCategory,
                    sixthCategory,
                    firstOutcome,
                    secondOutcome
                )
                this.flipEditCategories()
                this.flipEditOutcome()
            }
        
        } else if (trainingCategories === 3) {
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory || !secondCategory || !thirdCategory) {
                return console.log('This is where the toast error would go!')
            } else {
                this.props.saveCategories(
                    dataImports,
                    outcome,
                    firstCategory,
                    secondCategory,
                    thirdCategory,
                    fourthCategory,
                    fifthCategory,
                    sixthCategory,
                    firstOutcome,
                    secondOutcome
                )
                this.flipEditCategories()
                this.flipEditOutcome()
            }
        
        } else if (trainingCategories === 4) {
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory || !secondCategory || !thirdCategory || !fourthCategory){
                return console.log('This is where the toast error would go!')
            } else {
                this.props.saveCategories(
                    dataImports,
                    outcome,
                    firstCategory,
                    secondCategory,
                    thirdCategory,
                    fourthCategory,
                    fifthCategory,
                    sixthCategory,
                    firstOutcome,
                    secondOutcome
                )
                this.flipEditCategories()
                this.flipEditOutcome()
            }
        
        } else if (trainingCategories === 5) {
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory || !secondCategory || !thirdCategory || !fourthCategory || !fifthCategory) {
                return console.log('This is where the toast error would go!')
            } else {
                this.props.saveCategories(
                    dataImports,
                    outcome,
                    firstCategory,
                    secondCategory,
                    thirdCategory,
                    fourthCategory,
                    fifthCategory,
                    sixthCategory,
                    firstOutcome,
                    secondOutcome
                )
                this.flipEditCategories()
                this.flipEditOutcome()
            }
        
        } else {
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory || !secondCategory || !thirdCategory || !fourthCategory || !fifthCategory || !sixthCategory){
                return console.log('This is where the toast error would go!')
            } else {
                this.props.saveCategories(
                    dataImports,
                    outcome,
                    firstCategory,
                    secondCategory,
                    thirdCategory,
                    fourthCategory,
                    fifthCategory,
                    sixthCategory,
                    firstOutcome,
                    secondOutcome
                )
                this.flipEditCategories()
                this.flipEditOutcome()
            }
        
        }
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
            firstOutcome,
            secondOutcome,
            editingCategories
        } = this.state
        
        if (trainingCategories === 1 && editingCategories === true) {
            return (
                <div>
                    <div>
                        <div>Binary Outcome Description:</div>
                        <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        <div>Desired Outcome:</div>
                        <input value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} />
                        <div>Alternative Outcome:</div>
                        <input value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} />
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
                            <div>Binary Outcome Description:</div>
                            <div>{outcome}</div>
                            <div>Desired Outcome:</div>
                            <div>{firstOutcome}</div>
                            <div>Alternative Outcome:</div>
                            <div>{secondOutcome}</div>
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
                            <div>Binary Outcome Description:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                            <div>Desired Outcome:</div>
                            <input value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} />
                            <div>Alternative Outcome:</div>
                            <input value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 2 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <div>{outcome}</div>
                            <div>Desired Outcome:</div>
                            <div>{firstOutcome}</div>
                            <div>Alternative Outcome:</div>
                            <div>{secondOutcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 3 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                            <div>Desired Outcome:</div>
                            <input value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} />
                            <div>Alternative Outcome:</div>
                            <input value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 3 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <div>{outcome}</div>
                            <div>Desired Outcome:</div>
                            <div>{firstOutcome}</div>
                            <div>Alternative Outcome:</div>
                            <div>{secondOutcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 4 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                            <div>Desired Outcome:</div>
                            <input value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} />
                            <div>Alternative Outcome:</div>
                            <input value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 4 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <div>{outcome}</div>
                            <div>Desired Outcome:</div>
                            <div>{firstOutcome}</div>
                            <div>Alternative Outcome:</div>
                            <div>{secondOutcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 5 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                            <div>Desired Outcome:</div>
                            <input value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} />
                            <div>Alternative Outcome:</div>
                            <input value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <input value={fifthCategory} name='fifthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else if (trainingCategories === 5 && editingCategories === false) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <div>{outcome}</div>
                            <div>Desired Outcome:</div>
                            <div>{firstOutcome}</div>
                            <div>Alternative Outcome:</div>
                            <div>{secondOutcome}</div>
                        </div>
                        <div>Variables</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <div>{fifthCategory}</div>
                        <button onClick={this.addCategory} >Add Variable</button>
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.flipEditCategories}>Edit</button>
                    </div>
            )} else if (trainingCategories === 6 && editingCategories === true) {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                            <div>Desired Outcome:</div>
                            <input value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} />
                            <div>Alternative Outcome:</div>
                            <input value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} />
                        </div>
                        <div>Variables</div>
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <input value={fifthCategory} name='fifthCategory' type='text' onChange={this.handleChange}  />
                        <input value={sixthCategory} name='sixthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.delete}>Delete A Variable</button>
                        <button onClick={this.save}>Save</button>
                    </div>
            )} else {
                return (
                    <div>
                        <div>
                            <div>Binary Outcome Description:</div>
                            <div>{outcome}</div>
                            <div>Desired Outcome:</div>
                            <div>{firstOutcome}</div>
                            <div>Alternative Outcome:</div>
                            <div>{secondOutcome}</div>
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