import React, { Component } from 'react';
import '../movies/movies.css';
import MovieRow from '../MovieRow'
import $ from 'jquery'
import fire from '../config/config';
import Fav from '../fav/fav'



class Movies extends Component {

  

  constructor(props) {
    super(props)
    this.state = {}
    this.logOut=this.logOut.bind(this)
    this.favouriteMovie=this.favouriteMovie.bind(this)
    
    this.performSearch("ant man")
  }


  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=f3341d85cc3a0f3336a9cf272080e4c3&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  logOut(){
      fire.auth().signOut();
  }
  favouriteMovie() {
    this.setState({
      showComponent: true,
    });
    
  }
  
  render() {
    return (
      <div className="txt">
        <div className="flex titleBar">
        <div>
        <table className="titleBar">
            
          <tbody>
            <tr>
            
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
             
            </tr>
          </tbody>
        </table>
        </div>
        <div>
          
        <input type="button" value="Favourite" class="vtn"onClick={this.favouriteMovie}></input>
        
        
        <button onClick={this.logOut} className="vtn">Log Out</button>
        
        </div>
        
        </div>
        {this.state.showComponent ?
           <Fav/> :
           null
        }
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}
        
      </div>
      
      
    );
  }
}

export default Movies;
