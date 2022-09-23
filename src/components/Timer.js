import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
const Timer = () => {
    let updatesPerSecond = 40;
    let intervalMs = Math.floor(1000 / updatesPerSecond);
    
    const [msElapsed, setMsElapsed] = useState(0);
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    const handleControlClick = (ev) => {
        setIsPaused(!isPaused);
    }
    useEffect(() => {
        
        let interval = null;
        if (!isPaused){
            interval = setInterval(() => {
                if (msElapsed + intervalMs >= 1000){
                    setSecondsElapsed(secondsElapsed => secondsElapsed + 1);
                    setMsElapsed(msElapsed => (msElapsed + intervalMs) % 1000);
                }
                else{
                    setMsElapsed(msElapsed => msElapsed + intervalMs);
                }
            }, intervalMs)
        }
        return () => {clearInterval(interval)};
    }, [isPaused, intervalMs])
    

    return ( 
        <div className='flex-col'>
            <div className='flex-row margin-small'>
                <div className='flex-col margin-small'>
                    <span>Seconds</span>
                    <span>{secondsElapsed}</span>
                </div>
                <div className='flex-col margin-small'>
                    <span>Milliseconds</span>
                    <span>{msElapsed}</span>
                </div>
            </div>
            <Button variant='contained' onClick={handleControlClick}>{isPaused ? "Resume" : "Pause"}</Button>
        </div>
    );
}
 
export default Timer;