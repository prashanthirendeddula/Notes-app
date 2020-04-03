import React from "react"
import {BrowserRouter,Link,Route,Switch}from 'react-router-dom'
import Home from './components/Home/home'
import NotesList from "./components/Notes/list"
import CategoriesList from './components/Categories/CatagoriesList'
import CategoryShow from './components/Categories/CategoryShow'
import CategoryNew from './components/Categories/CategoryNew'
import CategoryEdit from './components/Categories/CategoryEdit'
import NotesShow from './components/Notes/NotesShow'
import NotesNew from './components/Notes/NotesNew'
import NotesEdit from './components/Notes/NotesEdit'

function App(){
    return(
        <BrowserRouter>
        <div>
            <h1>Notes-App</h1>
        <Link to='/'>Home</Link>
        <Link to="/notes">NotesList</Link>
        <Link to='/categories'>categoriesList</Link>
          <Switch>
        <Route path='/'component={Home} exact={true}/>
        <Route path='/categories'component={CategoriesList} exact={true}/>
        <Route path='/categories/new' component={CategoryNew}/>
        <Route path='/categories/edit/:id' component={CategoryEdit}/>
        <Route path='/categories/:id'component={CategoryShow}/>
        <Route path='/notes'component={NotesList} exact={true} />
        <Route path='/notes/new'component={NotesNew} exact={true}/>
        <Route path='./notes/edit/:id'component={NotesEdit}/>
       <Route path='/notes/:id'component={NotesShow}/>

        </Switch>
           </div>
           </BrowserRouter>
    )
}
export default App