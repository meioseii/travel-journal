import logo from '../public/assets/nav-logo.png'

export default function Navbar() {
    return(
        <nav className='nav-bar'>
            <img src={logo} alt="logo" />
            <p>my travel journal.</p>
        </nav>
    )
}