import React, { useState } from 'react';
import Board from './Board';

let champion = '';
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
            champion = board[a];
            return true;

        }

    }
    console.log(champion);
    return null;
};

const Game = () => {
    const [board,setBoard] = useState(new Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClickBoard = pos => {
        const copy = board.slice();
        const winner = calculateWinner(copy);
        if(winner){
            console.log('ganador: ' + champion);
            return;
        }
        copy[pos] = isXNext ? 'X' : 'O'
        setBoard(copy)
        setIsXNext(!isXNext)
    }

    return <Board tiles={board} handleClick ={handleClickBoard} />;
}

export default Game;


