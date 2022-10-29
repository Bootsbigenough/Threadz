import React from 'react';
import image1 from '../../../images/ButtonupShirt.png';
import image2 from '../../../images/NorthfaceJacket.png';
import image3 from '../../../images/UAHoodie.png';
import image4 from '../../../images/JeanJacket.png';

import ShirtItem from "./ShirtItem";

const shirtdata = [
  {
    id: 1,
    image: image1,
    price: "$14.99",
    title: "Button-Up Shirt",
    description: "You can never go wrong with this.",
  },
  {
    id: 2,
    image: image2,
    price: "$85.99",
    title: "North Face Jacket",
    description: "Stay cool in these jacket.",
  },
  
  {
    id: 3,
    image: image3,
    price: "$49.99",
    title: "Under Armor Hoodie",
  },
  {
    id: 4,
    image: image4,
    price: "$59.99",
    title: "Jean Jacket",
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