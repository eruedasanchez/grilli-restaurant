'use client';

import './NavbarClose.css';
import { IonIcon } from '@ionic/react';
import { ionIcons } from '@/constants/constants';

const NavbarClose = () => {
    return (
        <button className="d-block button close-btn">
            <IonIcon 
                icon={ionIcons.closeOutline} 
                aria-hidden="true"
                style={{'--ionicon-stroke-width': '50px'}}
            />
        </button>
    )
}

export default NavbarClose;

