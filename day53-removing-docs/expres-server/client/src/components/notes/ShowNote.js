import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import { Button } from 'reactstrap';

class ShowNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            note: {}        
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        console.log("id is ", id)
        axios.get(`http://localhost:3002/notes/${id}`,{headers: {"x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE0MjQxNWJiM2Q2NDZhOTMxOGU3NWUiLCJuYW1lIjoic293bXlhIiwiZW1haWwiOiJzb3dteWFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkSTlsZlBQNENjblVONDdWeTFMU1ZJLmxzVW1YbDAyRFUwSEc0aTBveVp0enRHa1hxaWtnbWUiLCJpYXQiOjE1ODc4NjQyNDh9.X2hz4hYiWVkcrbxsFondxjUX9CrcZ3vOhoe0VoAP474"}})
            .then(response => {
                console.log("response", response)
                this.setState({note: response.data})
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    handleRemove = () => {
        const id = this.props.match.params.id
        axios.delete(`http://localhost:3002/notes/${id}`)
            .then(response => {
                this.props.history.push(`/notes`)
                // this.setState({note: response.data})
            })
            .catch(error => {
                console.log("error", error)
            })   
    }

    removeTag = (tagId) => {
        console.log('removed tag ', tagId)
        const noteId = this.state.note._id
        axios.delete(`http://localhost:3002/notes/removeTag?noteId=${noteId}&tagId=${tagId}`)
            .then(response => {
                // if(response.data.hasOwnProperty('errors')){
                    this.setState({note: response.data})
                    console.log('removed tag is : ', response.data)
                // }
                // else{
                    // alert('Unable to delete tag, Please wait.')
                // }
            })
    }
    render(){
        // console.log('this.sate.notes.tags',this.state.note.tags)
        return(
            <div>
                <h3>Title : {this.state.note.title}</h3>
                <h5>Body : {this.state.note.body}</h5>
                <h5>Category : {this.state.note.category && this.state.note.category.title}</h5>
                <h5>User : {this.state.note.user && this.state.note.user.name}</h5>
                <h5>Tags : {this.state.note.tags && (
                    <ul>
                        {this.state.note.tags.map(tag => {
                            console.log('sleected tag is ', tag)
                        return <li key={tag.tag._id}>{tag.tag.name} <Button className='btn btn-sm btn-danger' onClick={() => {this.removeTag(tag._id)}}>X</Button></li>
                        })}
                    </ul>
                )}</h5>
                <Button onClick = {this.handleRemove} className='btn btn-sm btn-danger'>Remove</Button>
                <Link to={`/notes/edit/${this.props.match.params.id}`}> <Button className='btn btn-sm btn-success'>Edit</Button></Link>
                <Link to="/notes"> <Button className='btn btn-sm btn-primary'>Back</Button></Link>
            </div>
        )
    }
}

export default ShowNote;