import React from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'

import {setUser} from '../../actions/user'

class Account extends React.Component {

    // constructor(){
    //     super()
    //     this.state ={
    //         user: {}
    //     }
    // }

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
                // this.setState({user: response.data})
                this.props.dispatch(setUser(response.data))
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
                <h4>Name : {this.props.user && this.props.user.name}</h4>
                <h6>Email : {this.props.user && this.props.user.email}</h6>
                <h6>Phone : {this.props.user && this.props.user.mobile}</h6>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(Account);