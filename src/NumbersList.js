import React, {useState} from 'react';
import NumberItem from './NumberItem'
const NumbersList = () => {
    const [numbers, setNumbers] = useState([2,5,7,11,19,2,11]);
    const remove = (num) => {
        setNumbers(numbers.filter(n => n !== num))
        console.log('REMOVING', num)
    }
    return (
        <ul>
            {numbers.map(n => (
                <NumberItem number={n} key={n} remove={()=> remove(n)}/>
            ))}
        </ul>
    )
}

export default NumbersList;