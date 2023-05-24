import './Song.css';

function Song(props) {
  return (
    <div className="Containar">
        <img src={props.img} className='CoverImage' height={256} width={256}/>
        <div>
          <p className='Name'>{props.name}</p>
          <p className='artist'>{props.artist}</p>
        </div>
    </div>
  );
}

export default Song;
