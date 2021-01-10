import React, { Component } from "react";
import ImageCarousel from './ImageCarousel';
import './pagestyle.css';


export default class Portfolio extends Component {

    render() {
        return (
            <div className="Body m-5">
                <br></br>
                <ImageCarousel />
                <br></br>
                <br></br>
            </div>
        );
    }
}