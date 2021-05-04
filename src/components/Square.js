import React from 'react';
import './square.css';

const Square = ({value, handleOnClick, pos}) => {
    return (
        <button className= 'square' onClick = {() => handleOnClick(pos)}>
            {value}
        </button>
    )
}

export default Square;