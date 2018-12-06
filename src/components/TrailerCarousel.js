import React, { Component } from "react";
import Slider from "react-slick";
import {NextArrow, PrevArrow} from './Arrows.js';
import axios from 'axios';

class TrailerCarousel extends Component {
    state = {
        data: [],
        hover: false
    }
    
    //Method
    handleGetData = (endpoint) => {
        
        axios.get(endpoint)
            .then(response => {
                 this.setState({
                    data: response.data.results
                });
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    handleMouseHover = () => {
      this.setState(prevState => (
          this.state.hover = !prevState.hover
      ));
    }
    
    componentDidMount = () => {
        this.handleGetData(this.props.endpoint);
    }
    
    render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      speed: 2500,
      arrows: true,
      nextArrow: <NextArrow hover={this.state.hover} />,
      prevArrow: <PrevArrow hover={this.state.hover} />
    };
    
    if (this.state.data.length != 0) {
        return (
            <div className="trailer-carousel">
                <h1>Trailers</h1>
                <div 
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    className="trailer-container"
                  >
                    <Slider {...settings}>
                        {
                            this.state.data.map(item => {
                            
                                return(
                                <div class="trailer-container">
                                    <div className="trailer-item">
                                        <iframe src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
    else {
        return <div />
    }
  }
}

export default TrailerCarousel;