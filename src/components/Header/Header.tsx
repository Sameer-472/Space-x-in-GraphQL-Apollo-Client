import { Link } from 'react-router-dom';
import './Header.css';


export const Header = () => {
    return (
        <div>
            <ul>
                <img src="Assets/spacex.png" className='logo' alt="" width={150} height={80}/>
                <Link to="/">Home</Link>
                <Link to="/launches">Launches</Link>
                <Link to="/missions">Missions</Link>
                <Link to="/dragons">Dragons</Link>
            </ul>
        </div>
    )
}
