import { Request, Response } from "express";
import { User } from "../models/user.model";

const handleFilter = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(req.query)) {
      if (typeof value === "string" && value.includes(",")) {
        filters[key] = { $in: value.split(",").map((v) => v.trim()) };
      } else if (typeof value === "string" && /^-?\d+(\.\d+)?$/.test(value)) {
        filters[key] = Number(value);
      } else {
        filters[key] = value;
      }
    }

    const result = await User.find(filters);

    res.status(200).json({
      data: result,
      message: result.length ? "Users found" : "No data found",
      total: result.length,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

export { handleFilter };
