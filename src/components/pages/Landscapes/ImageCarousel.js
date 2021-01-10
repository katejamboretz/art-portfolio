import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./pagestyle.css";

function ImageCarousel() {
    return (
        <div className="Center h-100">
            <Carousel>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-1 img d-block m-auto'
                        src='jamboretz-anne-forestfire.png'
                        alt='Forest Fire'
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Forest Fire</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-2 img d-block m-auto'
                        src='jamboretz-anne-city.png'
                        alt='City'
                    />
                    <div className="image-overlay"></div>

                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ImageCarousel;