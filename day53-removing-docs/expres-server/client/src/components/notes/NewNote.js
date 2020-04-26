import React from 'react'
import Axios from 'axios'

import Form from './Form'

class NewNote extends React.Component {
    
    constructor(props){
        super(props)
    }

    handleSubmit = (formData) => {
        let url = "http://localhost:3002/notes"
        Axios({
            method: 'post',
            url: url,
            data: formData,
            headers: {"x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE0MjQxNWJiM2Q2NDZhOTMxOGU3NWUiLCJuYW1lIjoic293bXlhIiwiZW1haWwiOiJzb3dteWFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkSTlsZlBQNENjblVONDdWeTFMU1ZJLmxzVW1YbDAyRFUwSEc0aTBveVp0enRHa1hxaWtnbWUiLCJpYXQiOjE1ODc4NjQyNDh9.X2hz4hYiWVkcrbxsFondxjUX9CrcZ3vOhoe0VoAP474"}
        })
        .then(response => {
            console.log("response", response)
            this.props.history.push(`/notes/${response.data._id}`)
        })
        .catch(error => {
            console.log("error", error)
        })
    }

    render(){
        return(
            <div>
                <h3>New Note</h3>

                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default NewNote