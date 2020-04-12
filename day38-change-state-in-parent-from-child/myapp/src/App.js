import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Users from './Users'
import Posts from './Posts'
import Home from './Home'
import About from './About'
import UserShow from './UserShow'
import PostShow from './PostShow'

const App = () => {
	return(
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item main-links" >
                <Link to="/">HOME</Link>        
              </li>
              <li className="nav-item main-links">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="nav-item main-links">
                <Link to ="/users"> USERS</Link>
              </li>
              <li className="nav-item main-links">
                <Link to ="/Posts">POSTS</Link>
              </li>
            </ul>
        </nav>
 
        {/* Route Matchers */}
        <Route path="/" component ={Home} exact={true}/>
        <Route path="/about" component ={About}/>
        <Route path="/users" component ={Users} exact={true}/>
        <Route path="/users/:id" component={UserShow}/>
        <Route path="/Posts" component ={Posts} exact={true}/>
        <Route path="/posts/:id" component={PostShow} />

      </div>
    </BrowserRouter>
	)
}

export default App;