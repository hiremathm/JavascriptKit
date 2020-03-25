import React from 'react'
import TableRow from './TableRow'

class Table extends React.Component {
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
            return <TableRow key={ticket.ticket_code} ticket={ticket}/>})}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table