import { 
  About, 
  Hero, 
  Menu, 
  Reservation, 
  Service, 
  SpecialDish, 
  Testimonials 
} from "@/components/components";

export default function Home() {
  return (
    <main>
      <article>
        <Hero/>
        <Service/>
        <About/>
        <SpecialDish/>
        <Menu/>
        <Testimonials/>
        <Reservation/>
      </article>
    </main>
  )
}
