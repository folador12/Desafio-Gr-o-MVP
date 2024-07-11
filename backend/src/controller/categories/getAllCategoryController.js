import getAllRCategoryService from "../../service/categories/getAllCategoryService.js";

async function getAllCategoryController(req, res) {
  try {
    const categories = await getAllRCategoryService();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default getAllCategoryController;
