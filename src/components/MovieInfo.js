import React, {Component} from 'react';
import axios from 'axios';
import TopCard from './TopCard';
import TrailerCarousel from './TrailerCarousel';
import PersonCarousel from './PersonCarousel';
import PosterCarousel from './PosterCarousel';

class MovieInfo extends Component {
    
    state = {
        movie: {},
        name: "",
        backdropSrc: () => (""),
        posterSrc: () => (""),
        year: "",
        rating: "",
        genres: "",
        summary: "",
        director: "",
        producers: "",
        writers: ""
    }
    
    //Method
    handleGetData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US
`)
            .then(response => {
                 this.handleSetMovie(response.data)
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    handleSetMovie = (movie) => {
        this.setState({
            movie: movie,
            name: movie.title,
            backdropSrc: () => {
                    if (movie.backdrop_path === null) {
                        return "https://ak9.picdn.net/shutterstock/videos/14759539/thumb/1.jpg";
                    }
                    else {
                        return "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path;
                    }
                },
            posterSrc: () => {
                    if (movie.poster_path === null) {
                        return "https://media.comicbook.com/files/img/default-movie.png";
                    }
                    else {
                        return "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path;
                    }
                },
            year: movie.release_date.substring(0, 4),
            rating: movie.vote_average,
            genres: movie.genres.map(genre => genre.name).join(', '),
            summary: movie.overview
        });
    }
    
    componentDidMount = () => {
        this.handleGetData();
    }
    
    render () {
        return(
            <div>
                <img 
                    className="info-image"
                    src={this.state.backdropSrc()}
                    alt={this.state.name}
                />
                <div className="div-info">
                    <TopCard 
                        posterSrc={this.state.posterSrc()}
                        name={this.state.name}
                        year={this.state.year}
                        rating={this.state.rating}
                        genres={this.state.genres}
                        summary={this.state.summary}
                    />
                    
                    <div className="summary">
                        <h1>Summary</h1>
                        <p>{ this.state.summary }</p>
                    </div>
                    
                    <PersonCarousel
                        people="cast"
                        endpoint={`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=9512b36f031887e7c9ad226e2c26a6b2`}
                    />
                    
                    <TrailerCarousel 
                        id={this.props.match.params.id}
                        endpoint={`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US`}
                    />
                    
                    {/*Suggestions*/}
                    <PosterCarousel 
                        category="Similar Movies"
                        endpoint={`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1`}
                        setMovie={this.handleSetMovie}
                    />
                </div>
            </div>
        );
    }
}

export default MovieInfo;