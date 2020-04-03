import React from "react"
import {withRouter} from "react-router-dom"
import { findNote } from "../../selectors/notesSelector"
import { connect } from "react-redux"
class NotesForm extends React.Component{
    constructor(props){
        console.log(constructor,props)
        super(props)
            this.state={
                 title:props.note?props.note.title:"",
                 body:props.note?props.note.body:'',
                 category:props.note?props.note.category:""


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
                    title:this.state.title,
                    body:this.state.body,
                    category:this.state.category


                }
                console.log(formData)
                this.props.handleSubmit(formData)

            }
           
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">title</label>
                    <input type="text" id="title"  name="title"  value=
                    {this.state.title}  onChange={this.handleChange}/><br>
                    </br>
                    <label htmlFor="body">body</label>
                    <input type="text" id="body"  name="body"  value=
                    {this.state.body}  onChange={this.handleChange}/><br/>
                    <label htmlFor="category">category</label>
                <select value={this.state.category} name="category"
                onChange={this.handleChange}>

                    <option value="">select</option>
                    {this.props.categories.map(cat => {
                        return <option key={cat._id} value={cat._id}>{cat.name}</option>
                    })}
                </select>
              
                   
                    <input type="submit" value="submit"/>
                </form>
            </div> 
        )
    }
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
         note:findNote(state.notes,id),
         categories:state.categories
    }
}
   
export default withRouter(connect(mapStateToProps)(NotesForm))