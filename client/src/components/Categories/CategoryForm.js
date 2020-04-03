import React from "react"
import {withRouter} from "react-router-dom"
import { findCategory } from "../../selectors/categorySelector"
import { connect } from "react-redux"
import { StartaddCategories } from "../../actions/categoriesAction"
class CategoryForm extends React.Component{
    constructor(props){
        console.log(constructor,props)
        super(props)
            this.state={
                 name:props.category?props.category.name:"",


            }
        }
            handleChange=(e)=>{

             this.setState({
                 [e.target.name]:e.target.value
             })
            }
            handleSubmit=(e)=>{
                e.preventDefault()
                const formData={
                    name:this.state.name
                }
                this.props.handleSubmit(formData)
            }
        
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name"  name="name"  value=
                    {this.state.name}  onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                </form>
            </div> 
        )
    }
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    console.log(id)
    return{
         category:findCategory(state.categories,id)
    }
}
   
export default withRouter(connect(mapStateToProps)(CategoryForm))