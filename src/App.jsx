import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Challenge from "./Challenge";
import Training from "./Training";
import Whyus from "./Whyus";
import OurTrainers from "./OurTrainers";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <Hero />
      <Challenge />
      <Training />
      <Whyus />
      <OurTrainers />
      <Stats />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
