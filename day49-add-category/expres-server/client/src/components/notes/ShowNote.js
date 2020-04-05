import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ShowNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            note: {}        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3002/notes/${id}`)
            .then(response => {
                console.log("response : ", response)
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
    render(){
        return(
            <div>
                <h3>Title : {this.state.note.title}</h3>
                <h5>Body : {this.state.note.body}</h5>
                <h5>Category : {this.state.note.category && this.state.note.category.title}</h5>
                <button onClick = {this.handleRemove}>Remove</button>
                <Link to={`/notes/edit/${this.props.match.params.id}`}><button>Edit</button></Link>
                <Link to="/notes"><button>Back</button></Link>
            </div>
        )
    }
}

export default ShowNote;