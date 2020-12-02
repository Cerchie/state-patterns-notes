import React from 'react';

const ColorButton = ({color, addCircle} )=> {
    return (
                 <button onClick={()=> addCircle(color)}
                className="ColorButtonBtn"
                style={{backgroundColor: color}}
                >{color}</button>
            )};


export default ColorButton;