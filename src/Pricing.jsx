import React from "react";

const Pricing = () => {
  return (
    <section className="py-[80px]">
      <h2 className="text-center text-2xl font-semibold sm:text-lg">
        Program Pricing
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-16">
        <div className="flex flex-col items-center justify-between ring-1 ring-purple-500/30 px-4 py-8 pb-6">
          <h3 className="text-center text-3xl font-bold">Monthly Plan</h3>
          <h4 className="text-center text-lg my-4 font-semibold">
            $250 <span className="font-extralight">/ Person</span>
          </h4>
          <p className="text-center text-xs font-thin text-white/60 leading-6">
            Getting a required stage in training require you to have an
            instructor that will get you there faster. Our Instructors are here
            to walk the journey with you.
          </p>

          <ul className="marker:text-green-600 list-outside list-disc my-8 ml-4 gap-4 flex flex-col ">
            <li className="text-base font-normal">Unlimited access to gym environment and selected tools.</li>
            <li className="text-base font-normal">Unlimited access to meeting rooms</li>
            <li className="text-base font-normal">Part-Time instructor oversee</li>
            <li className="text-base font-normal">Limited water access for refreshment</li>
            <li className="text-base font-normal">30ml water can</li>
          </ul>

          <button className="px-7 py-3 mt-6 text-lg ring-1 ring-purple-500 hover:bg-purple-500 duration-300 w-[90%]">Subscribe Now</button>
        </div>
        <div className="flex flex-col items-center justify-between ring-1 ring-purple-500/30 px-4 py-8 pb-6">
          <h3 className="text-center text-3xl font-bold">Six Months Plan</h3>
          <h4 className="text-center text-lg my-4 font-semibold">
            $750 <span className="font-extralight">/ Person</span>
          </h4>
          <p className="text-center text-xs font-thin text-white/60 leading-6">
            Getting a required stage in training require you to have an
            instructor that will get you there faster. Our Instructors are here
            to walk the journey with you.
          </p>

          <ul className="marker:text-green-600 list-outside list-disc my-8 ml-4 gap-4 flex flex-col ">
            <li className="text-base font-normal">Unlimited access to gym environment and selected tools.</li>
            <li className="text-base font-normal">Unlimited access to meeting rooms</li>
            <li className="text-base font-normal">Full-Time instructor oversee</li>
            <li className="text-base font-normal">Unlimited water access for refreshment</li>
            <li className="text-base font-normal">50ml water can</li>
          </ul>

          <button className="px-7 py-3 mt-6 text-lg ring-1 ring-purple-500 hover:bg-purple-500 duration-300 w-[90%]">Subscribe Now</button>
        </div>
        <div className="flex flex-col items-center justify-between ring-1 ring-purple-500/30 px-4 py-8 pb-6 min-h-[650px]">
          <h3 className="text-center text-3xl font-bold">Yearly Plan</h3>
          <h4 className="text-center text-lg my-4 font-semibold">
            $1050 <span className="font-extralight">/ Person</span>
          </h4>
          <p className="text-center text-xs font-thin text-white/60 leading-6">
            Getting a required stage in training require you to have an
            instructor that will get you there faster. Our Instructors are here
            to walk the journey with you.
          </p>

          <ul className="marker:text-green-600 list-outside list-disc my-8 ml-4 gap-4 flex flex-col ">
            <li className="text-base font-normal">Unlimited access to gym environment and selected tools.</li>
            <li className="text-base font-normal">Unlimited access to meeting rooms</li>
            <li className="text-base font-normal">Two or more Full-Time instructor oversee</li>
            <li className="text-base font-normal">Unlimited water access for refreshment</li>
            <li className="text-base font-normal">VIP Card to access the gym areas</li>
            <li className="text-base font-normal">100ml water can</li>
          </ul>

          <button className="px-7 py-3 mt-6  text-lg ring-1 ring-purple-500 hover:bg-purple-500 duration-300 w-[90%]">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
