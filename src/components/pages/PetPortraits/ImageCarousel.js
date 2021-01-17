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
                        src='jamboretz-anne-boxer.png'
                        alt='Boxer'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>Kokua</p>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-2.5 img d-block m-auto'
                        src='jamboretz-anne-greeneyecat.png'
                        alt='Green Eye Cat'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-2 img d-block m-auto'
                        src='jamboretz-anne-cat.png'
                        alt='Cat'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-3 img d-block m-auto'
                        src='jamboretz-anne-reef.png'
                        alt='Reef'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>Reef</p>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-4 img d-block m-auto'
                        src='jamboretz-anne-boxerpuppy.png'
                        alt='Boxer Puppy'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-4.5 img d-block m-auto'
                        src='jamboretz-anne-romeophebe.png'
                        alt='Romeo and Phebe'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>Romeo and Phebe</p>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-5 img d-block m-auto'
                        src='jamboretz-anne-hounds.png'
                        alt='Hounds'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-6 img d-block m-auto'
                        src='jamboretz-anne-fatcat.png'
                        alt='Fat Cat'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-7 img d-block m-auto'
                        src='jamboretz-anne-twodogs.png'
                        alt='Two Dogs'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-8 img d-block m-auto'
                        src='jamboretz-anne-basset.png'
                        alt='Basset Hound'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-9 img d-block m-auto'
                        src='jamboretz-anne-dogandgirl.png'
                        alt='girlanddog'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-10 img d-block m-auto'
                        src='jamboretz-anne-coco.png'
                        alt='Coco'
                    />
                    <div className="image-overlay"></div>
                    <Carousel.Caption>
                        <p>Coco</p>
                        <p>8x10", oil paint on stretched canvas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className='number-11 img d-block m-auto'
                        src='jamboretz-anne-buffalo.png'
                        alt='Buffalo'
                    />
                    <div className="image-overlay"></div>

                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ImageCarousel;