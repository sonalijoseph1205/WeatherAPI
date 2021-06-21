import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import fire from '../config/config';

class SignInForm extends Component {
    constructor(){
        super();

        this.state={
            email:"",
            password:"",
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleChange(event){
       let target=event.target;
       let value=target.type==='checkbox'? target.checked:target.value;
       let name=target.name;

       this.setState({
           [name]:value
       })
       
    }
    handleSubmit(event){
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((u)=>{}).catch((err)=>{
            console.log(err)
        })
    }
    

    state = {  }
    render() { 
        return ( 
            <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
        <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Email Address</label>
                <input type="email" id="email"className="FormField__Input"placeholder="Enter The Email"name="email" value={this.state.email}onChange={this.handleChange}></input>
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password"className="FormField__Input"placeholder="Enter The Password"name="password"value={this.state.password}onChange={this.handleChange}></input>
            </div>
            
           
            
           
            <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
            </div>
        </form>
    </div>
         );
    }
}
 
export default SignInForm ;