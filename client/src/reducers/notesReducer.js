const notesReducerInitialState=[

]
const notesReducer=(state=notesReducerInitialState,action)=>{
    switch(action.type){
        case 'SET_NOTES':{
            return [...action.payload]
        }
        case 'ADD_NOTE':{
            return [...state,action.payload]
        }

            case "REMOVE_NOTE":{
                return  state.filter(note=>note.id!==action.payload.id)
            }
        
        default:{
            return [...state]
        }
    }
}
export default notesReducer