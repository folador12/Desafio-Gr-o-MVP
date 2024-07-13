import { getRestaurants } from "@/service/apiClient";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Navbar } from "@/components/navbar";
import { RestaurantCard } from "@/components/restaurantCard";
import { useState, useEffect } from "react";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  const loadRestaurants = async () => {
    const data = await getRestaurants(search);
    setRestaurants(data);
  };

  useEffect(() => {
    loadRestaurants();
  }, [search]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <Navbar search={search} onSearchChange={setSearch} />
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center items-center">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              image={`http://localhost:3333/images/${restaurant.avatar}`}
              name={restaurant.name}
              description={restaurant.description}
              rating={restaurant.avaliation}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
