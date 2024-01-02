import './Hero.css';
import { Booking, HeroSlider, SliderButton } from '../components';
import { ionIcons } from '@/constants/constants';

const Hero = () => {
  return (
    <section className="hero text-center">
      <HeroSlider/>
      <SliderButton direction='prev' icon={ionIcons.chevronBack}/>
      <SliderButton direction='next' icon={ionIcons.chevronForward}/>
      <Booking/>
    </section>
  )
}

export default Hero;

