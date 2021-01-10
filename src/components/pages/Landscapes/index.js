import React, { Component } from "react";
import ImageCarousel from './ImageCarousel';
import './pagestyle.css';


export default class Landscapes extends Component {

    render() {
        return (
            <div className="Body m-5">
                {/* <h1>
                    Portfolio
                </h1> */}
                <br></br>
                <ImageCarousel />
                <br></br>
                <br></br>
            </div>
        );
    }
}