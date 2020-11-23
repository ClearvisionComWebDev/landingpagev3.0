import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import pic1 from '../assets/images/image1.jpg';
import pic2 from '../assets/images/image2.jpg';
import pic3 from '../assets/images/image3.jpg';
import pic4 from '../assets/images/image4.jpg';
import pic5 from '../assets/images/image5.jpg';
import pic6 from '../assets/images/image6.jpg';
import pic7 from '../assets/images/image7.jpg';
import pic8 from '../assets/images/image8.jpg';
import pic9 from '../assets/images/image9.jpg';
import pic10 from '../assets/images/image10.jpg';
import pic11 from '../assets/images/image11.jpg';
import pic12 from '../assets/images/image12.jpg';
import pic13 from '../assets/images/image13.jpg';
import pic14 from '../assets/images/image14.jpg';
import pic15 from '../assets/images/image15.jpg';
import pic16 from '../assets/images/image16.jpg';
import pic17 from '../assets/images/image17.jpg';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
    render() {
      const settings = {
        dots: true,
        arrows:true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        adaptiveHeight: true
      };
      return (
        <div className= "image featured">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
        <div>
        <img src={pic1} style={{width:"90%"}} alt=""/>
        </div>
        <div >
        <img src={pic2} style={{width:"80%"}}alt="" />
        </div>
        <div >
        <img src={pic3} style={{width:"90%"}}alt=""/>
        </div>
        <div>
        <img src={pic4} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic5} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic6} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic7} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic8} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic9} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic10} style={{width:"50%"}}alt=""/>
        </div>
        <div>
        <img src={pic11} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic12} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic13} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic14} style={{width:"40%"}}alt=""/>
        </div>
        <div>
        <img src={pic15} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic16} style={{width:"80%"}}alt=""/>
        </div>
        <div>
        <img src={pic17} style={{width:"80%"}}alt=""/>
        </div>
        </Slider>
        </div>
      );
    }
}