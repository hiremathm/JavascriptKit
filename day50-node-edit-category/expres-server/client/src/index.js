import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom'

// import notes
import NotesList from './components/notes/NoteList'
import ShowNote from './components/notes/ShowNote'
import NewNote from './components/notes/NewNote'
import EditNote from './components/notes/EditNote'

// import categories
import CategoryList from './components/categories/CategoryList'

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <div>
                <h1>Note React Frontend And Express Backend App</h1>
                
                <span><Link to="/notes" exact={true}>Notes</Link></span> {" ".repeat(1)}
                <span><Link to ="/categories" exact={true}>Categories</Link></span>


                <Switch>
                    {/* Notes Routes */}
                    <Route path="/notes" component={NotesList} exact={true}></Route>
                    <Route path="/notes/new" component={NewNote} exact={true}></Route>
                    <Route path="/notes/edit/:id" component={EditNote} ></Route>
                    <Route path="/notes/:id" component={ShowNote} exact={true}></Route>
                
                    {/* Categories Routes */}
                    <Route path="/categories" component = {CategoryList} exact={true}></Route>
                    
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))