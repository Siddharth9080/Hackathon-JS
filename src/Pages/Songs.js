import './SongsList.css'
import HigherGround from '../Components/CoverImages/HigherGround.jpg';
import HighOnLife from '../Components/CoverImages/HighOnLife.jpg';
import TenFeetTall from '../Components/CoverImages/TenFeetTall.jpeg'
import WithoutYou from '../Components/CoverImages/WithoutYou.png'
import NoSleep from '../Components/CoverImages/NoSleep.jpeg'
import BlindingLights from '../Components/CoverImages/BlindingLights.jpeg'
import OnAndOn from '../Components/CoverImages/OnAndOn.jpeg'
import { Link } from 'react-router-dom';

function Songs () {
    return(
        <div className="SongsContainer">
            <h1>Songs</h1>
            <ul>
                <Link to='/highonlife'>
                <li className='Songs'>
                    <img src={HighOnLife} height={200}/>
                    <div className='Text'>
                        <h2>High On Life</h2>
                        <p>Martin Garrix, Bonn</p>
                    </div>
                </li>
                </Link>
                <br/>
                <Link to='/higherground'>
                <li className='Songs'>
                    <img src={HigherGround} height={200}/>
                    <div className='Text'>
                        <h2>Higher Ground</h2>
                        <p>Martin Garrix, John Martin</p>
                    </div>
                </li>
                </Link>
                <br/>
                <li className='Songs'>
                    <img src={TenFeetTall} height={200}/>
                    <div className='Text'>
                        <h2>Ten Feet Tall</h2>
                        <p>AFROJACK</p>
                    </div>
                </li>
                <br/>
                <li className='Songs'>
                    <img src={WithoutYou} height={200}/>
                    <div className='Text'>
                        <h2>Without You</h2>
                        <p>Avicii, Sandro Cavazza</p>
                    </div>
                </li>
                <br/>
                <li className='Songs'>
                    <img src={NoSleep} height={200}/>
                    <div className='Text'>
                        <h2>No Sleep</h2>
                        <p>Martin Garrix, John Martin</p>
                    </div>
                </li>
                <br/>
                <li className='Songs'>
                    <img src={BlindingLights} height={200}/>
                    <div className='Text'>
                        <h2>Blinding Lights</h2>
                        <p>The Weeknd</p>
                    </div>
                </li>
                <br/>
                <li className='Songs'>
                    <img src={OnAndOn} height={200}/>
                    <div className='Text'>
                        <h2>On & On</h2>
                        <p>Cartoon</p>
                    </div>
                </li>
                <br/>
            </ul>
        </div>
        )
}
export default Songs;
