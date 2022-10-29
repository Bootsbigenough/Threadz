import React from "react";
import image1 from "../../../images/Levis501.png";
import image2 from "../../../images/LevisStraight.png";
import image3 from "../../../images/UnderArmorShorts.png";
import image4 from "../../../images/NikeSweats.png";

import PantsItem from "./PantsItem";

const pantsData = [
  {
    id: 1,
    image: image1,
    price: "$42.99",
    title: "Levi's 501",
    description: "Classic 501s",
  },
  {
    id: 2,
    price: "$39.99",
    image: image2,
    title: "Levi's 505",
    description: "Straight version",
  },
  {
    id: 3,
    price: "$29.99",
    image: image3,
    title: "Under Armor Shorts",
  },
  {
    id: 4,
    price: "$32.99",
    image: image4,
    title: "Nike Sweatpants",
  },
];

const Pants = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-center flex-wrap md:px-4">
        {pantsData.map((pants, id) => (
          <PantsItem pants={pants} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Pants;