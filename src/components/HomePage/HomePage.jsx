import './HomePage.css'

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';

function HomePage() {
    return (
        <div className="home-page">
            <NavigationBar />
            <div className="position-welcome-card">
                <WelcomeCard />
            </div>

        </div>
    );
}

export { HomePage };