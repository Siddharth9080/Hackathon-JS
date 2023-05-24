import {AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai';
import './Player.css';  
import HighOnLifee from '../Components/Audio/HighOnLife.mp3';
import useSound from "use-sound";
import { useState } from 'react';


const Player = (props) => {

    const [player, setPLayer] = useState(false);
    const [play, {pause}] = useSound(props.music);
    function start(){
        play(); 
        setPLayer(true)
    }
    function stop(){
        pause();
        setPLayer(false)
    }

    return(
        <div className="PlayerDiv">
            <div className='mainContainer'>
                <h1>Now Playing:</h1>
                <img src={props.image} height={420}/>
                <h1 className='title'>{props.Name}</h1>
                <p className='P'>{props.Artist}</p>
                <br/>
                <div>
                    <button onClick={start}><AiFillPlayCircle className='Icon'/></button>
                    <button onClick={stop}><AiFillPauseCircle className='Icon'/></button>
                </div>
            </div>
            
        </div>
    )
}
export default Player;