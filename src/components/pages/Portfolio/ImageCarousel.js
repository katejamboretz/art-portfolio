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
                    {/* <Carousel.Caption>
                        <h4>Abstract</h4>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className='number-2 img d-block m-auto'
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
                        className='number-3 img d-block m-auto'
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
                        className='number-4 img d-block m-auto'
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
                        className='number-5 img d-block m-auto'
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
                        className='number-6 img d-block m-auto'
                        src='jamboretz-anne-buffalo.png'
                        alt='Buffalo'
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h4>Abstract</h4>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className='number-7 img d-block m-auto'
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
                        className='number-8 img d-block m-auto'
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
                        className='number-9 img d-block m-auto'
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
                        className='number-10 img d-block m-auto'
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
                        className='number-11 img d-block m-auto'
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
                        className='number-12 img d-block m-auto'
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
                        className='number-13 img d-block m-auto'
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
                        className='number-14 img d-block m-auto'
                        src='jamboretz-anne-guitarist.png'
                        alt='Guitarist'
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Guitarist</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className='number-15 img d-block m-auto'
                        src='jamboretz-anne-city.png'
                        alt='City'
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>City</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className='number-16 img d-block m-auto'
                        src='jamboretz-anne-soundofjazz.png'
                        alt='Sound of Jazz'
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Sound of Jazz</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ImageCarousel;