import React from "react";

const PantsItem = (props) => {
  const { image, title, description } = props.pants;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-72 bg-blue-200 rounded-md overflow-hidden">
          <img 
          src={image}
            alt="coverImage" 
            className="w-full h-full object-cover object-center"/>
          <div className="absolute opacity-0 transition duration-200 bg-blue-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
            <ul className="flex flex-wrap">
              <li className="m-2">
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-400">
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default PantsItem;