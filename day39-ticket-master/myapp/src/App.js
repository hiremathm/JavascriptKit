import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Ticket from './Ticket'

const App = () => {
	return(
    <BrowserRouter>
      <div>
        <h3><Ticket/></h3>
      </div>
    </BrowserRouter>
	)
}

export default App;