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
            data: formData
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