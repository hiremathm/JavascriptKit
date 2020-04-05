import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom'

import NotesList from './components/notes/NoteList'
import ShowNote from './components/notes/ShowNote'
import NewNote from './components/notes/NewNote'
import EditNote from './components/notes/EditNote'

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <div>
                <h1>Client App</h1>
                <Link to="/notes" exact={true}>Notes</Link>
                <Switch>
                    <Route path="/notes" component={NotesList} exact={true}></Route>
                    <Route path="/notes/new" component={NewNote} exact={true}></Route>
                    <Route path="/notes/edit/:id" component={EditNote} ></Route>
                    <Route path="/notes/:id" component={ShowNote} exact={true}></Route>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))