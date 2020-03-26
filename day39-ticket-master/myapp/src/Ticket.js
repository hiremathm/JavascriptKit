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
    console.log("value is", value)
    if(value == "add"){
      let tickets = this.state.tickets.concat(ticket)
      this.setState(() => ({
        tickets: tickets,originalTickets: tickets
      }))
    }
    else if(value == "update"){
      console.log("ticket to be update", ticket)
      let tickets = []
      this.state.tickets.forEach(t => {
        console.log("ticket id",ticket.id == t.id)
        if(t.ticket_code == ticket.ticket_code){
          tickets.push(ticket)
        } else {
          tickets.push(t)
        }  
      })
      this.setState(() => ({
        tickets: tickets,originalTickets: tickets
      }))
    }else if (value == "remove"){
      let tickets = this.state.tickets.filter(t => {
        return t.ticket_code != ticket.ticket_code
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