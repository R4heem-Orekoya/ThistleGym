import React from "react"
import community from './assets/community.jpg'

const Whyus = () => {
  return (
    <section className="py-[80px]">
      <h2 className="text-center text-2xl font-semibold sm:text-lg">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-11 md:grid-cols-1 gap-8 mt-16">
        <div className="col-span-6 md:col-span-1 aspect-square">
          <img src={community} alt="image" className="w-full h-full object-cover"/>
        </div>
        <div className="col-span-5 md:col-span-1 my-auto">
          <h3 className="text-[40px] lg:text-3xl leading-10 font-bold">We don't just train you, we train with you.</h3>
          <p className="text-lg lg:text-base lg:leading-7 leading-8 my-8">
            Our instructors don't just point ways for you to do it, they teach
            you how to do it and train with you as to get better. We are a
            community and in our community everybody is important an dwe help
            each other grow.
          </p>
          <button className="px-7 py-3 bg-purple-500 hover:bg-purple-600 duration-300 ease ">Join Community</button>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
