import React, {useState} from 'react';

const NumbersList = () => {
    const [numbers, setNumbers] = useState([2,5,7,11,19]);
    const remove = (num) => {
        setNumbers(numbers.filter(n => n !== num))
        console.log('REMOVING', num)
    }
    return (
        <ul>
            {numbers.map(n => (
            <li>
                <button onClick={() => remove(n)}>{n}</button>
            </li>
            ))}
        </ul>
    )
}

export default NumbersList;