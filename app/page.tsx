import { About, Hero, Menu, Service, SpecialDish } from "@/components/components";

export default function Home() {
  return (
    <main>
      <article>
        <Hero/>
        <Service/>
        <About/>
        <SpecialDish/>
        <Menu/>
      </article>
    </main>
  )
}
