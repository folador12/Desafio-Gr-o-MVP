import { Router } from "express";
import createUserController from "./controller/users/createUserController.js";
import loginUserController from "./controller/users/loginUserController.js";
import authMiddleware from "./auth/authMiddleware.js";
import getAllRestaurantController from "./controller/restaurants/getAllRestaurantController.js";
import getByIdRestaurantController from "./controller/restaurants/getByIdRestaurantController.js";
import getAllCategoryController from "./controller/categories/getAllCategoryController.js";

const router = Router();

router.post("/users", createUserController);
router.post("/users/login", loginUserController);

router.get("/restaurants", authMiddleware, getAllRestaurantController);
router.get("/restaurants/:id", authMiddleware, getByIdRestaurantController);

router.get("/categories", authMiddleware, getAllCategoryController);

export default router;
