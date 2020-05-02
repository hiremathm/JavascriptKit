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
        axios.get('http://localhost:3002/notes',{"headers": {"x-auth": localStorage.getItem('userAuthToken')}})
            .then(response => {
                this.setState({notes: response.data})
            })
            .catch(error => {
                console.log("error", error)

                this.setState({notes: []})

                            })
    }

    render(){
        return(
            <div >
                <Button outline className="NewNote" color="primary" href="/notes/new">New Note</Button>
                <br/><br/>
                <div className="row">
                    {this.state.notes.map(note => {
                        return(
                            <div key = {note._id} className="col-sm-4">
                                <CardDeck>
                                    <Card body outline color={this.state.colors[Math.floor(Math.random() * 5)]}>
                                        <CardBody>
                                            <CardTitle>
                                                <Link to={`/notes/${note._id}`} >{note.title}</Link>
                                            </CardTitle>
                                            <CardText>
                                                {note.body}
                                            </CardText>
                                            <CardText>
                                                <small className="text-muted">Tags : </small> 
                                                {note.tags.map(tag => {
                                                    return <small key={tag._id} className="text-muted"><Link key={tag._id} to={`/tags/${tag._id}`}>{tag.tag.name[0].toUpperCase()+ tag.tag.name.slice(1)} </Link> </small>
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
            </div>
        )
    }
}

export default NoteList