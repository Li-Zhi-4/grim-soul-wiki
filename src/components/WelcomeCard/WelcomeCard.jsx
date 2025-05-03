import './WelcomeCard.css'

import { Link } from 'react-router-dom';

function WelcomeCard({ className='' }) {
    return (
        <div className="welcomeCard">
            <div className="dividerDown"></div>
            <div className="welcomeMessage">
                <h1 className="welcome">Online guides and resources for wanderers of the Plague Lands!</h1>
                <Link to="/items" className='itemsButton'>See items</Link>
            </div>
            <div className="dividerUp"></div>
        </div>
    );
}

export { WelcomeCard };