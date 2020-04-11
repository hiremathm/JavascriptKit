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
import CategoryShow from './components/categories/CategoryShow'
import CategoryNew from './components/categories/CategoryNew'
import CategoryEdit from './components/categories/CategoryEdit'

// import users
import User from './components/users/UserList'
import UserShow from './components/users/UserShow'

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <div>
                <h1>Note React Frontend And Express Backend App</h1>
                
                <span><Link to="/notes" exact={true}>Notes</Link></span> {" ".repeat(1)}
                <span><Link to ="/categories" exact={true}>Categories</Link></span>{" ".repeat(1)}
                <span><Link to="/users" exact={true} >Users</Link></span>

                <Switch>
                    {/* Notes Routes */}
                    <Route path="/notes" component={NotesList} exact={true}></Route>
                    <Route path="/notes/new" component={NewNote} exact={true}></Route>
                    <Route path="/notes/edit/:id" component={EditNote} ></Route>
                    <Route path="/notes/:id" component={ShowNote} exact={true}></Route>
                
                    {/* Categories Routes */}
                    <Route path="/categories" component = {CategoryList} exact={true}></Route>
                    <Route path="/categories/new" component = {CategoryNew} exact={true}></Route>
                    <Route path="/categories/edit/:id" component={CategoryEdit} exact={true}></Route>
                    <Route path="/categories/:id" component={CategoryShow} exact={true}></Route>

                    {/* Users Routes */}
                    <Route path="/users" component={User} exact={true}></Route>
                    <Route path="/users/:id" component = {UserShow} exact={true}></Route>
                </Switch>
                
            </div>
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))