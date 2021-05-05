import React from 'react';
import Square from './Square';
import './board.css'

const Board = ({ tiles, handleClick, squares }) => {
    return (
        <div className="Board">
            <div className="Row">
                <Square pos={0} value={tiles[0]} squares={history}  handleOnClick={handleClick} />
                <Square pos={1} value={tiles[1]} handleOnClick={handleClick} />
                <Square pos={2} value={tiles[2]} handleOnClick={handleClick} />
            </div>
            <div className="Row">
                <Square pos={3} value={tiles[3]} handleOnClick={handleClick} />
                <Square pos={4} value={tiles[4]} handleOnClick={handleClick} />
                <Square pos={5} value={tiles[5]} handleOnClick={handleClick} />
            </div>
            <div className="Row">
                <Square pos={6} value={tiles[6]} handleOnClick={handleClick} />
                <Square pos={7} value={tiles[7]} handleOnClick={handleClick} />
                <Square pos={8} value={tiles[8]} handleOnClick={handleClick} />
            </div>
        </div>)
}

export default Board;