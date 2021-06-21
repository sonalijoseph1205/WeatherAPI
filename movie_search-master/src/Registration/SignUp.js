import React, { Component } from 'react';
import {Link ,Route} from 'react-router-dom'
import fire from '../config/config';

class SignUpForm extends Component {
    constructor(){
        super();

        this.state={
            
            email:"",
            password:""
           
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleChange(event){
       let target=event.target;
       let value=target.value;
       let name=target.name;

       this.setState({
           [name]:value
       })
       
    }
    handleSubmit(event){
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            <Route path="/sign-in">
               
            </Route>
        }).catch((err)=>{console.log(err)})
       
    }
    state = {  }
    render() { 
        return ( <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
           
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Email Address</label>
                <input type="email" id="email"className="FormField__Input"placeholder="Enter The Email"name="email"value={this.state.email}onChange={this.handleChange}></input>
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="text" id="password"className="FormField__Input"placeholder="Enter The Password"name="password"value={this.state.password}onChange={this.handleChange}></input>
            </div>
            <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I am Already a member</Link>
            </div>
        </form>
    </div> );
    }
}
 
export default SignUpForm;