import { setupAPIClient } from "./api";

export const api = setupAPIClient();

export const signUp = async (data) => {
  try {
    const response = await api.post("/users", data);

    const { message } = response.data;

    return { status: response.status, message };
  } catch (error) {
    return {
      message: error.response.data.message,
      status: error.response.status,
    };
  }
};

export const getRestaurants = async (filter) => {
  const { data } = await api.get("/restaurants", {
    params: {
      filter,
    },
  });

  return data;
};

export const getRestaurantById = async (id) => {
  const { data } = await api.get(`/restaurants/${id}`);

  return data[0];
};

export const getCategories = async () => {
  const { data } = await api.get("/categories");

  return data;
};
