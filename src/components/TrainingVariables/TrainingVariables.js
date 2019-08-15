import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { saveCategories } from '../../redux/trainingReducer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './TrainingVariables.css'

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
                toast.error('Oops! Looks like you left something blank! Please update your entries and complete the form to continue.')
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
                toast.error('Oops! Looks like you left something blank! Please update your entries and complete the form to continue.')
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
                toast.error('Oops! Looks like you left something blank! Please update your entries and complete the form to continue.')
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
                toast.error('Oops! Looks like you left something blank! Please update your entries and complete the form to continue.')
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
                toast.error('Oops! Looks like you left something blank! Please update your entries and complete the form to continue.')
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
        
        } else if (trainingCategories === 6) {
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory || !secondCategory || !thirdCategory || !fourthCategory || !fifthCategory || !sixthCategory){
                toast.error('Oops! Looks like you left something blank! Please update your entries and complete the form to continue.')
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
            if(!outcome || !firstOutcome || !secondOutcome || !firstCategory){
                toast.error('Oops! Looks like you left something blank! Please update your entries and complete the form to continue.')
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
                    <div className='main-content-container'>
                        <div className='outcome-section'>
                            <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                            <input className='main-inputs outcome-description-input' value={outcome} name='outcome' type='text' onChange={this.handleChange} placeholder='Ex: Will this be a good date?' />
                            <div className='outcome-container'>
                                <div className='outcome-alternative'>
                                    <div>Desired Outcome:</div>
                                    <input className='main-inputs outcome-inputs first-outcome-input' value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                                </div>
                                <div className='outcome-alternative'>
                                    <div>Alternative Outcome:</div>
                                    <input className='main-inputs outcome-inputs second-outcome-input' value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} placeholder='Ex: No' />
                                </div>
                            </div>    
                        </div>
                        <div className='variables-display'>
                            <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                            <div className='variables-container'>
                                <input className='main-inputs variable-inputs first-variable-input' value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange} placeholder='Ex: Age' />
                            </div>
                            <div className='new-button-container'>
                                <button className='main-button two-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                <button className='main-button two-buttons save-variables-button' onClick={this.save}>Save Data</button>
                            </div>
                        </div>
                    </div>
                    <div className='next-previous-button-box'>
                        <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                    </div>
                </div>

            )} else if (trainingCategories === 1 && editingCategories === false) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <div className='saved-inputs'>{outcome}</div>
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <div className='saved-inputs'>{firstOutcome}</div>
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <div className='saved-inputs'>{secondOutcome}</div>
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <div className='saved-inputs'>{firstCategory}</div>
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button two-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button two-buttons edit-variables-button' onClick={this.flipEditCategories}>Edit Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>

            )} else if (trainingCategories === 2 && editingCategories === true) {
                 return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <input className='main-inputs outcome-description-input' value={outcome} name='outcome' type='text' onChange={this.handleChange} placeholder='Ex: Will this be a good date?' />
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <input className='main-inputs outcome-inputs first-outcome-input' value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <input className='main-inputs outcome-inputs second-outcome-input' value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} placeholder='Ex: No' />
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <input className='main-inputs variable-inputs first-variable-input' value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange} placeholder='Ex: Age' />
                                    <input className='main-inputs variable-inputs second-variable-input' value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange} placeholder='Ex: Hair Color' />
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons save-variables-button' onClick={this.save}>Save Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>

            )} else if (trainingCategories === 2 && editingCategories === false) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <div className='saved-inputs'>{outcome}</div>
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <div className='saved-inputs'>{firstOutcome}</div>
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <div className='saved-inputs'>{secondOutcome}</div>
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <div className='saved-inputs saved-variables'>{firstCategory}</div>
                                    <div className='saved-inputs saved-variables'>{secondCategory}</div>
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons edit-variables-button' onClick={this.flipEditCategories}>Edit Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>
    
            )} else if (trainingCategories === 3 && editingCategories === true) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <input className='main-inputs outcome-description-input' value={outcome} name='outcome' type='text' onChange={this.handleChange} placeholder='Ex: Will this be a good date?' />
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <input className='main-inputs outcome-inputs first-outcome-input' value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <input className='main-inputs outcome-inputs second-outcome-input' value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} placeholder='Ex: No' />
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <input className='main-inputs variable-inputs first-variable-input' value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange} placeholder='Ex: Age' />
                                    <input className='main-inputs variable-inputs second-variable-input' value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange} placeholder='Ex: Hair Color' />
                                    <input className='main-inputs variable-inputs third-variable-input' value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange} placeholder='Ex: Eye Color' />
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons save-variables-button' onClick={this.save}>Save Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>

            )} else if (trainingCategories === 3 && editingCategories === false) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <div className='saved-inputs'>{outcome}</div>
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <div className='saved-inputs'>{firstOutcome}</div>
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <div className='saved-inputs'>{secondOutcome}</div>
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <div className='saved-inputs saved-variables'>{firstCategory}</div>
                                    <div className='saved-inputs saved-variables'>{secondCategory}</div>
                                    <div className='saved-inputs saved-variables'>{thirdCategory}</div>
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons edit-variables-button' onClick={this.flipEditCategories}>Edit Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>

            )} else if (trainingCategories === 4 && editingCategories === true) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <input className='main-inputs outcome-description-input' value={outcome} name='outcome' type='text' onChange={this.handleChange} placeholder='Ex: Will this be a good date?' />
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <input className='main-inputs outcome-inputs first-outcome-input' value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <input className='main-inputs outcome-inputs second-outcome-input' value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} placeholder='Ex: No' />
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <input className='main-inputs variable-inputs first-variable-input' value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange} placeholder='Ex: Age' />
                                    <input className='main-inputs variable-inputs second-variable-input' value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange} placeholder='Ex: Hair Color' />
                                    <input className='main-inputs variable-inputs third-variable-input' value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange} placeholder='Ex: Eye Color' />
                                    <input className='main-inputs variable-inputs fourth-variable-input' value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange} placeholder='Ex: Height' />
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons save-variables-button' onClick={this.save}>Save Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>

            )} else if (trainingCategories === 4 && editingCategories === false) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <div className='saved-inputs'>{outcome}</div>
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <div className='saved-inputs'>{firstOutcome}</div>
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <div className='saved-inputs'>{secondOutcome}</div>
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <div className='saved-inputs saved-variables'>{firstCategory}</div>
                                    <div className='saved-inputs saved-variables'>{secondCategory}</div>
                                    <div className='saved-inputs saved-variables'>{thirdCategory}</div>
                                    <div className='saved-inputs saved-variables'>{fourthCategory}</div>
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons edit-variables-button' onClick={this.flipEditCategories}>Edit Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>

            )} else if (trainingCategories === 5 && editingCategories === true) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <input className='main-inputs outcome-description-input' value={outcome} name='outcome' type='text' onChange={this.handleChange} placeholder='Ex: Will this be a good date?' />
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <input className='main-inputs outcome-inputs first-outcome-input' value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <input className='main-inputs outcome-inputs second-outcome-input' value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} placeholder='Ex: No' />
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <input className='main-inputs variable-inputs first-variable-input' value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange} placeholder='Ex: Age' />
                                    <input className='main-inputs variable-inputs second-variable-input' value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange} placeholder='Ex: Hair Color' />
                                    <input className='main-inputs variable-inputs third-variable-input' value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange} placeholder='Ex: Eye Color' />
                                    <input className='main-inputs variable-inputs fourth-variable-input' value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange} placeholder='Ex: Height' />
                                    <input className='main-inputs variable-inputs fifth-variable-input' value={fifthCategory} name='fifthCategory' type='text' onChange={this.handleChange} placeholder='Ex: Good Kisser' />
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons save-variables-button' onClick={this.save}>Save Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>
                    
            )} else if (trainingCategories === 5 && editingCategories === false) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <div className='saved-inputs'>{outcome}</div>
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <div className='saved-inputs'>{firstOutcome}</div>
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <div className='saved-inputs'>{secondOutcome}</div>
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <div className='saved-inputs saved-variables'>{firstCategory}</div>
                                    <div className='saved-inputs saved-variables'>{secondCategory}</div>
                                    <div className='saved-inputs saved-variables'>{thirdCategory}</div>
                                    <div className='saved-inputs saved-variables'>{fourthCategory}</div>
                                    <div className='saved-inputs saved-variables'>{fifthCategory}</div>
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button three-buttons add-variable-button' onClick={this.addCategory}>Add Variable</button>
                                    <button className='main-button three-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button three-buttons edit-variables-button' onClick={this.flipEditCategories}>Edit Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>
                    
            )} else if (trainingCategories === 6 && editingCategories === true) {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <input className='main-inputs outcome-description-input' value={outcome} name='outcome' type='text' onChange={this.handleChange} placeholder='Ex: Will this be a good date?' />
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <input className='main-inputs outcome-inputs first-outcome-input' value={firstOutcome} name='firstOutcome' type='text' onChange={this.handleChange} placeholder='Ex: Yes' />
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <input className='main-inputs outcome-inputs second-outcome-input' value={secondOutcome} name='secondOutcome' type='text' onChange={this.handleChange} placeholder='Ex: No' />
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <input className='main-inputs variable-inputs first-variable-input' value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange} placeholder='Ex: Age' />
                                    <input className='main-inputs variable-inputs second-variable-input' value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange} placeholder='Ex: Hair Color' />
                                    <input className='main-inputs variable-inputs third-variable-input' value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange} placeholder='Ex: Eye Color' />
                                    <input className='main-inputs variable-inputs fourth-variable-input' value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange} placeholder='Ex: Height' />
                                    <input className='main-inputs variable-inputs fifth-variable-input' value={fifthCategory} name='fifthCategory' type='text' onChange={this.handleChange} placeholder='Ex: Good Kisser' />
                                    <input className='main-inputs variable-inputs sixth-variable-input' value={sixthCategory} name='sixthCategory' type='text' onChange={this.handleChange} placeholder='Ex: Nice Profile Pic' />
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button two-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button two-buttons save-variables-button' onClick={this.save}>Save Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>
                    
            )} else {
                return (
                    <div>
                        <div className='main-content-container'>
                            <div className='outcome-section'>
                                <div className='outcome-description'>What Outcome Do You Want to Test?</div>
                                <div className='saved-inputs'>{outcome}</div>
                                <div className='outcome-container'>
                                    <div className='outcome-alternative'>
                                        <div>Desired Outcome:</div>
                                        <div className='saved-inputs'>{firstOutcome}</div>
                                    </div>
                                    <div className='outcome-alternative'>
                                        <div>Alternative Outcome:</div>
                                        <div className='saved-inputs'>{secondOutcome}</div>
                                    </div>
                                </div>    
                            </div>
                            <div className='variables-display'>
                                <div className='outcome-description variables-description'>What Variable(s) Do You Want to Test?</div>
                                <div className='variables-container'>
                                    <div className='saved-inputs saved-variables'>{firstCategory}</div>
                                    <div className='saved-inputs saved-variables'>{secondCategory}</div>
                                    <div className='saved-inputs saved-variables'>{thirdCategory}</div>
                                    <div className='saved-inputs saved-variables'>{fourthCategory}</div>
                                    <div className='saved-inputs saved-variables'>{fifthCategory}</div>
                                    <div className='saved-inputs saved-variables'>{sixthCategory}</div>
                                </div>
                                <div className='new-button-container'>
                                    <button className='main-button two-buttons delete-variable-button' onClick={this.delete}>Delete A Variable</button>
                                    <button className='main-button two-buttons edit-variables-button' onClick={this.flipEditCategories}>Edit Data</button>
                                </div>
                            </div>
                        </div>
                        <div className='next-previous-button-box'>
                            <button className='next-step-button import-data-button' onClick={() => this.props.history.push('/dashboard/import_data')}>Import Your Data</button>
                        </div>
                    </div>
            )}
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, { saveCategories })(withRouter(TrainingVariables))