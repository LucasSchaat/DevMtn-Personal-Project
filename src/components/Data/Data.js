import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editData, deleteData } from '../../redux/trainingReducer'
import './Data.css'

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
                 <div className='output-data-container'>
                     <div className='output-data-display'>
                        <div className='output-data-item two-data-items'>{outcome}</div>
                        <div className='output-data-item two-data-items'>{first_category}</div>
                     </div>
                     <div className='output-edit-container'>
                        <button className='output-button' onClick={this.flipEdit}>Edit</button>
                     </div>
                 </div>
             )
        } else if(trainingCategories === 1 && editing === true) {
            return(
                <div className='output-data-container'>
                    <div className='output-data-display'>
                        <input className='output-data-input two-data-items' value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                        <input className='output-data-input two-data-items' value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                    </div>
                    <div className='output-edit-container'>
                        <button className='output-button' onClick={this.saveUpdate}>Save</button>
                        <button className='output-button' onClick={this.delete}>Delete</button>
                    </div>
                </div>
            )
        } else if(trainingCategories === 2 && editing === false) {
            return(
                <div className='output-data-container'>
                     <div className='output-data-display'>
                        <div className='output-data-item three-data-items'>{outcome}</div>
                        <div className='output-data-item three-data-items'>{first_category}</div>
                        <div className='output-data-item three-data-items'>{second_category}</div>
                     </div>
                     <div className='output-edit-container'>
                        <button className='output-button' onClick={this.flipEdit}>Edit</button>
                     </div>
                 </div>
            )
        } else if(trainingCategories === 2 && editing === true) {
            return(
                <div className='output-data-container'>
                    <div className='output-data-display'>
                        <input className='output-data-input three-data-items' value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                        <input className='output-data-input three-data-items' value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input three-data-items' value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                    </div>
                    <div className='output-edit-container'>
                        <button className='output-button' onClick={this.saveUpdate}>Save</button>
                        <button className='output-button' onClick={this.delete}>Delete</button>
                    </div>
                </div>
            )
        } else if(trainingCategories === 3 && editing === false) {
            return(
                <div className='output-data-container'>
                     <div className='output-data-display'>
                        <div className='output-data-item four-data-items'>{outcome}</div>
                        <div className='output-data-item four-data-items'>{first_category}</div>
                        <div className='output-data-item four-data-items'>{second_category}</div>
                        <div className='output-data-item four-data-items'>{third_category}</div>
                     </div>
                     <div className='output-edit-container'>
                        <button className='output-button' onClick={this.flipEdit}>Edit</button>
                     </div>
                 </div>
            )
        } else if(trainingCategories === 3 && editing === true) {
            return(
                <div className='output-data-container'>
                    <div className='output-data-display'>
                        <input className='output-data-input four-data-items' value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                        <input className='output-data-input four-data-items' value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input four-data-items' value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input four-data-items' value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                    </div>
                    <div className='output-edit-container'>
                        <button className='output-button' onClick={this.saveUpdate}>Save</button>
                        <button className='output-button' onClick={this.delete}>Delete</button>
                    </div>
                </div>
            )
        } else if(trainingCategories === 4 && editing === false) {
            return(
                <div className='output-data-container'>
                     <div className='output-data-display'>
                        <div className='output-data-item five-data-items'>{outcome}</div>
                        <div className='output-data-item five-data-items'>{first_category}</div>
                        <div className='output-data-item five-data-items'>{second_category}</div>
                        <div className='output-data-item five-data-items'>{third_category}</div>
                        <div className='output-data-item five-data-items'>{fourth_category}</div>
                     </div>
                     <div className='output-edit-container'>
                        <button className='output-button' onClick={this.flipEdit}>Edit</button>
                     </div>
                 </div>
            )
        } else if(trainingCategories === 4 && editing === true) {
            return(
                <div className='output-data-container'>
                    <div className='output-data-display'>
                        <input className='output-data-input five-data-items' value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                        <input className='output-data-input five-data-items' value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input five-data-items' value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input five-data-items' value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input five-data-items' value={newFourthCategoryValue} name='newFourthCategoryValue' onChange={this.handleChange} />
                    </div>
                    <div className='output-edit-container'>
                        <button className='output-button' onClick={this.saveUpdate}>Save</button>
                        <button className='output-button' onClick={this.delete}>Delete</button>
                    </div>
                </div>
            )
        } else if(trainingCategories === 5 && editing === false) {
            return(
                <div className='output-data-container'>
                     <div className='output-data-display'>
                        <div className='output-data-item six-data-items'>{outcome}</div>
                        <div className='output-data-item six-data-items'>{first_category}</div>
                        <div className='output-data-item six-data-items'>{second_category}</div>
                        <div className='output-data-item six-data-items'>{third_category}</div>
                        <div className='output-data-item six-data-items'>{fourth_category}</div>
                        <div className='output-data-item six-data-items'>{fifth_category}</div>
                     </div>
                     <div className='output-edit-container'>
                        <button className='output-button' onClick={this.flipEdit}>Edit</button>
                     </div>
                 </div>
            )
        } else if(trainingCategories === 5 && editing === true) {
            return(
                <div className='output-data-container'>
                    <div className='output-data-display'>
                        <input className='output-data-input-small six-data-items' value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                        <input className='output-data-input-small six-data-items' value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small six-data-items' value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small six-data-items' value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small six-data-items' value={newFourthCategoryValue} name='newFourthCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small six-data-items' value={newFifthCategoryValue} name='newFifthCategoryValue' onChange={this.handleChange} />
                    </div>
                    <div className='output-edit-container'>
                        <button className='output-button' onClick={this.saveUpdate}>Save</button>
                        <button className='output-button' onClick={this.delete}>Delete</button>
                    </div>
                </div>
            )
        } else if(trainingCategories === 6 && editing === false) {
            return(
                <div className='output-data-container'>
                     <div className='output-data-display'>
                        <div className='output-data-item seven-data-items'>{outcome}</div>
                        <div className='output-data-item seven-data-items'>{first_category}</div>
                        <div className='output-data-item seven-data-items'>{second_category}</div>
                        <div className='output-data-item seven-data-items'>{third_category}</div>
                        <div className='output-data-item seven-data-items'>{fourth_category}</div>
                        <div className='output-data-item seven-data-items'>{fifth_category}</div>
                        <div className='output-data-item seven-data-items'>{sixth_category}</div>
                     </div>
                     <div className='output-edit-container'>
                        <button className='output-button' onClick={this.flipEdit}>Edit</button>
                     </div>
                 </div>
            )
        } else {
            return(
                <div className='output-data-container'>
                    <div className='output-data-display'>
                        <input className='output-data-input-small seven-data-items' value={newOutcomeValue} name='newOutcomeValue' onChange={this.handleChange} />
                        <input className='output-data-input-small seven-data-items' value={newFirstCategoryValue} name='newFirstCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small seven-data-items' value={newSecondCategoryValue} name='newSecondCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small seven-data-items' value={newThirdCategoryValue} name='newThirdCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small seven-data-items' value={newFourthCategoryValue} name='newFourthCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small seven-data-items' value={newFifthCategoryValue} name='newFifthCategoryValue' onChange={this.handleChange} />
                        <input className='output-data-input-small seven-data-items' value={newSixthCategoryValue} name='newSixthCategoryValue' onChange={this.handleChange} />
                    </div>
                    <div className='output-edit-container'>
                        <button className='output-button' onClick={this.saveUpdate}>Save</button>
                        <button className='output-button' onClick={this.delete}>Delete</button>
                    </div>
                </div>
            )
         }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { editData, deleteData })(Data)