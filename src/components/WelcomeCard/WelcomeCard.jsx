import './WelcomeCard.css'

function WelcomeCard({ className='' }) {
    return (
        <div className="welcomeCard">
            <div className="dividerDown"></div>
            <div className="welcomeMessage">
                <h1 className="welcome">Online guides and resources for wanderers of the Plague Lands!</h1>
                <a href="/items" className="itemsButton">See items</a>
            </div>
            <div className="dividerUp"></div>
        </div>
    );
}

export { WelcomeCard };