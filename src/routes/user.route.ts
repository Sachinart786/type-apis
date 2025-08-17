import { Router } from "express";
import { handleFilter } from "../controllers/user.controller";

const router = Router();

router.get("/filter", handleFilter);

export default router;
