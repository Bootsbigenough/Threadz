import React from 'react';
import image1 from '../../../images/ButtonupShirt.png';
import image2 from '../../../images/NorthfaceJacket.png';
import ShirtItem from "./ShirtItem";

const shirtdata = [
  {
    id: 1,
    image: image1,
    title: "Button-Up Shirt",
    description: "You can never go wrong with this.",
  },
  {
    id: 2,
    image: image2,
    title: "North Face Jacket",
    description: "Stay cool in these jacket.",
  },
 
];

const Shirt = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-center flex-wrap md:px-4">
        {shirtdata.map((shirts, id) => (
          <ShirtItem shirt={shirts} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Shirt;