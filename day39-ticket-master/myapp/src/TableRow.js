import React from 'react'
import Axios from 'axios'
class TableRow extends React.Component {
  constructor(){
      super()
      this.state = {
          isHide: false
      }
  }
  clickTicket = () => {
    let priorityHandle = document.getElementById(this.props.ticket.ticket_code)
    // console.log("priorty",priorityHandle.innerText)
    // if(priorityHandle.innerText == "Update Priority"){
    //   priorityHandle.innerText = "Ok"
    // }else if(priorityHandle.innerText == "Ok"){
    //   priorityHandle.innerText = "Update Priority"
    // }
    
    if(this.state.isHide == true){
      this.setState({isHide: false})
    }else{
      this.setState({isHide: true})
    }
  }

  removeTicket = () => {
    let url = `http://dct-api-data.herokuapp.com/tickets/${this.props.ticket.ticket_code}?api_key=5cc7efcde767745c` 
    Axios({
      method: 'delete',
      url: url
    })
    .then(response => {
      if(!response.data.hasOwnProperty("errors")){
          console.log(response.data)
          this.props.removeRow(this.props.ticket)
        }else{
      }
    })
    .catch(errors => {
      console.log(errors);
    });
  }

  updatePriority = (e) => {
    let priority = e.target.value
    let url = `http://dct-api-data.herokuapp.com/tickets/${this.props.ticket.ticket_code}?api_key=5cc7efcde767745c`

    this.setState({isHide: false})
    Axios({
        method: 'put',
        url: url,
        data: {
          "priority": priority
        }
      })
      .then(response => {
        if(!response.data.hasOwnProperty("errors")){
            this.props.updateRow(response.data)
        }else{
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  }

  render(){
    console.log("is hide", this.state.isHide)
    return(
      <tr key={this.props.ticket.id}>
        <td>{this.props.ticket.ticket_code}</td>
        <td>{this.props.ticket.name}</td>
        <td>{this.props.ticket.message}</td>
        <td>{this.props.ticket.priority}</td>
        <td>{this.props.ticket.department}</td>
        <td>{this.props.ticket.user_id}</td>

        <td>{this.state.isHide && <span><button id = "high" onClick={this.updatePriority} value="high" >High</button> <button id = "low" onClick={this.updatePriority} value="low">Low</button> <button id = "middle" onClick={this.updatePriority} value="middle">Medium</button> </span>}
        <button id="update_priority" onClick = {this.clickTicket} >Update Priority</button> <button id={this.props.ticket.ticket_code} onClick = {this.removeTicket} value="remove">Remove</button></td>
      </tr>
    )
  }
}

export default TableRow