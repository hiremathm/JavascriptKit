import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, CardBody, Button, CardTitle, CardText, CardImg, CardSubtitle, CardDeck,CardColumns} from 'reactstrap'

import NewNote from './NewNote'


class NoteList extends React.Component {
    constructor(){
        super()
        this.state = {
            notes: [],
            colors: ['secondary','primary','success','info','warning']
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:3002/notes',{"headers": {"x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE0MjQxNWJiM2Q2NDZhOTMxOGU3NWUiLCJuYW1lIjoic293bXlhIiwiZW1haWwiOiJzb3dteWFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkSTlsZlBQNENjblVONDdWeTFMU1ZJLmxzVW1YbDAyRFUwSEc0aTBveVp0enRHa1hxaWtnbWUiLCJpYXQiOjE1ODc4NjQyNDh9.X2hz4hYiWVkcrbxsFondxjUX9CrcZ3vOhoe0VoAP474"}})
            .then(response => {
                this.setState({notes: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <div >
                <Button outline className="NewNote" color="primary" href="/notes/new" exact={true}>New Note</Button>
                <br/><br/>
                <div className="row">
                    {this.state.notes.map(note => {
                        return(
                            <div key = {note._id} className="col-sm-4">
                                <CardDeck>
                                    <Card body outline color={this.state.colors[Math.floor(Math.random() * 5)]}>
                                        <CardBody>
                                            <CardTitle>
                                                <Link to={`/notes/${note._id}`} exact={true}>{note.title}</Link>
                                            </CardTitle>
                                            <CardText>
                                                {note.body}
                                                
                                            </CardText>

                                           
                                            <CardText>
                                                <small className="text-muted">Tags : </small> 
                                                {note.tags.map(tag => {
                                                    return <small className="text-muted"><Link to={`/tags/${tag._id}`}>{tag.tag.name[0].toUpperCase()+ tag.tag.name.slice(1)} </Link> </small>
                                                })}
                                            </CardText>

                                            <CardText>
                                                <small className="text-muted">Last updated at {`${new Date(note.created_at).getHours()}:${new Date(note.created_at).getMinutes()} , ${new Date(note.created_at).toDateString()}`} </small>
                                                <small className="text-muted">, By {note.user.name}</small>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </CardDeck>
                                <br/>
                            </div>
                        )
                    })}
                </div>
                <br/>

                {/* <h3>Notes List : {this.state.notes.length}</h3>
                <ul>
                    {this.state.notes.map(note => {
                        return <li key={note._id}><Link to={`/notes/${note._id}`} exact={true}>{note.title}</Link></li>
                    })}
                </ul> */}
                {/* <h3><Link to="/notes/new" exact={true}>New Note</Link></h3> */}
            </div>
        )
    }
}

export default NoteList