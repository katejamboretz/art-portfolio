import React, { Component } from "react";
import { GiBeveledStar } from 'react-icons/gi';
import './pagestyle.css';

export default class About extends Component {

    render() {
        return (
            <div className="Body m-5 my-center">

                <img className='profile-pic' src='anne_profilepic.png' alt='profile-pic'></img>

                <p className="description">
                    Anne is a young, up and coming artist currently in Texas.
                    She specializes in oil paintings and drawings inspired by photographs, music and her imagination.
                    Her artistic style is impressionistic and expressionistic.
                    She often emphasizes certain parts of the piece to highlight their importance or for aesthetics.
                    Her style is realistic, abstract or bridges the two.
                    When she's not painting or drawing, she may be running or playing the saxophone.
                </p>
                <br></br>
                <p className="description">< GiBeveledStar /></p>
            </div>
        );
    }
}