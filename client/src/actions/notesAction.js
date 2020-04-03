import axios from '../config/axois'
  //for getting notes

  //sync action
  export const  setNotes=(notes)=>{
    return{
    type:'SET_NOTES',payload:notes
    }
  }
  export const StartsetNotes=()=>{
      return(dispatch) =>{ //async
      axios.get('/notes')
         .then((response)=>{
             const notes=response.data
             dispatch(setNotes(notes))
      console.log(notes)
         })
         .catch((err)=>{

         })
}
  }
  //add a note
  export const addNote=(note)=>{
    return{
      type:"ADD_NOTE",payload:note
    }
  }
  export const StartaddNote=(formData,redirect)=>{
    return(dispatch)=>{
      axios.post('/notes',formData)
           .then((response)=>{
             const note=response.data
             dispatch(addNote(note))
             redirect()
           })
    }
  }
  //remove a note

  export const removeNote=(note)=>{
    return {
      type:'REMOVE_NOTE' ,payload:note
    }
  }
  export const StartRemoveNote=(id)=>{
    return(dispatch)=>{
      axios.delete(`/notes/${id}`)
         .then((response)=>{
         console.log(response.data)
         const note=response.data
         dispatch(removeNote(note))
    })
  }
  }