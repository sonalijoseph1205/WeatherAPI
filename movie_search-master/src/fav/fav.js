import React, { Component } from 'react';
//import Link from 'next/link'
import {
    NavLink,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
    
  } from 'reactstrap'
class Fav extends Component {

  

  constructor(props) {
    super(props)
    this.state = {
      user:[],
      
      
    }
    //this.handleClick=this.handleClick.bind(this)
    
    
  }
  // handleClick = userId => {
  //   const requestOptions = {
  //     method: 'DELETE'
  //   };  
  //   fetch("/favourite/" + userId, requestOptions).then((response) => {
  //     return response.json();
  //   }).then((result) => {
  //     console.log(result)
  //   });
  // }
  
  
  
  
  componentDidMount(){
   fetch('/favourite')
   .then(res=>res.json()).then(user=>this.setState({user},()=>console.log('user etched',user)))
   
  }
  
  
  render() {
    
    return (
        
        
       <ul>         
            <h3>Favourite Movies</h3>      
        {this.state.user.map(users=>
        
          <li key={users.id}>{users.movieName}</li>)}
          
         
    </ul>
         
        // <input type="button" value="Delete" onClick={this.handleClick(users._id)}></input>
    
    )
};
}

export default Fav;
