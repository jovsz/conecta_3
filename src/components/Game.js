import React, { useState } from 'react';
import Board from './Board';

const calculateWinner = (board) => {
    
    const winningPositions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < winningPositions.length; i++) {
        const [a,b,c] = winningPositions[i];
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];
        }
    }
    
    return null;
};

const Game = () => {
    const [board,setBoard] = useState(new Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
     

    const handleClickBoard = pos => {
        const copy = board.slice();
        const moves = history.slice(0, stepNumber + 1);
        const current = moves[stepNumber];
        const squares = [...current]
        const winner = calculateWinner(copy);
        if(winner || squares[pos]){
            return;
        }
        copy[pos] = isXNext ? 'X' : 'O'
        setBoard(copy)
        setIsXNext(!isXNext)
        squares[pos] = copy[pos];
        setHistory([...moves, squares])
        setStepNumber(moves.length);
    }

    return <Board tiles={board} handleClick ={handleClickBoard} />;
}

export default Game;


