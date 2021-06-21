import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }
  handleSubmit(){
    let databody = {
        "movieName": this.props.movie.title
        
    }

    return fetch('http://localhost:5000/favourite', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}

  render() {
    return <div className="body-1"key={this.props.movie.id}>
    <div>
      <div className="poster">
        <div className="movie-poster">
          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </div>
        <div className="text">
          <h3>{this.props.movie.title}</h3>
          <p >{this.props.movie.overview}</p>
          <input className="view" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
          <input className="view" type="button"  value="Add To Fav" onClick={this.handleSubmit.bind(this)}/>
          
        </div>
      </div>
    </div>
  </div>
  }
}

export default MovieRow