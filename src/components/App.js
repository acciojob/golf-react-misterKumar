import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
        document.addEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(event) {
        if (this.state.renderBall) {
            if (event.key === "ArrowRight") {
                this.moveBall(5);
            } else if (event.key === "ArrowLeft") {
                this.moveBall(-5);
            }
        }
    }

    moveBall(distance) {
        this.setState((prevState) => ({
            ballPosition: {
                left: `${parseInt(prevState.ballPosition.left, 10) + distance}px`
            }
        }));
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
