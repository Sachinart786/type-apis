import { Request, Response } from "express";
import { User } from "../models/user.model";

const handleFilter = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(req.query)) {
      if (typeof value === "string" && value.includes(",")) {
        const values = value.split(",").map((v) => v.trim());
        filters[key] = { $in: values };
      } else {
        const numValue = Number(value);
        filters[key] = isNaN(numValue) ? value : numValue;
      }
    }

    const result = await User.aggregate([{ $match: filters }]);

    if (!result.length) {
      res.status(404).json({
        data: [],
        message: "No data found",
        total: result.length,
        success: false,
      });
    }

    res.status(200).json({
      data: result,
      message: "Users found",
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
