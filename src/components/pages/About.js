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
                {/* <p className="description">CUSTOM PIECES</p>
                <p className="description">Kokua</p>
                <p className="description">Reef</p>
                <p className="description">Toby</p>
                <p className="description">Scruffy</p>
                <br></br> */}
                {/* <p className="description">ABOUT</p> */}
                <p className="description">
                    Anne is a young, up and coming artist in Tucson, Arizona.
                    She specializes in oil paintings and drawings inspired by photographs, music and her imagination.
                    Her artistic style is impressionistic and expressionistic.
                    She often emphasizes certain parts of the piece to highlight their importance or for aesthetics.
                    Her style is realistic, abstract or bridges the two.
                    When she's not painting or drawing, she may be running or playing the saxophone.</p>
                <br></br>
                <p className="description">< GiBeveledStar /></p>
            </div>
        );
    }
}