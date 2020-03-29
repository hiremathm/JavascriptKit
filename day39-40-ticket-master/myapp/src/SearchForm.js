import React from 'react'

class SearchForm extends React.Component {
    constructor(){
        super()
        this.state = {
            search: ""
        }
    }

    handleSearch = (e) => {
        let search = e.target.value
        this.setState({search})
        this.props.handleSearchUpdate(search)
    }

    handleAllCheckbox = (value) => {
        console.log("Select all check boxes", value)
    }

    render(){
        return (
            <div>
            <input type="text" onChange={this.handleSearch} placeholder = "Search By Ticket Code"/> Filter By
            {/* <button value="All" onClick ={() => {this.handleAllCheckbox('all')}}>Select All</button> */}
            -
            <button value="High" onClick ={()=> {this.props.handlePriorityCheck('high')}}>High</button>
            <button value="Medium" onClick ={()=> {this.props.handlePriorityCheck('middle')}}>Medium</button>
            <button value="Low" onClick ={()=> {this.props.handlePriorityCheck('low')}}>Low</button>
            <button value="Show All" onClick={() => {this.props.handleShowAll()}}>Show All</button>
            </div>
        )
    }
}

export default SearchForm