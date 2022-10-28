import React from "react";
import image1 from "../../../images/Levis501.png";
import image2 from "../../../images/LevisStraight.png";

import PantsItem from "./PantsItem";

const pantsData = [
  {
    id: 1,
    image: image1,
    title: "Levi's 501",
    description: "Classic 501s",
  },
  {
    id: 2,
    image: image2,
    title: "Levi's 505",
    description: "Straight version",
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