import React from 'react' 
import {connect} from 'react-redux'
import {Link} from'react-router-dom'

import {StartsetNotes,StartRemoveNote} from '../../actions/notesAction'
function NotesList(props){
     const handleRemove=(id)=>{
         const confirmRemove=window.confirm('are u sure')
         if(confirmRemove){
            props.dispatch(StartRemoveNote(id)) 
         }
     }
    if(props.notes.length==0){
        props.dispatch(StartsetNotes())
    }
        return (
            <div>
                <h1>Listing Notes-{props.notes.length} </h1>
                <ul> 
                {props.notes.map(note=>{
                  return <li ><Link to={`/notes/${note._id}`}>{note.title}</Link>
                  <button onClick={()=>{handleRemove(note._id)}} >remove</button></li>

                })
                }
                </ul>
                <Link to='/notes/new'>Add Notes</Link>

            </div> 
        )
    }

const mapStateToProps=(state)=>{
    return{
        notes:state.notes
    }
}
export default connect(mapStateToProps) (NotesList)