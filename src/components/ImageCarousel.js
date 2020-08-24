import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./pages/pagestyle.css";
import abstract from "./pages/images/jamboretz-anne-abstract.jpg";
import abstract2 from "./pages/images/jamboretz-anne-abstract2.jpg";
import brass from "./pages/images/jamboretz-anne-brass.jpg";
import city from "./pages/images/jamboretz-anne-city.jpg";
import colors from "./pages/images/jamboretz-anne-colors.jpg";
import curious from "./pages/images/jamboretz-anne-curious.jpg";
import forestfire from "./pages/images/jamboretz-anne-forestfire.jpg";
import guitarist from "./pages/images/jamboretz-anne-guitarist.jpg";
import jazzconcert from "./pages/images/jamboretz-anne-jazzconcert.jpg";
import lake from "./pages/images/jamboretz-anne-lake.jpg";
import marchingband from "./pages/images/jamboretz-anne-marchingband.jpg";
import railroadhouse from "./pages/images/jamboretz-anne-railroadhouse.jpg";
import soundofjazz from "./pages/images/jamboretz-anne-soundofjazz.jpg";
import streetlights from "./pages/images/jamboretz-anne-streetlights.jpg";
import trane from "./pages/images/jamboretz-anne-trane.jpg";
import womenportrait from "./pages/images/jamboretz-anne-womenportrait.jpg";

function ImageCarousel() {
    return (
        <div className="Center h-100">
            <Carousel>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-1 img d-block m-auto"
                        src={abstract}
                        alt="Abstract"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h4>Abstract</h4>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-2 img d-block m-auto"
                        src={abstract2}
                        alt="Abstract 2"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Abstract 2</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-3 img d-block m-auto"
                        src={brass}
                        alt="Brass"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Brass</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-4 img d-block m-auto"
                        src={city}
                        alt="City"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>City</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-5 img d-block m-auto"
                        src={colors}
                        alt="Colors"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Colors</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-6 img d-block m-auto"
                        src={curious}
                        alt="Curious"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Curious</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-7 img d-block m-auto"
                        src={forestfire}
                        alt="Forest Fire"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Forest Fire</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-8 img d-block m-auto"
                        src={guitarist}
                        alt="Guitarist"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Guitarist</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-9 img d-block m-auto"
                        src={jazzconcert}
                        alt="Jazz Concert"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Jazz Concert</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-10 img d-block m-auto"
                        src={lake}
                        alt="Lake"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Lake</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-11 img d-block m-auto"
                        src={marchingband}
                        alt="Marching Band"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Marching Band</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-12 img d-block m-auto"
                        src={railroadhouse}
                        alt="Rail Road House"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Rail Road House</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-13 img d-block m-auto"
                        src={soundofjazz}
                        alt="Sound of Jazz"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Sound of Jazz</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-14 img d-block m-auto"
                        src={streetlights}
                        alt="Street Lights"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Street Lights</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-15 img d-block m-auto"
                        src={trane}
                        alt="Coltrane"
                    />
                    <div className="image-overlay"></div>
                    {/* <Carousel.Caption>
                        <h3>Coltrane</h3>
                        <p>Anne Jamboretz Copyright 2020 &copy;</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="number-16 img d-block m-auto"
                        src={womenportrait}
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