import React, { Component } from "react";
import Lottery from "./lottery";
import "./allballs.css"; // Import the CSS file

class Allballs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.maxBalls }, () => '')
        };
        this.isClicked = this.isClicked.bind(this);
    }

    generate() {
        const newNums = this.state.nums.map(() => Math.floor(Math.random() * this.props.maxNum) + 1);
        this.setState({ nums: newNums });
    }

    isClicked() {
        this.generate();
    }

    render() {
        return (
            <section className="xyz">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map((num, index) => <Lottery key={index} nums={num} />)}
                </div>
                <button onClick={this.isClicked}>Generate Balls</button>
            </section>
        );
    }
}

Allballs.defaultProps = {
    title: "Lotto",
    maxBalls: 7,
    maxNum: 40
};

export default Allballs;
