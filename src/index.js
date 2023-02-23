import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Square component- controlled component, controlled via board (parent)
class Square extends React.Component {
    //onclick - button passing in arrow function from parent as prop, to set value 
    render() {
      return (
        <button 
            className="square"
            onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
//Add state for entire board via array
  class Board extends React.Component {
    constructor(props){
        super(props);
        this.state= {squares: Array(9).fill(null),}
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    // now pass in each squares element of the array for the board, where i is the index 
    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}/>
        );
    }
  
    render() {
      const status = 'Next player: X';
  
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
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);