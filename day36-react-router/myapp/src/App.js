import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Users from './Users'
import Posts from './Posts'
import Home from './Home'
import About from './About'

const App = () => {
	return(
    <BrowserRouter>
      <div>
        {/* Links */}
        <Link to="/">HOME</Link> - <Link to="/About">ABOUT</Link> - 
        <Link to ="/Users"> USERS</Link> -  <Link to ="/Posts">POSTS</Link> 
        
        {/* Route Matchers */}
        <Route path="/" component ={Home} exact={true}/>
        <Route path="/About" component ={About}/>
        <Route path="/Users" component ={Users}/>
        <Route path="/Posts" component ={Posts}/>
      </div>
    </BrowserRouter>
	)
}

export default App;