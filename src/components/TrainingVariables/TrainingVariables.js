import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveCategories } from '../../redux/trainingReducer'

class TrainingVariables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainingCategories: props.user.user.trainingCategories,
            firstCategory: props.training.categories.firstCategory,
            secondCategory: props.training.categories.secondCategory,
            thirdCategory: props.training.categories.thirdCategory,
            fourthCategory: props.training.categories.fourthCategory,
            fifthCategory: props.training.categories.fifthCategory,
            sixthCategory: props.training.categories.sixthCategory,
            outcome: props.training.categories.outcome,
            editing: true
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
        if(this.state.editing === false){
            this.flipEdit()
        }
    }
    
    save = () => {
        this.props.saveCategories(
            this.state.firstCategory,
            this.state.secondCategory,
            this.state.thirdCategory,
            this.state.fourthCategory,
            this.state.fifthCategory,
            this.state.sixthCategory,
            this.state.outcome
        )
        this.flipEdit()
    }
    
    flipEdit = () => this.setState ({ editing: !this.state.editing })

    delete = () => {
        console.log('Delete Button Hit!')
    }

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
            editing
        } = this.state
        
        if (trainingCategories === 1 && editing === true) {
            return (
                <div>
                    <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                    <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.addCategory} >Add Category</button>
                </div>
            )} else if (trainingCategories === 1 && editing === false) {
                return (
                    <div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <button onClick={this.flipEdit}>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 2 && editing === true) {
                return (
                    <div>
                        <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 2 && editing === false) {
                return (
                    <div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <button onClick={this.flipEdit}>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 3 && editing === true) {
                return (
                    <div>
                        <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 3 && editing === false) {
                return (
                    <div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <button onClick={this.flipEdit}>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 4 && editing === true) {
                return (
                    <div>
                        <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 4 && editing === false) {
                return (
                    <div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <button onClick={this.flipEdit}>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 5 && editing === true) {
                return (
                    <div>
                        <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
                        <input value={firstCategory} name='firstCategory' type='text' onChange={this.handleChange}  />
                        <input value={secondCategory} name='secondCategory' type='text' onChange={this.handleChange}  />
                        <input value={thirdCategory} name='thirdCategory' type='text' onChange={this.handleChange}  />
                        <input value={fourthCategory} name='fourthCategory' type='text' onChange={this.handleChange}  />
                        <input value={fifthCategory} name='fifthCategory' type='text' onChange={this.handleChange}  />
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 5 && editing === false) {
                return (
                    <div>
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <div>{fifthCategory}</div>
                        <button onClick={this.flipEdit}>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                        <button onClick={this.addCategory} >Add Category</button>
                    </div>
            )} else if (trainingCategories === 6 && editing === true) {
                return (
                    <div>
                        <input value={outcome} name='outcome' type='text' onChange={this.handleChange}  />
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
                        <div>{outcome}</div>
                        <div>{firstCategory}</div>
                        <div>{secondCategory}</div>
                        <div>{thirdCategory}</div>
                        <div>{fourthCategory}</div>
                        <div>{fifthCategory}</div>
                        <div>{sixthCategory}</div>
                        <button onClick={this.flipEdit}>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                    </div>
            )}
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, { saveCategories })(TrainingVariables)