import axios from '../config/axois'
import { bindActionCreators } from 'redux'
//getting categories

export const setCategories=(categories)=>{
    return{
        type:'SET_CATEGORIES',payload:categories
    }
}
export const StartsetCategories=()=>{
    return(dispatch)=>{
        axios.get('/categories')
              .then((response)=>{
                  const categories=response.data
                  console.log(categories)
                  dispatch(setCategories(categories))
              })

    }
}
//adding categories

export const addCategory=(category)=>{
    return{
        type:'ADD_CATEGORY',payload:category
    }
}
export const StartaddCategories=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/categories',formData)
          .then((response)=>{
              const category=response.data
              console.log(category)
             dispatch(addCategory(category))
                  redirect()
          })
    }
}
//remove
export const removeCategory=(category)=>{
    return{
        type:"REMOVE_CATEGORY",payload:category
    }
}
export const StartremoveCategory=(id)=>{
    return(dispatch)=>{
        axios.delete(`/categories/${id}`)
              .then((response)=>{
               const category=response.data
               console.log(category)
               dispatch(removeCategory(category))
    })
}
}
//update
export const updateCategory=(category)=>{
    return{
        type:'UPDATE_CATEGORY',payload:category
    }
}
export const StartupdateCategory=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/categories/${id}`,formData)
          .then((response)=>{
              console.log(response.data)
              const category=response.data
              dispatch(updateCategory(category))
              redirect()
          })
    }
}