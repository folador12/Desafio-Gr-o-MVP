import getByIdRestaurantService from "../../service/restaurants/getByIdRestaurantService.js";

async function getByIdRestaurantController(req, res) {
  try {
    const { id } = req.params;
    const restaurant = await getByIdRestaurantService(id);
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default getByIdRestaurantController;
