import { SliderItem } from "../components";

const HeroSlider = () => {
    return (
        <ul className="hero-slider">
            <SliderItem
                imageUrl='https://i.postimg.cc/Y9JcLJBb/hero-slider-1.jpg'
                subtitle='Traditional & Hygine'
                title='For the love of delicious food'
                text='Come with family & feel the joy of mouthwatering food'
            />
            <SliderItem
                imageUrl='https://i.postimg.cc/TwyMwTFK/hero-slider-2.jpg'
                subtitle='delightful experience'
                title='Flavors Inspired by <br> the Seasons'
                text='Come with family & feel the joy of mouthwatering food'
            />
            <SliderItem
                imageUrl='https://i.postimg.cc/FHhMSyw5/hero-slider-3.jpg'
                subtitle='amazing & delicious'
                title='Where every flavor <br> tells a story'
                text='Come with family & feel the joy of mouthwatering food'
            />
        </ul>
    )
}

export default HeroSlider;