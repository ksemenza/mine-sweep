import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

class Game extends React.Component {

    /*
    Beginner: 10 mines, 8x8 board
    Intermediate: 20 mines, 12x12 board
    Expert: 40 mines, 16x16 board
    */
    state = {
        height: 8,
        width: 8,
        mines: 10,
    };

    handleGameStart = () => {
        let difficulty = document.querySelector("#level_select");
        if (difficulty.value === "beginner") {
            this.setState({
                height: 8,
                width: 8,
                mines: 10,
            });
        }
        if (difficulty.value === "intermediate") {
            this.setState({
                height: 12,
                width: 12,
                mines: 20,
            });
        }
        if (difficulty.value === "expert") {
            this.setState({
                height: 16,
                width: 16,
                mines: 40,
            });
        }
    }

    render() {
        const { height, width, mines } = this.state;
        return (
            <div className="game">
                <div className="game-info">
                    <h2>Mine Sweep</h2>
                    <h4>Objective</h4>
                    <p>Reveal all the squares without clicking on a bomb</p>
                    <div className="instructions">
                        <h4>Rules</h4>
                        <p>Each square you click will reveal a number or a bomb</p>
                        <p>If it reveals a number that indicates the amount of bombs adjacent to that square</p>
                        <p>Reveal all the squares without clicking on a bomb</p>
                        <p>The harder the level the larger the grid</p>
                        <p>Good Luck!</p>

                    </div>
                    <h4>Select a level a click "start"</h4>
                    <span className="info">Level:
                        <select id="level_select">
                            <option value="beginner"> Beginner </option>
                            <option value="intermediate"> Intermediate </option>
                            <option value="expert"> Expert </option>
                        </select>
                    </span>
                    <button onClick={this.handleGameStart}>Start</button>
                </div>
                <div className='board-wrap'>

                <Board height={height} width={width} mines={mines} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));