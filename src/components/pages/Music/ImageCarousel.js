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
                        src='jamboretz-anne-doubleguitar.png'
                        alt='Double Guitar'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>Jimmy Page, 13.5x14", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-2 img d-block m-auto'
                        src='jamboretz-anne-guitarist.png'
                        alt='Guitarist'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>Buddy Guy, 8.29x7", oil paint on canvas</p>
                    </Carousel.Caption>


                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-3 img d-block m-auto'
                        src='jamboretz-anne-soundofjazz.png'
                        alt='Sound of Jazz'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>Four Musicians, 9x9.26", oil paint on canvas</p>
                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ImageCarousel;