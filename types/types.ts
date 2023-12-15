export interface SeparatorProps {
    containedStyles?: string
}

export interface TopBarItemProps {
    containedStyles: string,
    link: boolean,
    iconName: string,
    description: string
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

