import { MouseEventHandler } from "react";

export interface SeparatorProps {
    containedStyles?: string
}

export interface TopBarItemProps {
    containedStyles: string,
    link: boolean,
    iconName: string,
    description: string
}

export interface NavbarProps {
    openMenu: boolean, 
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> 
}

export interface NavBarItemProps {
    title: string,
    link: string
}

export interface NavBarInfoProps {
    title: string,
    location: string,
    city: string,
    schedule: string,
    email: string,
    contact: string,
    phone: string
}

export interface NavbarFigureProps {
    containedStyles: string
}

export interface NavBarButtonsProps {
    handleButtonsMenu: MouseEventHandler<HTMLButtonElement>
}

export interface NavbarOpenProps extends NavBarButtonsProps {
    containedStyles: string
}

export interface SliderItemProps {
    image: string, 
    subtitle: string, 
    title: string, 
    text: string,
    active: boolean
}

export interface SliderButtonProps { 
    direction: string,
    icon: string
}








