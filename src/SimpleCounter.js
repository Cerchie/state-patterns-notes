import React, {useState} from 'react';


function SimpleCounter() {
    const [num, setNum] = useState(0);
    console.log("RUNNING AGAIN! NUM IS", num)

    const clickUp = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <h3>Count: {num} </h3>
            <button onClick={clickUp}>Up</button>
        </div>
    )
}

export default SimpleCounter;