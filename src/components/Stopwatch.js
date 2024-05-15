import { useEffect, useState } from 'react';
 
const Stopwatch = () =>
{
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() =>
    {  
        let interval;

        if(start)      
        {
            interval = setInterval(()=>
            {
                setTime((prev) => prev + 1);
            },1000)
        }    
        else
        {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    },[start])

    const startWatch = () =>
    {
        setStart(!start);
    }

    const resetWatch = () =>
    {
        setStart(false);
        setTime(0);
    }

    const timeFormat = (time) => 
    {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return(
        <div style={{margin:'20px'}}>
            <h1>Stopwatch</h1>
            <p>Time: {timeFormat(time)}</p>
            <button onClick={()=>startWatch()}>{start ? 'Stop' : 'Start'}</button>
            <button onClick={()=>resetWatch()}>Reset</button>
        </div>
    )
}

export default Stopwatch
