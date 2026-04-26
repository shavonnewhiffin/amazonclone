import React from "react";

const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="bg-white z-30 w-full mt-2">
      <div className="p-4">
        <div className="text-lg xl:text-xl font-semibold ml-4 mt-5 ">
          {title}
        </div>

        <div className="m-4 aspect-square">
          <img src={img} className="w-full h-full object-cover" alt={title} />
        </div>

        <div className="text-xs xl:text-sm text-blue-400 ml-4 mb-2 cursor-pointer">
          {link}
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
