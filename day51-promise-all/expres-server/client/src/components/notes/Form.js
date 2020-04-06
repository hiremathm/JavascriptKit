import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Form extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: "",
            category: "",
            user: "",
            users: [],
            categories: []
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

    componentDidMount = () => {
        axios.get('http://localhost:3002/categories')
            .then(response => {
                this.setState({categories: response.data})
            })
            .catch(error => {
                console.log(error)
            })

        axios.get('http://localhost:3002/users')
            .then(response => {
                this.setState({users: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    componentWillReceiveProps = (nextProps) => {
        this.setState(() => ({
            title: nextProps.note.title,
            body: nextProps.note.body,
            category: nextProps.note.category,
            user: nextProps.note.user
        }))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} ref="form">
                    <label>
                        Category : <select name="category" onChange={this.handleChange}>
                            <option value="">Select Category</option>
                            {this.state.categories.map(category => {
                            return <option key={category._id} value={category._id} selected={this.state.category._id == category._id}>{category.title}</option>
                            })}                   
                        </select>
                    </label>
                    <br/><br/>
                    <label>
                        Title : <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </label>
                    <br/><br/>
                    <label>
                        Body : <input type="text" name="body" value={this.state.body } onChange={this.handleChange}/>
                    </label>
                    <br/><br/>

                    <label>
                        User : <select name="user" onChange={this.handleChange}>
                            <option value="">Select User</option>
                            {this.state.users.map(user => {
                            return <option key={user._id} value={user._id} selected={this.state.user._id == user._id}>{user.name}</option>
                            })}                   
                        </select>
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