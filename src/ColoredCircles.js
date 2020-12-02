import React, {useState} from 'react';
import Circle from './Circle'
import ColorButtons from './ColorButtons'

function getRandom(min = 0, max = 100){
    return Math.random() * (max- min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState(['cornflowerblue', 'peachpuff', 'lavender'])
    const addCircle = (color) => {
        setCircles(circles => 
            {
        return [...circles, {color, x: getRandom(), y: getRandom()}]
    })
    };
       return (<div>
           <ColorButtons addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']}/>
           <ColorButtons addCircle={addCircle} options={['orange', 'magenta', 'teal']}/>
            {circles.map(({color, x, y}, idx) => (
                <Circle color={color} idx={idx} key={idx} x={x} y={y}/>
            ))}
   
        </div>)
    
}
export default ColoredCircles;