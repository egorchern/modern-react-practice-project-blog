import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
const Timer = () => {
    let updatesPerSecond = 40;
    let intervalMs = Math.floor(1000 / updatesPerSecond);
    
    const [{msElapsed, secondsElapsed, minutesElapsed}, setTimeElapsed] = useState({msElapsed: 0, secondsElapsed: 0, minutesElapsed: 0})
    const [isPaused, setIsPaused] = useState(true);
    
    const handleControlClick = (ev) => {
        setIsPaused(!isPaused);
    }
    useEffect(() => {
        
        let interval = null;
        if (!isPaused){
            interval = setInterval(() => {
                setTimeElapsed(d => ({
                    msElapsed: (d.msElapsed + intervalMs >= 1000) ? (d.msElapsed + intervalMs - 1000) : (d.msElapsed + intervalMs),
                    secondsElapsed: (d.msElapsed + intervalMs >= 1000) ? (d.secondsElapsed === 59 ? 0 : d.secondsElapsed + 1) : (d.secondsElapsed),
                    minutesElapsed: ((d.msElapsed + intervalMs >= 1000) && (d.secondsElapsed === 59)) ? (d.minutesElapsed + 1) : (d.minutesElapsed)
                }))
            }, intervalMs)
        }
        return () => {clearInterval(interval)};
    }, [isPaused, intervalMs])
    

    return ( 
        <div className='flex-col'>
            <div style={{
                fontSize: "2em"
            }}>
                <span>
                    {`${minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed}`}:
                </span>
                <span>
                    {`${secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed}`}:
                </span>
                <span>
                    {`${msElapsed > 9 ? msElapsed : "0" + msElapsed}`}
                </span>
            </div>
            
            <Button variant='contained' onClick={handleControlClick}>{isPaused ? "Resume" : "Pause"}</Button>
        </div>
    );
}
 
export default Timer;