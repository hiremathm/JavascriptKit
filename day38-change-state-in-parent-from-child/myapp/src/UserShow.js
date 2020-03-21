import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component {
    constructor(){
        super()
        this.state = {
            user: {},
            posts: []
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) =>{
          let user = response.data
          this.setState({user})
        })

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) =>{
          let posts = response.data
          this.setState({posts})
        })
    }

	render(){
        console.log(this.state.user.address)
		return (
			<div>
                <h1>User show component</h1>
				<table border="1">
                 <thead>
                    <tr>
                    <th>
                    #
                    </th>
                    <th>
                    Name
                    </th>
                    <th>
                    Email
                    </th>
                    <th>
                    UserName
                    </th>

                    </tr>
                </thead>
                <tbody>    
                    <tr>
                        <td>{this.state.user.id}</td>
                        <td>{this.state.user.name}</td>
                        <td>{this.state.user.email}</td>
                        <td>{this.state.user.username}</td>
                    </tr> 
                    </tbody>
                </table>

                <h2>List Of Posts - {this.state.posts.length}</h2>
                <ul>
                {this.state.posts.map (post => {
                    return <li key = {post.id}><h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3></li>
                })}
                </ul>
        	</div>
		)
	}
}

export default UserShow