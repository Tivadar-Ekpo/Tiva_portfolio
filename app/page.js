//we would use client side rendering
"use client";
import { FormspreeProvider } from '@formspree/react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <FormspreeProvider> {/* Optional, but good for future */}
    <>
      <NavBar />
      <Header />
      <About />
      <Services />   
      <Work />
      <Contact />
    </>
    </FormspreeProvider>
  );
}
