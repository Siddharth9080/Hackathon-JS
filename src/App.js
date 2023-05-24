import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {BiMicrophoneOff, BiMusic} from 'react-icons/bi';
import {MdLibraryMusic} from 'react-icons/md';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Artists from './Pages/Artishts';
import Songs from './Pages/Songs';
import PlayerHighOnLife from './Pages/PlayerHighOnLife';
import HighOnLife from './Components/CoverImages/HighOnLife.jpg';
import higherground from './Components/CoverImages/HigherGround.jpg';
import HighOnLifeAudio from './Components/Audio/HighOnLife.mp3'

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='left'>
          <ul className='Bar'>
            <Link to={'/'}><li className='barItem'><MdLibraryMusic className='icon'/>Library</li></Link>
            <Link to={'/artists'}>  <li className='barItem'><BiMicrophoneOff className='icon'/>Artists</li></Link>
            <Link to={'/songs'}> <li className='barItem'><BiMusic className='icon'/>Songs</li></Link>
          </ul>
        </div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/artists' element={<Artists/>}/>
            <Route path='/songs' element={<Songs/>}/>
            <Route path='/highonlife' element={<PlayerHighOnLife image={HighOnLife} Name="High On Life" Artist="Martin Garrix, Bonn" music={HighOnLifeAudio}/> }/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
