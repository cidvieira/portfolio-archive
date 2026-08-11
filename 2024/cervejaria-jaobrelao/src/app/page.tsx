import About from "@/components/About";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Link from "next/link";

export default function Home() {
  return ( 
    <main>
      <Hero />
      <Products />
      <Events />
      <About />
      <Team />
      <Service />
      <Partners />
      <Link
        href="https://cidvieira.com/projects"
        aria-label="Website Cid Vieira"
        className="fixed bottom-4 right-4 z-99999">
        <img src="/icon-cid-vieira.svg" alt="Website Cid Vieira" />
      </Link>
    </main>    
  )
}
