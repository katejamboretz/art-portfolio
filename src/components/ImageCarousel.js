import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./pages/pagestyle.css";

function ImageCarousel() {
    return (
        <div className="Center h-100">
            <Carousel>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-abstract.jpg'
                        alt="Abstract"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h4>Abstract</h4>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-abstract2.jpg'
                        alt="Abstract 2"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Abstract 2</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-brass.jpg'
                        alt="Brass"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Brass</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-city.jpg'
                        alt="City"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>City</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-colors.jpg'
                        alt="Colors"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Colors</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-curious.jpg'
                        alt="Curious"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Curious</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-forestfire.jpg'
                        alt="Forest Fire"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Forest Fire</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-guitarist.jpg'
                        alt="Guitarist"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Guitarist</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-jazzconcert.jpg'
                        alt="Jazz Concert"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Jazz Concert</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-lake.jpg'
                        alt="Lake"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Lake</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-marchingband.jpg'
                        alt="Marching Band"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Marching Band</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-railroadhouse.jpg'
                        alt="Rail Road House"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Rail Road House</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-soundofjazz.jpg'
                        alt="Sound of Jazz"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Sound of Jazz</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-streetlights.jpg'
                        alt="Street Lights"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Street Lights</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-trane.jpg'
                        alt="Coltrane"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Coltrane</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='images/jamboretz-anne-womenportrait.jpg'
                        alt="Women Portrait"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Women Portrait</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageCarousel;