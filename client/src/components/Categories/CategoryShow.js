import React from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import {findCategory} from '../../selectors/categorySelector'
function CategoryShow(props){
    return(
        <div>
           {
             props.category?(<div>
              <h1>CategoryShow-{props.category._id}</h1>
              <h2>{props.category.name}</h2>
              <Link to={`/categories/edit/${props.category._id}`}>EditCategory</Link>
              <Link to='/categories'>back</Link>


                 </div>):(<div>

                     loading
                     </div>)
            
           }      
             </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id

    return{
         category:findCategory(state.categories,id)
    }
}
export default connect(mapStateToProps)(CategoryShow)