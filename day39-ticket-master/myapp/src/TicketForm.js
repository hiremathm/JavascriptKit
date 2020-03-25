import React from 'react'
import Axios from 'axios'

class TicketForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        errors: {}
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target)
    const formData = {}     
    for (let entry of data.entries()) {
        formData[entry[0]] = entry[1]
    }

    let url = "http://dct-api-data.herokuapp.com/tickets?api_key=5cc7efcde767745c"
    Axios({
        method: 'post',
        url: url,
        data: formData
      })
      .then(response => {
        if(!response.data.hasOwnProperty("errors")){
          this.props.getUpdatedTicket(response.data)
          this.refs.form.reset()
        }else{
          this.setState(() => ({
            errors: response.data.errors
          }))
        }
      })
      .catch(errors => {
        console.log("error");
      });
    }

    render(){
      // control component
      return(
          <div><br/><br/>
            <fieldset>
              <legend>Add Ticket</legend>
              <br/>
              <div>
                  <form onSubmit={this.handleSubmit} action="#" ref="form">              
                      <label> Message : <input type="text" name="message"/> <span>{this.state.errors.message && this.state.errors.message.join(", ")}</span><br/><br/></label>
                      
                      <label> Priority : <select name = "priority">
                          <option value="">Select Priority</option> 
                          <option value="high">High</option>
                          <option value="low">Low</option>
                          <option value="middle">Middle</option>
                      </select> <span>{this.state.errors.priority && this.state.errors.priority.join(", ")}</span><br/><br/>
                      </label>
                      <label> Department : <select name = "department">
                          <option value="">Select Department</option>
                          <option value="technical">Technical</option>
                          <option value="hr">Hr</option>
                          <option value="backend">Backend</option>
                          <option value="frontend">Frontend</option>
                      </select> <span>{this.state.errors.department && this.state.errors.department.join(", ")}</span>
                      </label><br/><br/>
                      <label> Name : <input type="text" name="name"/> 
                      </label> <span>{this.state.errors.name && this.state.errors.name.join(", ")}</span><br/><br/>
                      <input type="hidden" name="user_id" value="221"/>
                      <button type="submit">Create Ticket</button>
                  </form>
              </div>
              </fieldset>
          </div>
      )
    }
  }

export default TicketForm