import './Navbar.css';
import Logo from './Logo.png';
import { GoThreeBars } from 'react-icons/go';
import { useState } from 'react';

function Navbar() {

  const[player, setPlayer] = useState(false);

  const show = () =>{
    if(player == false){
      setPlayer(true);
      console.log(player);
    }
    else{
      setPlayer(false)
      console.log(player);
    }
  }
  
  return (
    <div className="Container">
      <img src={Logo} className='Logo'/>
      <div className='right'>
        <GoThreeBars className='hamburgericon' /> 
          {/* <div className='menu'/> */}
      </div>
    </div>
  );
}

export default Navbar;
