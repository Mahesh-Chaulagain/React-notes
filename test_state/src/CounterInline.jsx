// Do this instead;

import { useState } from "react";

// standalone function for incrementing
function incrementCount(currentCount,setCount){
    setCount(currentCount + 1);
}

const CounterInline = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={() => incrementCount(count, setCount)}>Increase</button>
        </div>
    )
} 

export default CounterInline;