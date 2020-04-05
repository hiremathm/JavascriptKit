import React from 'react'
import {Link} from 'react-router-dom'

class Form extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const formData = {}
        this.refs.form.reset()
        for(let entry of data.entries()){
            formData[entry[0]] = entry[1]
        }
        this.props.handleSubmit(formData)
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} ref="form">
                    <label>
                        Title : <input type="text" name="title" value={this.state.title ? this.state.title : this.props.title} onChange={this.handleChange}/>
                    </label>
                    <br/><br/>
                    <label>
                        Body : <input type="text" name="body" value={this.state.body ? this.state.body : this.props.body} onChange={this.handleChange}/>
                    </label><br/><br/>
                    <label>
                        <input type="Submit" value={this.props.submitvalue ? this.props.submitvalue : "Create Note"} readOnly/>
                        <Link to="/notes"><button>Back</button></Link>
                    </label>
                </form>

            </div>
        )
    }
}

export default Form