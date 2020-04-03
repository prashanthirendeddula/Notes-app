import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import configureStore from "./store/configureStore"
import App from './app'
import {StartsetNotes} from './actions/notesAction'
import {StartsetCategories} from'./actions/categoriesAction'

const store=configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(StartsetNotes())
store.dispatch(StartsetCategories())
const jsx=(
<Provider   store={store}>
    <App/>

</Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))
