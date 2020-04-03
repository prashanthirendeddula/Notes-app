import React from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {StartsetCategories,StartremoveCategory}from '../../actions/categoriesAction'
function CategoriesList (props){
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('are u sure')
        if(confirmRemove){
        props.dispatch(StartremoveCategory(id))
        }
    }
    if(props.categories.length==0){
        props.dispatch(StartsetCategories())
    }
    return(
        <div>
            <h1>ListingCategories-{props.categories.length}</h1>
            <ul>
                {
                    props.categories.map((category)=>{
          return <li key={category._id}><Link to={`/categories/${category._id}`}>{category.name}</Link>
          <button onClick={()=>handleRemove(category._id)}>remove</button></li>
                    })
                }
            </ul>
            <Link to='/categories/new'>add categories</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        categories:state.categories
    }
}
export default connect(mapStateToProps)( CategoriesList)