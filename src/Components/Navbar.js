import './Navbar.css';
import Logo from './Logo.png';

function Navbar() {
  return (
    <div className="Container">
      <img src={Logo} className='Logo'/>
    </div>
  );
}

export default Navbar;
