import React from 'react'
import TableRow from './TableRow'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: props.tickets
    }
    console.log(props)

  }
  
  updateRow = (ticket) => {
    this.props.getUpdatedTicket(ticket,"update")
    console.log("updated ticket is ", ticket)
  }

  removeRow = (ticket) => {
    console.log("removed ticket is ", ticket)
    this.props.getUpdatedTicket(ticket, "remove")

  }

  render(){
    return(
      <div>
        <table border = "1">
          <thead>
            <tr>
              <th>Ticket Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Department</th>
              <th>User Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tickets.map (ticket => {
            return <TableRow key={ticket.ticket_code} ticket={ticket} updateRow={this.updateRow} removeRow={this.removeRow}/>})}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table