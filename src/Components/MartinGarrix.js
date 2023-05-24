import './ArtistPages.css';
import HigherGround from './CoverImages/HigherGround.jpg'

const MartinGarrix = () => {
    return(
        <div className='ArtistMainContainer'>
            <ul>
                <li className='Songs'>
                    <img src={HigherGround} height={200}/>
                    <div className='Text'>
                        <h2>Higher Ground</h2>
                        <p>Martin Garrix, John Martin</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default MartinGarrix()