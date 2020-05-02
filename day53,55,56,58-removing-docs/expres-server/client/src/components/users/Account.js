import React from 'react'
import Axios from 'axios'

class Account extends React.Component {

    constructor(){
        super()
        this.state ={
            user: {}
        }
    }

    componentDidMount = () => {
        const token = localStorage.getItem("userAuthToken")
        const url = "http://localhost:3002/users/account"
        if(token){
            Axios({
                method: 'post',
                url: url,
                data: {},
                headers: {"x-auth": localStorage.getItem('userAuthToken')}
            })
            .then(response => {
                console.log("response", response.data)
                this.setState({user: response.data})
                console.log("props", this.props)
                // this.props.history.push('/notes')
            })
            .catch(error => {
                console.log("error", error)
            })
        }
    }

    render(){
        return(
            <div>
                <h2>Account Information</h2>
                <h4>Name : {this.state.user && this.state.user.name}</h4>
                <h6>Email : {this.state.user && this.state.user.email}</h6>
                <h6>Phone : {this.state.user && this.state.user.mobile}</h6>
            </div>
        )
    }
}

export default Account;