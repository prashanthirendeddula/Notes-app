import React from "react"
import {connect} from "react-redux"

import NotesForm from './NotesForm'
import {StartaddNote} from '../../actions/notesAction'
function NotesNew(props){
   const handleSubmit=(formData)=>{
          const redirect=()=>props.history.push('/notes')
          props.dispatch(StartaddNote(formData,redirect))

   }
    return(
        <div>
            <h1>add a note</h1>
            <NotesForm  handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (NotesNew)