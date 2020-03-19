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
        {/* Links */}
        <Link to="/">HOME</Link> - <Link to="/about">ABOUT</Link> - 
        <Link to ="/users"> USERS</Link> -  <Link to ="/Posts">POSTS</Link> 
        
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