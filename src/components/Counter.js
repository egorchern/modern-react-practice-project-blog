import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncreaseClick = (ev) => {
        setCount(count + 1);
    }
    const handleDecreaseClick = (ev) => {
        if (count > 0){
            setCount(count - 1);
        }
    }
    return ( 
        <div className="flex-col" style={{margin: "1em"}}>
            <span style= {{
                fontSize: "1.5em",
            }}>Reactive Counter
            </span>
            <div className="flex-row">
                <span className ="material-icons counter-increase" onClick={handleIncreaseClick}>
                    arrow_upward
                </span>
                <span className="counter-count">{count}</span>
                <span className ="material-icons counter-decrease" onClick={handleDecreaseClick}>
                    arrow_downward
                </span>
            </div>
            
        </div>
    );
}
 
export default Counter;