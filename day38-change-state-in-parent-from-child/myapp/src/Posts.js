import React from 'react'
import {Link} from 'react-router-dom'
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
      <div className="container">
      <div className="row post-cards">
        {this.state.posts.map(
          post => {
            return (
              <div className="col-md-4">
                <div className="card">
                  
                  <div className="card-body">
                    <h5 className="card-title">
                    {post.title}
                    </h5>
                    <div className="card-text">
                      {post.body}
                    </div>
                    <br/><br/>
                    <div>
                      <Link to={`/posts/${post.id}`}>View</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
      </div>
		)
	}
}

export default Posts;