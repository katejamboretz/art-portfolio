import React, { Component } from "react";
import { GiBeveledStar } from 'react-icons/gi';

export default class About extends Component {

    render() {
        return (
            <div className="App">
                <br></br>
                <br></br>
                <h1>
                    About the Artist
                </h1>
                <br></br>
                <p>< GiBeveledStar /></p>
                <br></br>
                <p>
                    Anne is a young upcoming artist in Boise, Idaho.
                </p>

                <p>She specializes in oil paintings and drawings inspired by photographs, music and her imagination.</p>
                <p>Her awe-provoking style is realistic, abstract or bridges the two.</p>
                <p>When she's not painting or drawing, she may be at work as a line cook or enjoying running in the Boise Foothills or playing the saxaphone.</p>
                <br></br>
                <br></br>
                <p>< GiBeveledStar /></p>
            </div>
        );
    }
}