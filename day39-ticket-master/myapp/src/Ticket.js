import React from 'react'
import Axios from 'axios'

import Table from './Table'
import TicketForm from './TicketForm'
import SearchForm from './SearchForm'

class Ticket extends React.Component {
  constructor() {
    super()
    this.state = {
        tickets: [],
        originalTickets: []
    }
  }

  componentDidMount = () => {
    Axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=5cc7efcde767745c')
      .then(response => {
        let tickets = response.data
        let originalTickets = response.data
        this.setState(() => ({tickets, originalTickets}))
      })
  }

  getUpdatedTicket = (ticket, value) => {
    if(value == "update"){
      console.log("ticket", ticket)
      let tickets = this.state.tickets.filter(t => {
        return (t.id == ticket.id ? t.priority = ticket.priority : t)
      })
      this.setState(() => ({
        tickets: tickets,originalTickets: tickets
      }))
    }else if (value == "remove"){
      let tickets = this.state.tickets.filter(t => {
        return (t.id != ticket.id)
      })
      this.setState(() => ({
        tickets: tickets,originalTickets: tickets
      }))
    }
  }

  handleSearchUpdate = (value) => {
    this.setState((prevState) => ({tickets: prevState.originalTickets.filter(ticket => ticket.ticket_code.includes(value))}))
  }

  handleShowAll = () => {
    this.setState((prevState) => ({tickets: prevState.originalTickets}))
  }

  handlePriorityCheck = (value) => {
    this.setState((prevState) => ({tickets: prevState.originalTickets.filter(ticket => ticket.priority == value)}))
  }

  render(){
    return(
      <div>
        <p>Listing Tickets - {this.state.tickets.length}</p>
        <div><SearchForm handleShowAll = {this.handleShowAll} handleSearchUpdate={this.handleSearchUpdate} handlePriorityCheck={this.handlePriorityCheck} /></div><br/>
        <div><Table tickets={this.state.tickets} getUpdatedTicket= {this.getUpdatedTicket}/></div>
        <div><TicketForm getUpdatedTicket= {this.getUpdatedTicket}/></div>
      </div>
    )
  }
}

export default Ticket