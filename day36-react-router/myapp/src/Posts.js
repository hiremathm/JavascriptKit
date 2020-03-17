import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
class Posts extends React.Component {
	constructor(){
		super()
		this.state = {
			posts: []
		}
	}

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>{
        let posts = response.data
        this.setState({posts})
      })
  }

	render(){
		return (
			<div>
        <h1>Listing Posts - {this.state.posts.length}</h1>	
        <table border="1">
          <thead>
            <tr>
              <th>
              #
              </th>
              <th>
              Title
              </th>
              <th>
              Body
              </th>
              <th>
                User Id
              </th>
            </tr>
          </thead>
          <tbody>
            
              {this.state.posts.map (post => {
                return <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>{post.userId}</td>
                </tr> 
              })}
            
          </tbody>
        </table>			
			</div>
		)
	}
}

export default Posts;