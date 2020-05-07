import React from 'react'
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom'
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, NavbarText, Button} from 'reactstrap'
import _ from 'lodash'

import 'bootstrap/dist/css/bootstrap.min.css';

// import notes
import NotesList from './components/notes/NoteList'
import ShowNote from './components/notes/ShowNote'
import NewNote from './components/notes/NewNote'
import EditNote from './components/notes/EditNote'

// import categories
import CategoryList from './components/categories/CategoryList'
import CategoryShow from './components/categories/CategoryShow'
import CategoryNew from './components/categories/CategoryNew'
import CategoryEdit from './components/categories/CategoryEdit'

// import users
import User from './components/users/UserList'
import UserShow from './components/users/UserShow'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'
import Logout from './components/users/Logout'

// actions
import {connect} from 'react-redux'

class App extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         isAuthenticated: false
    //     }
    // }

    // handleIsAuthenticated = (bool) => {
    //     console.log("boll is ", bool)
    //     this.setState({isAuthenticated: bool})
    // }

    // componentDidMount = () => {
    //     if(localStorage.getItem('userAuthToken')){
    //         this.setState({isAuthenticated: true})
    //     }
    // }

    render(){
        console.log("props in app ",this.props.user)
        return (
            <BrowserRouter>
                {/* <div> */}
                <Navbar color="dark" dark expand="sm">
                    <NavbarBrand href="/notes">Keep Note <small>(MERN Stack)</small> </NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            {/* <NavLink href="/notes" >Notes</NavLink>  */}
                        </NavItem> 
                        <NavItem>
                            <NavLink href="/categories" >Categories</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/users" >Users</NavLink>
                        </NavItem>
                    </Nav>
                        {_.isEmpty(this.props.user) ?
                            (
                                <Nav>            
                                    <NavItem>
                                        <NavLink href="/register">Register</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/login">Login</NavLink>
                                    </NavItem>
                                </Nav>  
                                )
                            :
                            (
                                <Nav>
                                    <NavItem>
                                        <NavLink href="/Account">Account</NavLink>
                                    </NavItem> 
                                    <NavItem>
                                        <NavLink href="/Logout">Logout</NavLink>
                                    </NavItem>
                                </Nav>        
                            )
                             
                        }              
                </Navbar>
                <br/>
 

                <Switch>
                    {/* Notes Routes */}
                    <Route path="/notes" component={NotesList} exact={true}></Route>
                    <Route path="/notes/new" component={NewNote} exact={true}></Route>
                    <Route path="/notes/edit/:id" component={EditNote} ></Route>
                    <Route path="/notes/:id" component={ShowNote} exact={true}></Route>
                
                    {/* Categories Routes */}
                    <Route path="/categories" component = {CategoryList} exact={true}></Route>
                    <Route path="/categories/new" component = {CategoryNew} exact={true}></Route>
                    <Route path="/categories/edit/:id" component={CategoryEdit} exact={true}></Route>
                    <Route path="/categories/:id" component={CategoryShow} exact={true}></Route>

                    {/* Users Routes */}
                    <Route path="/users" component={User} exact={true}></Route>
                    <Route path="/users/:id" component = {UserShow} exact={true}></Route>
                    <Route path="/register" component ={Register} exact={true}></Route>
                    <Route path="/login" component={Login} exact={true}></Route>
                    {/* <Route path="/login" render={(props) => {
                           return <Login {...props} handleIsAuthenticated = {this.handleIsAuthenticated}/>
                    }}></Route> */}
                    <Route path="/account" component={Account} exact={true}></Route>
                    <Route path="/logout" component={Logout} exact={true}></Route>
                    {/* <Route path="/logout" render={(props) => {
                           return <Logout {...props} handleIsAuthenticated = {this.handleIsAuthenticated}/>
                    }}></Route> */}

                    <Route render={() => {
                           return <h3>Welcome to Note App</h3>
                    }}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(App);