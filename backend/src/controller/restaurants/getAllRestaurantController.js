import getAllRestaurantService from "../../service/restaurants/getAllRestaurantService.js";

async function getAllRestaurantController(req, res) {
  try {
    const { filter } = req.query;
    const restaurants = await getAllRestaurantService(filter);
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default getAllRestaurantController;
