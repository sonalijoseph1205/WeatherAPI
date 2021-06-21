import React, { Component } from 'react';
import './App.css';
import Registration from './Registration/Registration'
import Movies from './movies/movies'
import fire from './config/config';
import Fav from './fav/fav'


class App extends Component {

  

  constructor(props) {
    super(props)
    this.state = {
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
      this.setState({user})
      }else{
      this.setState({user:null})
      }
    })
  }
  render() {
    return (
      
      <div>
        {this.state.user ?(<Movies />):(<Registration/>)}
        
      </div>
      
       

    )}
}

export default App;
