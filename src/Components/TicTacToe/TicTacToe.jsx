import { useState } from "react";
import calculateWinner from "./calculateWinner"
import "./TicTacToe.css"
import Board from "./Board";
import GameInfo from "./GameInfo";

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(index) {
        const newSquares = squares.slice();

        if (calculateWinner(newSquares) || newSquares[index]) {
            return;
        }

        newSquares[index] = xIsNext ? "x" : "o";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (!squares.includes(null) && !winner) {
        status = 'Draw!';
    } else {
        status = 'Next player: ' + (xIsNext ? "x" : "o");
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className="card">
            <h2 className='title'>Tic-Tac-Toe</h2>
            <Board squares={squares} onClick={handleClick} />
            <GameInfo status={status} onReset={resetGame} />
        </div>
    )
}