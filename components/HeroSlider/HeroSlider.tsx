import { SliderItem } from "../components";

const HeroSlider = () => {
    return (
        <ul className="hero-slider">
            <SliderItem
                image='/hero-slider-1.jpg'
                subtitle='Traditional & Hygine'
                title='For the love of delicious food'
                text='Come with family & feel the joy of mouthwatering food'
            />
            <SliderItem
                image='/hero-slider-2.jpg'
                subtitle='delightful experience'
                title='Flavors Inspired by the Seasons'
                text='Come with family & feel the joy of mouthwatering food'
            />
            <SliderItem
                image='/hero-slider-3.jpg'
                subtitle='amazing & delicious'
                title='Where every flavor tells a story'
                text='Come with family & feel the joy of mouthwatering food'
            />
        </ul>
    )
}

export default HeroSlider;