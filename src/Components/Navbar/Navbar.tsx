import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/vite.svg" alt="Logo" className="logo-img" />
            </div>
            <ul className="navbar-tabs">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#builds">Builds</a></li>
                <li><a href="#support">Support</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

