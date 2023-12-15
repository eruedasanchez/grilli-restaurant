import './NavbarList.css';
import { NavbarItem } from '../components';

// ver el tema de active (dejo el ejemplo abajo)
{/* <li className="navbar-item">
                            <a href="#home" className="navbar-link hover-underline active">
                                <Separator/>
                                <span className="span">Home</span>
                            </a>
                        </li> */}

const NavbarList = () => {
    return (
        <ul className="navbar-list">
            <NavbarItem title="Home"  link="/home"/>
            <NavbarItem title="Menus" link="/menu"/>
            <NavbarItem title="About Us" link="/about"/>
            <NavbarItem title="Our Chefs" link="/chef"/>
            <NavbarItem title="Contact" link="/contact"/>
        </ul>
    )
}

export default NavbarList;
