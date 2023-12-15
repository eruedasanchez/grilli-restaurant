import './NavbarOpen.css';
import { NavbarFigureProps } from '@/types/types';

const NavbarOpen = ({containedStyles} : NavbarFigureProps) => {
    return (
        <button className="d-block button nav-open-btn">
            <span className={`${containedStyles}1`}></span>
            <span className={`${containedStyles}2`}></span>
            <span className={`${containedStyles}3`}></span>
        </button>
    )
}

export default NavbarOpen;