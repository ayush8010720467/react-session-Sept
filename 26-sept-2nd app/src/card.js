import logo from './logo.svg'
import './Card.css'
function Card(props){
    return(
        <>
        <div className='card'>
            <img src={logo}></img>
            <hr></hr>
            <div>Disc</div>
        </div>
        </>
    );
}
export default Card;