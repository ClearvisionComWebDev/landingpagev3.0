import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import pic1 from '../assets/images/image1.jpg';
import pic2 from '../assets/images/image2.jpg';
import pic3 from '../assets/images/image3.jpg';
import pic4 from '../assets/images/image4.jpg';

export default class Carousel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth:true
      };
      return (
        <div >
          <Slider {...settings}>
        <div>
        <img src={pic1} alt=""/>
        </div>
        <div >
        <img src={pic2} style={{width:"80%"}}alt="" />
        </div>
        <div >
        <img src={pic3} style={{width:"60%"}}alt=""/>
        </div>
        <div>
        <img src={pic4} style={{width:"80%"}}alt=""/>
        </div>
        </Slider>
        </div>
      );
    }
}