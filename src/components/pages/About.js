import React, { Component } from "react";
import { GiBeveledStar } from 'react-icons/gi';
import './pagestyle.css';

export default class About extends Component {

    render() {
        return (
            <div className="Body m-5 my-center">
                {/* <h1>
                    Background
                </h1> */}
                {/* <br></br>
                <p>< GiBeveledStar /></p>
                <br></br> */}
                <img className='profile-pic' src='anne_profilepic.png' alt='profile-pic'></img>
                {/* <br></br>
                <br></br>
                <br></br>
                <p>< GiBeveledStar /></p>
                <br></br> */}
                <p className="description">ART SHOWINGS</p>
                <p className="description"><a href="http://www.boiseartmuseum.org/exhibition/higher-ground-2019/">Boise Art Museum, Higher Ground, 2019</a></p>
                <br></br>
                <p className="description">CUSTOM PIECES</p>
                <p className="description">Toby, pet dog</p>
                <p className="description">Scruffy, pet dog</p>
                <p className="description">Kid Cudi</p>
                <br></br>
                <p className="description">ABOUT</p>
                <p className="description">
                    Anne is a young, up and coming artist in Boise, Idaho. She specializes in oil paintings and drawings inspired by photographs, music and her imagination.
                    She depicts images in an impressionistic and expressionistic manner, and emphasizing certain parts of the image she finds important or for aesthetic purposes.
                    Her awe-provoking style is realistic, abstract or bridges the two.
                    When she's not painting or drawing, she may be at work as a line cook, running in the Boise Foothills or playing the saxaphone.</p>
                <br></br>
                <p className="description">< GiBeveledStar /></p>
            </div>
        );
    }
}