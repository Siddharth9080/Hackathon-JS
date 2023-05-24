import Song from '../Components/Song';
import HigherGround from '../Components/CoverImages/HigherGround.jpg';
import HighOnLife from '../Components/CoverImages/HighOnLife.jpg';
import TenFeetTall from '../Components/CoverImages/TenFeetTall.jpeg'
import WithoutYou from '../Components/CoverImages/WithoutYou.png'
import NoSleep from '../Components/CoverImages/NoSleep.jpeg'
import BlindingLights from '../Components/CoverImages/BlindingLights.jpeg'
import OnAndOn from '../Components/CoverImages/OnAndOn.jpeg'
import HeatWaves from '../Components/CoverImages/HeatWaves.jpeg'

import './Home.css';

const Home = () => {
    return(
      <div className='Right'>
        <table className='tableOfMoojik'>
          <tbody>
          <h1>Favorites</h1>
          <tr className='TR'>
            <td>
              <Song name="Higher Ground" artist="Martin Garrix, John martin" img={HigherGround} className="song" data-tilt/>
            </td>
            <td>
              <Song name="High On Life" artist="Martin Garrix, Bonn" img={HighOnLife} className="song"/>
            </td>
            <td>
              <Song name="Without You" artist="Avicii, Sandro Cavazza" img={WithoutYou} className="song"/>
            </td>
            <td>
              <Song name="Blinding Lights" artist="The Weeknd" img={BlindingLights} className="song"/>
            </td>
          </tr>
          <br/>
          <hr/>
          <h1>Sugested for You</h1>
          <tr className='TR'>
            <td>
                <Song name="No Sleep" artist="Martin Garrix, Bonn" img={NoSleep} className="song"/>
            </td>
            <td>
              <Song name="Ten Feet Tall" artist="AFROJACK" img={TenFeetTall} className="song"/>
            </td>
            <td>
              <Song name="On & On" artist="Cartoon" img={OnAndOn} className="song"/>
            </td>
          </tr>
          <br/>
          <hr/>
          <h1>Charts Topper 2022</h1>
          <tr className='TR'>
            <td>
                <Song name="Heat Waves" artist="Glass Animals" img={HeatWaves} className="song"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
}
export default Home