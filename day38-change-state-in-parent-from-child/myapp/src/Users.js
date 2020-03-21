import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


import UserShow from './UserShow'

class Users extends React.Component {
	constructor(){
		super()
		this.state = {
			users: []
		}
  }
  
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
      let users = response.data
      this.setState({users})
    })
  }

	render(){
		return (
			<div>
        <h1>Listing Users - {this.state.users.length}</h1>
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
              <th>
                Address
              </th>
              <th>
                Phone
              </th>
              <th>
                Website
              </th>
              <th>
                Company
              </th>
            </tr>
          </thead>
          <tbody>    
            {this.state.users.map (user => {
              return <tr key = {user.id}>
                <td>{user.id}</td>
                <td><Link to={`/users/${user.id}`}>{user.name} </Link></td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <ul>
                    <li>Street - {user.address["street"]}</li>
                    <li>Suite - {user.address["suite"]}</li>
                    <li>City - {user.address["city"]}</li>
                    <li>Zipcode - {user.address["zipcode"]}</li>
                  </ul>
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <ul>
                    <li>Name - {user.company.name}</li>
                    <li>Catch Pharse - {user.company.catchPhrase}</li>  
                    <li>BS - {user.company.bs}</li>
                  </ul>
                </td>
              </tr> 
            })}
          </tbody>
        </table>
			</div>
		)
	}
}

export default Users