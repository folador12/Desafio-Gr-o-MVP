import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";

export const RestaurantCard = ({ image, name, description, rating, id }) => {
  const router = useRouter();

  const handleRestaurantClick = () => {
    router.push(`/restaurants/details/${id}`);
  };
  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white cursor-pointer"
      onClick={handleRestaurantClick}
    >
      <div className="relative w-full h-64">
        <Image className="object-cover" src={image} alt={name} layout="fill" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <FaStar className="text-yellow-500 mr-2" />
        <span className="text-sm font-semibold text-gray-700">{rating}</span>
      </div>
    </div>
  );
};
