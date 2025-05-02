import './NavigationBar.css'
import { Link } from 'react-router-dom';

function NavigationBar() {

    return (
        <nav className="menu">
            <ul>
                <a href="" className="logo">
                    <img className="main-logo" src='/src/assets/main-logo.svg' alt="" />
                </a>
                <div className="links">
                    <Link to="/" className='navLink'>Guides</Link>
                    <Link to="/items" className='navLink'>Items</Link>
                    <Link to="/" className='navLink'>Tools</Link>
                </div>
            </ul>
        </nav>
    );
}

export { NavigationBar };