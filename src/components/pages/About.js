import React, { Component } from "react";
import { GiBeveledStar } from 'react-icons/gi';
import './pagestyle.css';

export default class About extends Component {

    render() {
        return (
            <div className="Body m-5 my-center">
                <h1>
                    Background
                </h1>
                <br></br>
                <p>< GiBeveledStar /></p>
                <br></br>
                <img className='profile-pic' src='anne_profilepic.png' alt='profile-pic'></img>
                <br></br>
                <br></br>
                <br></br>
                <p>< GiBeveledStar /></p>
                <br></br>
                <p>
                    Anne is a young, up and coming artist in Boise, Idaho.
                </p>

                <p>She specializes in oil paintings and drawings inspired by photographs, music and her imagination.</p>
                <p>She enjoys depicting images in an impressionistic and expressionistic manner, and emphasizing certain parts of the image she finds important or for aesthetic purposes.</p>
                <p>Her awe-provoking style is realistic, abstract or bridges the two.</p>
                <p>When she's not painting or drawing, she may be at work as a line cook or enjoying running in the Boise Foothills or playing the saxaphone.</p>
                <br></br>
                <br></br>
                <p>< GiBeveledStar /></p>
            </div>
        );
    }
}