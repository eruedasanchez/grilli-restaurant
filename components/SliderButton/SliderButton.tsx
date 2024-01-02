'use client';

import './SliderButton.css';
import { SliderButtonProps } from "@/types/types";
import { IonIcon } from "@ionic/react";

const SliderButton = ({direction, icon} : SliderButtonProps) => {
    return (
        <button className={`slider-btn ${direction}`}>
            {/* tomo estos btn pero sabiendo la direccion */}
            <IonIcon 
                icon={icon} 
                aria-hidden="true"
                style={{'--ionicon-stroke-width': '50px'}}
            />
        </button>     
    )
}

export default SliderButton;