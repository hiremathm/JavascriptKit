import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import NewNote from './NewNote'


class NoteList extends React.Component {
    constructor(){
        super()
        this.state = {
            notes: []
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:3002/notes')
            .then(response => {
                this.setState({notes: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <div>
                <h3>Notes List : {this.state.notes.length}</h3>
                <ul>
                    {this.state.notes.map(note => {
                        return <li key={note._id}><Link to={`/notes/${note._id}`} exact={true}>{note.title}</Link></li>
                    })}
                </ul>
                <h3><Link to="/notes/new" exact={true}>New Note</Link></h3>
            </div>
        )
    }
}

export default NoteList