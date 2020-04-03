import React from "react"
import {connect}from 'react-redux'
import CategoryForm from './CategoryForm'
import { StartaddCategories } from "../../actions/categoriesAction"

function CategoryNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/categories')
         props.dispatch(StartaddCategories(formData,redirect))
    }
    return(
        <div>
            <h1>add category</h1>
            <CategoryForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (CategoryNew)
