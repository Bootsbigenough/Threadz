import React from "react";

// This whole thing is 1 card
const PantsItem = (props) => {
  const { image, price, title, description } = props.pants;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-72 bg-blue-200 rounded-md overflow-hidden">
          <img
            src={image}
            alt="coverImage"
            className="w-full h-full object-cover object-center" />
          <div className="absolute opacity-0 bg-blue-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0">
            <ul className="flex flex-wrap">
              <li className="m-2">
              </li>
            </ul>
          </div>
        </div>
        {/* Price */}
        <h3 className="text-md font-medium text-gray-800 mb-2">
          {price}
        </h3>
        {/* Title */}
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          {title}
        </h3>
        {/* Description if there's any */}
        <p className="text-gray-400">
          {description}
        </p>
        {/* Button section */}
        <ul className="flex justify-center py-2">
          {/* Buy button*/}
          <a href="#0"
            className="inline-block my-3 rounded bg-blue-500 text-center border-0 py-2 px-24 text-white leading-7 tracking-wide hover:bg-blue-300 transition ease-out duration-200">
            Buy Now!
          </a>
          {/* Add to cart button*/}
          <a href="#0"
            className="inline-block my-3 rounded bg-blue-600 text-center border-0 py-2 px-4 text-white leading-7 tracking-wide hover:bg-blue-400 transition ease-out duration-200">
            +
          </a>
        </ul>

      </div>

    </div>
  );
};

export default PantsItem;