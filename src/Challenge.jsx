import React from "react";
import Image1 from './assets/image1.jpg'
import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'
import Image4 from './assets/image4.jpg'
import Image5 from './assets/image5.jpg'
import Image6 from './assets/image6.jpg'

const images = [Image1, Image2, Image3, Image4, Image5, Image6]

const Challenge = () => {
  return (
    <section className="py-[80px]">
      <h2 className="text-center text-2xl font-semibold sm:text-lg">
        Are You Ready To{" "}
        <span className="font-bold text-purple-500">Challenge</span> Yourself?
      </h2>

      <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 mt-16">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`image${index}`} className="w-full aspect-square object-cover"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenge;
