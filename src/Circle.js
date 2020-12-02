import React from 'react';
import 'Circle.css'

const Circle = (props) => {
    return (
        <div
        className="circle"
        style={{
            backgroundColor: props.color
        }}>
            {props.idx +1}
        </div>
    )
}

export default Circle;