import React, { Component } from "react";
import ImageCarousel from '../ImageCarousel';
import './pagestyle.css';


export default class Home extends Component {

    render() {
        return (
            <div className="Body">
                <br></br>
                <br></br>
                <ImageCarousel />
                <br></br>
                <br></br>
            </div>
        );
    }
}