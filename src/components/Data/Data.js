import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editData, deleteData } from '../../redux/trainingReducer'

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataImports: props.user.user.dataImports,
            trainingCategories: props.user.user.trainingCategories,
            newOutcomeValue: props.outcome,
            newFirstCategoryValue: props.first_category,
            newSecondCategoryValue: props.second_category,
            newThirdCategoryValue: props.third_category,
            newFourthCategoryValue: props.fourth_category,
            newFifthCategoryValue: props.fifth_category,
            newSixthCategoryValue: props.sixth_category,
            editing: false
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    flipEdit = () => this.setState({ editing: !this.state.editing })

    saveUpdate = () => {
        let { reference_id, id } = this.props
        this.props.editData(
            reference_id,
            id,
            this.state.trainingCategories,
            this.state.newOutcomeValue,
            this.state.newFirstCategoryValue,
            this.state.newSecondCategoryValue,
            this.state.newThirdCategoryValue,
            this.state.newFourthCategoryValue,
            this.state.newFifthCategoryValue,
            this.state.newSixthCategoryValue
        )
        this.flipEdit()
    }

    delete = () => {
        let { id, deleteData } = this.props
        deleteData(id)
        this.flipEdit()
    }

    render() {
        let { 
            reference_id,
            outcome,
            first_category,
            second_category,
            third_category,
            fourth_category,
            fifth_category,
            sixth_category
            } = this.props
        let {
            trainingCategories,
            newOutcomeValue,
            newFirstCategoryValue,
            newSecondCategoryValue,
            newThirdCategoryValue,
            newFourthCategoryValue,
            newFifthCategoryValue,
            newSixthCategoryValue,
            editing
        } = this.state
        
        if(trainingCategories === 1 && editing === false) {
             return(
                 <div>
                     <div>{reference_id}</div>
                     <div>{outcome}</div>
                     <div>{first_category}</div>
                     <button onClick={this.flipEdit}>Edit</button>
                 </div>
             )
        } else if(trainingCategories === 1 && editing === true) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <input value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                    <input value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                    <button onClick={this.saveUpdate}>Save Changes</button>
                    <button onClick={this.delete}>Delete</button>
                </div>
            )
        } else if(trainingCategories === 2 && editing === false) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <div>{outcome}</div>
                    <div>{first_category}</div>
                    <div>{second_category}</div>
                    <button onClick={this.flipEdit}>Edit</button>
                </div>
            )
        } else if(trainingCategories === 2 && editing === true) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <input value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                    <input value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                    <input value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                    <button onClick={this.saveUpdate}>Save Changes</button>
                    <button onClick={this.delete}>Delete</button>
                </div>
            )
        } else if(trainingCategories === 3 && editing === false) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <div>{outcome}</div>
                    <div>{first_category}</div>
                    <div>{second_category}</div>
                    <div>{third_category}</div>
                    <button onClick={this.flipEdit}>Edit</button>
                </div>
            )
        } else if(trainingCategories === 3 && editing === true) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <input value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                    <input value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                    <input value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                    <input value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                    <button onClick={this.saveUpdate}>Save Changes</button>
                    <button onClick={this.delete}>Delete</button>
                </div>
            )
        } else if(trainingCategories === 4 && editing === false) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <div>{outcome}</div>
                    <div>{first_category}</div>
                    <div>{second_category}</div>
                    <div>{third_category}</div>
                    <div>{fourth_category}</div>
                    <button onClick={this.flipEdit}>Edit</button>
                </div>
            )
        } else if(trainingCategories === 4 && editing === true) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <input value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                    <input value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                    <input value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                    <input value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                    <input value={newFourthCategoryValue} name='newFourthCategoryValue' onChange={this.handleChange} />
                    <button onClick={this.saveUpdate}>Save Changes</button>
                    <button onClick={this.delete}>Delete</button>
                </div>
            )
        } else if(trainingCategories === 5 && editing === false) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <div>{outcome}</div>
                    <div>{first_category}</div>
                    <div>{second_category}</div>
                    <div>{third_category}</div>
                    <div>{fourth_category}</div>
                    <div>{fifth_category}</div>
                    <button onClick={this.flipEdit}>Edit</button>
                </div>
            )
        } else if(trainingCategories === 5 && editing === true) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <input value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                    <input value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                    <input value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                    <input value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                    <input value={newFourthCategoryValue} name='newFourthCategoryValue' onChange={this.handleChange} />
                    <input value={newFifthCategoryValue} name='newFifthCategoryValue' onChange={this.handleChange} />
                    <button onClick={this.saveUpdate}>Save Changes</button>
                    <button onClick={this.delete}>Delete</button>
                </div>
            )
        } else if(trainingCategories === 6 && editing === false) {
            return(
                <div>
                    <div>{reference_id}</div>
                    <div>{outcome}</div>
                    <div>{first_category}</div>
                    <div>{second_category}</div>
                    <div>{third_category}</div>
                    <div>{fourth_category}</div>
                    <div>{fifth_category}</div>
                    <div>{sixth_category}</div>
                    <button onClick={this.flipEdit}>Edit</button>
                </div>
            )
        } else {
            return(
                <div>
                    <div>{reference_id}</div>
                    <input value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                    <input value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                    <input value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                    <input value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                    <input value={newFourthCategoryValue} name='newFourthCategoryValue' onChange={this.handleChange} />
                    <input value={newFifthCategoryValue} name='newFifthCategoryValue' onChange={this.handleChange} />
                    <input value={newSixthCategoryValue} name='newSixthCategoryValue' onChange={this.handleChange} />
                    <button onClick={this.saveUpdate}>Save Changes</button>
                    <button onClick={this.delete}>Delete</button>
                </div>
            )
         }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { editData, deleteData })(Data)