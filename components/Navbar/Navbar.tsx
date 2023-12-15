'use client';

import './Navbar.css';
import { useState } from 'react';
import { Logo, NavbarClose, NavbarInfo, NavbarList, NavbarOpen, NavbarReserve } from '../components';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <nav className={`navbar ${openMenu && 'active'}`}>
                    <NavbarClose
                        handleButtonsMenu={() => setOpenMenu(false)}
                    />
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
                <NavbarOpen 
                    handleButtonsMenu={() => setOpenMenu(!openMenu)}
                    containedStyles="line line-"
                />    
                
                <div className={`overlay ${openMenu && 'active'}`}></div>
            </div>
        </header>
    )
}

export default Navbar;