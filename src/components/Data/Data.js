import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { deleteData, editData } from '../../redux/trainingReducer'

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
        console.log('Save edited data')
        // editData()
    }

    delete = () => {
        console.log('Delete button pressed')
        // let { id, deleteData } = this.props
        // deleteData(id)
    }

    componentDidUpdate(prevProps) {
        let { 
            outcome,
            first_category,
            second_category,
            third_category,
            fourth_category,
            fifth_category,
            sixth_category
         } = prevProps
         if (
             outcome !== this.props.outcome ||
             first_category !== this.props.first_category ||
             second_category !== this.props.second_category ||
             third_category !== this.props.third_category ||
             fourth_category !== this.props.fourth_category ||
             fifth_category !== this.props.fifth_category ||
             sixth_category !== this.props.sixth_category
         ) {
             this.setState({
                newOutcomeValue: outcome,
                newFirstCategoryValue: first_category,
                newSecondCategoryValue: second_category,
                newThirdCategoryValue: third_category,
                newFourthCategoryValue: fourth_category,
                newFifthCategoryValue: fifth_category,
                newSixthCategoryValue: sixth_category,
                editing: false  
             })
         }
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
                 console.log('Something will be here!')
             )
         }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(Data)