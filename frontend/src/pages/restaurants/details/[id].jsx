import { getCategories, getRestaurantById } from "@/service/apiClient";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/productCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { formatarTelefone } from "@/utils/lib";

export default function Details() {
  const router = useRouter();

  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);

  const { id } = router.query;

  const loadRestaurantsDetails = async () => {
    const data = await getRestaurantById(id);
    setRestaurant(data);
  };

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    loadCategories();
    loadRestaurantsDetails();
  }, [id]);

  useEffect(() => {
    if (Object.keys(restaurant).length > 0 && categories.length > 0) {
      const productsByCategory = categories.map((category) => {
        const products = restaurant.products.filter(
          (product) => product.category.id === category.id
        );

        return {
          category,
          products,
        };
      });

      setProductsByCategory(productsByCategory);
    }
  }, [restaurant, categories]);

  if (Object.keys(restaurant).length === 0) {
    return <div>Carregando detalhes do restaurante...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <Navbar />

      <div className="min-w-full rounded overflow-hidden shadow-lg m-4 bg-white">
        <div className="relative w-full h-64">
          <Image
            className="object-cover"
            src={`http://localhost:3333/images/${restaurant.avatar}`}
            alt={restaurant.name}
            fill
            priority
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-4xl mb-2">{restaurant.name}</div>
          <p className="text-gray-700 text-2xl">{restaurant.address}</p>
          <p className="text-gray-700 text-2xl">
            {formatarTelefone(restaurant.phone)}
          </p>
          <p className="text-gray-700 text-2xl">{restaurant.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center">
          <FaStar className="text-yellow-500 mr-2" />
          <span className="text-lg font-semibold text-gray-700">
            {restaurant.avaliation}
          </span>
        </div>
      </div>

      <div className="container mx-auto p-4">
        {productsByCategory?.map(({ category, products }) => (
          <div className="mb-8" key={category.id}>
            {products.length !== 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                <div className="flex flex-wrap">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      avatar={`http://localhost:3333/images/${product.avatar}`}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
