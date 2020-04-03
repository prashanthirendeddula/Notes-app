import React from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import {findNote} from '../../selectors/notesSelector'

function NotesShow(props){
    console.log(props.categories)

    return(
        <div>

           {
             props.note?(<div>
              <h1>NotesShow-{props.note._id}</h1>
              <h2>{props.note.title}-{props.note.body}</h2>
              <Link to={`/notes/edit/${props.note._id}`}>EditNote</Link>
              <Link to='/notes'>back</Link>


                 </div>):(<div>

                     loading
                     </div>)
            
           }      
             </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    console.log(id)


    return{
         note:findNote(state.notes,id),
         categories:state.categories
    }

}
export default connect(mapStateToProps)(NotesShow)