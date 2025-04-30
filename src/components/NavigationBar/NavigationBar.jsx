import './NavigationBar.css'

function NavigationBar() {
    return (
        <nav className="menu">
            <ul>
                <a href="" className="logo">
                    <img className="main-logo" src="src/assets/main-logo.svg" alt="" />
                </a>
                <div className="links">
                    <a href="" className="navLink">Guides</a>
                    <a href="" className="navLink">Items</a>
                    <a href="" className="navLink">Tools</a>
                </div>
            </ul>
        </nav>
    );
}

export { NavigationBar };