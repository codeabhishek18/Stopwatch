import { useEffect, useState } from 'react';
 
const Stopwatch = () =>
{
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() =>
    {  
        let interval;

        if(start)      
        {
            interval = setInterval(()=>
            {
                setSeconds((prev) => prev + 1);
            },1000)
        }    
        else
        {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    },[start])

    if(seconds>59)
    {
        setSeconds(0);
        setMinutes((prev)=>prev+1);
    }

    const startWatch = () =>
    {
        setStart(!start);
    }

    const resetWatch = () =>
    {
        setStart(false);
        setSeconds(0);
        setMinutes(0);
    }

    return(
        <div style={{margin:'20px'}}>
            <h1>Stopwatch</h1>
            <p>Time: {minutes}:{String(seconds).padStart(2,'0')}</p>
            <button onClick={()=>startWatch()}>{start ? 'Stop' : 'Start'}</button>
            <button onClick={()=>resetWatch()}>Reset</button>
        </div>
    )
}

export default Stopwatch
