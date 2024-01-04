import { 
  About, 
  Hero, 
  Menu, 
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
      </article>
    </main>
  )
}
