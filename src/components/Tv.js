import React, {Component} from 'react';

//Components
import PosterCarousel from './PosterCarousel';
import Trending from './Trending';


class Tv extends Component {
  
  render() {
    return (
    <div className="Tv">
      <Trending 
        endpoint="https://api.themoviedb.org/3/tv/popular?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1"  
        match={this.props.match}
      />
      
      {/*TV On The Air*/}
      <PosterCarousel
          category="TV On The Air"
          endpoint='https://api.themoviedb.org/3/tv/on_the_air?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
          match={this.props.match}
      />
      
      {/*Top Rated*/}
      <PosterCarousel
          category="Top Rated"
          endpoint='https://api.themoviedb.org/3/tv/top_rated?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
          match={this.props.match}
      />
      
      {/*Comedies*/}
      <PosterCarousel
          category="Comedies"
          endpoint='https://api.themoviedb.org/3/discover/tv?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&include_null_first_air_dates=false'
          match={this.props.match}
      />
      
      {/*Kid Shows*/}
      <PosterCarousel
          category="Kid Shows"
          endpoint='https://api.themoviedb.org/3/discover/tv?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762&include_null_first_air_dates=false'
          match={this.props.match}
      />
      
      {/*Action & Adventure"*/}
      <PosterCarousel
          category="Action & Adventure"
          endpoint='https://api.themoviedb.org/3/discover/tv?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false'
          match={this.props.match}
      />
      
      {/*Reality TV*/}
      <PosterCarousel
          category="Reality TV"
          endpoint='https://api.themoviedb.org/3/discover/tv?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&include_null_first_air_dates=false'
          match={this.props.match}
      />
      
      {/*Animated TV Shows*/}
      <PosterCarousel
          category="Animated TV Shows"
          endpoint='https://api.themoviedb.org/3/discover/tv?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&include_null_first_air_dates=false'
          match={this.props.match}
      />
      
      {/*Crime*/}
      <PosterCarousel
          category="Crime"
          endpoint='https://api.themoviedb.org/3/discover/tv?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&include_null_first_air_dates=false'
          match={this.props.match}
      />
      
      {/*Family Shows*/}
      <PosterCarousel
          category="Family Shows"
          endpoint='https://api.themoviedb.org/3/discover/tv?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10751&include_null_first_air_dates=false'
          match={this.props.match}
      />
      
    </div>
    );
  }
  
}

export default Tv;