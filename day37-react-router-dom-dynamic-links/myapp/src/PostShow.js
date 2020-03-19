import React from 'react'
import axios from 'axios'

class PostShow extends React.Component {
    constructor(){
        super()
        this.state = {
            post: {},
            comments: []
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) =>{
          let post = response.data
          this.setState({post})
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) =>{
          let comments = response.data
          console.log(comments)
          this.setState({comments})
        })
    }

    render(){
        return(
            <div>
                <h3>Post : {this.state.post.title}</h3>
                <p>Body : {this.state.post.body}</p>

                <h3>List Of Comments - {this.state.comments.length}</h3>
                <ul>
                {this.state.comments.map(comment => {
                return <li key = {comment.id}>Body : <p>{comment.body}</p>
                
                By <small>{comment.name}</small> , <small>{comment.email}</small>
                <br/><br/>
                </li>
                })}
                </ul>
            </div>
        )
    }

}


export default PostShow