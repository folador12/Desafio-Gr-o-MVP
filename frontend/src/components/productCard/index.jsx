import React from "react";
import Image from "next/image";

export const ProductCard = ({ avatar, name, description, price }) => {
  return (
    <div className="w-64 h-96 rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col">
      <div className="relative w-full flex-grow">
        <Image className="object-cover" src={avatar} alt={name} fill priority />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <span className="text-lg font-semibold text-gray-700">R${price}</span>
      </div>
    </div>
  );
};
