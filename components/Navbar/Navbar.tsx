import './Navbar.css';
import { Logo, NavbarClose, NavbarInfo, NavbarList, NavbarOpen, NavbarReserve } from '../components';

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <nav className="navbar">
                    <NavbarClose/>
                    <Logo/>
                    <NavbarList/>
                    <NavbarInfo
                        title="Visit Us"
                        location="Restaurant St, Delicious City,"
                        city="London 9578, UK"
                        schedule="Open: 9.30 am - 2.30pm"
                        email="booking@restaurant.com"
                        contact="Booking Request"
                        phone="+88-123-123456"
                    />
                </nav>

                <NavbarReserve containedStyles="text text-"/>
                <NavbarOpen containedStyles="line line-"/>    
                
                <div className="overlay" data-nav-toggler data-overlay></div>
            </div>
        </header>
    )
}

export default Navbar;