import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Square(props) {
      return (
        <button className="square" onClick={() => {props.onClick()}}>
          {props.value}
        </button>
      );
  }


  
  class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            playerOne: true,
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
          squares[i] = this.state.playerOne?'X':'O';
          this.setState({
            squares:squares,
            playerOne: !this.state.playerOne
          });
    }

    renderSquare(i) {
      return <Square
                value = {this.state.squares[i]}
                onClick = {() => {this.handleClick(i)}}
            />;
    }

    reset(){
      const squares = this.state.squares.map(s => null);
      this.setState({
        squares: squares,
        playerOne: true,
      });
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      
      const status = winner?
        "The winner of this game is the '"+winner+"' side":'Next player: '+(this.state.playerOne?'X':'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <button className="reset" onClick={()=>this.reset()}>Reset</button>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
