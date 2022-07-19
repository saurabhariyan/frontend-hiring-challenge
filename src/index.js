import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import calculateWinner from './calculate-winner'

function getStatus(squares, xIsNext) {
  const winner = calculateWinner(squares)
  if (winner) {
    return `Winner: ${winner}`
  } else if (squares.every(Boolean)) {
    return `Scratch: Cat's game`
  } else {
    return `Next player: ${xIsNext ? 'X' : '0'}`
  }
}



function Board() {
  }

  function selectSquare(square) {
    dispatch({type: 'SELECT_SQUARE', square})
  }

  const status = getStatus(squares, xIsNext)

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <Board />
    </div>
  )
}

ReactDOM.render(<Game />, document.getElementById('root'))
