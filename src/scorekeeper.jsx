import React, { Component } from "react";

class Scorekeeper extends Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0
        };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
        this.negativeKill = this.negativeKill.bind(this);
    }

    singleKill() {
        this.setState((prevState) => ({
            score: prevState.score + 1
        }));
    }

    tripleKill() {
        this.setState((prevState) => ({
            score: prevState.score + 3
        }));
    }

   negativeKill() {
        this.setState((prevState) => ({
            score: prevState.score -1
        }));
    }
    

    render() {
        return (
            <div>
                <h1>This is my new score: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
                <button onClick={this.negativeKill}>Negative Kill</button>
            </div>
        );
    }
}

export default Scorekeeper;
