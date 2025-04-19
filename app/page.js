//we would use client side rendering
"use client";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />   
      <Work />
      <Contact />
    </>
  );
}
