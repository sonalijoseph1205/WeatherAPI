import React, { Component } from 'react';
import '../Registration/Registration.css'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import SignUpForm from './SignUp';
import SignInForm from './SignIn';

class Registration extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
            <div className="App">

            <div className="App__Aside"></div>
            <div className="App__Form">
                <div className="PageSwitcher">
                <NavLink to="/sign-in" className="PageSwitcher__Item"activeClassName="PageSwitcher__Item--Active">Sign In</NavLink>
                <NavLink exact to ="/" className="PageSwitcher__Item 
                "activeClassName="PageSwitcher__Item--Active">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active"className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to ="/"className="FormTitle__Link " activeClassName="FormTitle__Link--Active">Sign UP</NavLink>
            </div>
            <Route exact path="/"component={SignUpForm}>
            
            </Route>
            <Route path="/sign-in"component={SignInForm}>
               
            </Route>
            </div>
            </div>
            </Router>
         );
    }
}
 
export default Registration;