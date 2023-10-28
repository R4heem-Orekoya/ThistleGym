import React from "react";
import image from './assets/form.jpg'

const Contact = () => {
  return (
    <section className="py-[80px]">
      <h2 className="text-center text-2xl font-semibold sm:text-lg mb-6">
        Contact Us
      </h2>
      <p className="text-base font-light text-center max-w-[700px] mx-auto">
        We will be available to answer all your complaints and requests. Send us
        a message today. Our team are ready to give you the best.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-1 md:gap-12 gap-12 mt-16">
        <div className="aspect-[9/11] md:aspect-video sm:aspect-[16/12]">
          <img src={image} alt="image" className="w-full h-full object-cover"/>
        </div>
        <div className="my-auto">
          <form>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                className="h-[60px] bg-transparent ring-1 ring-purple-500 outline-none px-4 placeholder:text-lg text-lg"
              />
            </div>
            <div className="flex flex-col gap-2 my-8">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="h-[60px] bg-transparent ring-1 ring-purple-500 outline-none px-4 placeholder:text-lg text-lg"
              />
            </div>
            <div className="flex flex-col gap-2 my-8">
              <label htmlFor="message" className="text-xl">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                id="message"
                className="min-h-[100px] max-h-[200px] bg-transparent ring-1 ring-purple-500 outline-none p-4 placeholder:text-lg text-lg"
              ></textarea>
            </div>

            <button type="submit" className="w-[150px] py-3 bg-purple-500 hover:bg-purple-600 duration-300 ease">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
