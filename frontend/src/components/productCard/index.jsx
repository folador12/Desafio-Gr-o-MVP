import React from "react";
import Image from "next/image";

export const ProductCard = ({ avatar, name, description, price }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="relative w-full h-64">
        <Image className="object-cover" src={avatar} alt={name} layout="fill" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <span className="text-lg font-semibold text-gray-700">R${price}</span>
      </div>
    </div>
  );
};
