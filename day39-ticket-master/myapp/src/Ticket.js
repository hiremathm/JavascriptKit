import React from 'react'
import Axios from 'axios'

import Table from './Table'
import TicketForm from './TicketForm'

class Ticket extends React.Component {
  constructor() {
    super()
    this.state = {
        tickets: []
    }
  }

  componentDidMount = () => {
    Axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=5cc7efcde767745c')
      .then(response => {
        let tickets = response.data
        this.setState(() => ({tickets}))
      })
  }

  getUpdatedTicket = (ticket) => {
    this.setState(() => ({
      tickets: this.state.tickets.concat(ticket)
    }))
  }

  render(){
    return(
      <div>
        <p>Listing Tickets - {this.state.tickets.length}</p>
        <div><Table tickets={this.state.tickets}/></div>
        <div><TicketForm getUpdatedTicket= {this.getUpdatedTicket}/></div>
      </div>
    )
  }
}

export default Ticket