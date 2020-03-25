import React from 'react'
import Axios from 'axios'
class TableRow extends React.Component {
  constructor(){
      super()
      this.state = {
          ticket: {}
      }
  }
  clickTicket = () => {
    let ticket_code = this.props.ticket.ticket_code
    Axios.get(`http://dct-api-data.herokuapp.com/tickets/${ticket_code}?api_key=5cc7efcde767745c`)
      .then(response => {
        let ticket = response.data
        this.setState({ticket})
      })
  }

  render(){
    return(
      <tr key={this.props.ticket.id}>
        <td>{this.props.ticket.ticket_code}</td>
        <td>{this.props.ticket.name}</td>
        <td>{this.props.ticket.message}</td>
        <td>{this.props.ticket.priority}</td>
        <td>{this.props.ticket.department}</td>
        <td>{this.props.ticket.user_id}</td>
        <td><input type="checkbox" id={this.props.ticket.id} onClick = {this.clickTicket}/></td>
      </tr>
    )
  }
}

export default TableRow