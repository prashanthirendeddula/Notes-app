import React from "react"
import { connect } from "react-redux"
import CategoryForm from './CategoryForm'
import {StartupdateCategory} from '../../actions/categoriesAction'
function CategoryEdit(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
       const redirect=()=>props.history.push('/categories')

           props.dispatch(StartupdateCategory(formData,id,redirect))

    }
    return(
        <div>
            <h1>edit a category</h1>
            <CategoryForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(CategoryEdit)