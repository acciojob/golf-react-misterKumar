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
        if (event.key === "ArrowRight" && this.state.renderBall) {
            this.setState((prevState) => ({
                ballPosition: {
                    left: `${parseInt(prevState.ballPosition.left, 10) + 5}px`
                }
            }));
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
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
