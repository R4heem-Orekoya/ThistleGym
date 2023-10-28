import React from "react";
import HeroImage from "./assets/image11.jpg";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-1 gap-12 py-10">
      <div className="my-auto">
        <h1 className="text-[40px] lg:text-[35px] md:text-3xl font-bold">
          Your limitation is Your Mindset, get Out and max it Out.
        </h1>
        <p className="text-base lg:text-sm lg:leading-7 font-light my-6 leading-8">
          Every work put in day in day out count, trust the process and stay
          consistent in your activities. Regular physical activities is one of
          the thing you can do to keep yourself healthy, physical activities hep
          your brain, help you ,anange your helath and keep, you in shape
        </p>
        <button className="py-2 px-10 text-lg bg-purple-500 hover:bg-purple-600 duration-300 ease">Explore</button>
      </div>

      <div>
        <img src={HeroImage} alt="hero-image" className="w-full mx-auto aspect-square lg:aspect-video object-cover"/>
      </div>
    </section>
  );
};

export default Hero;
