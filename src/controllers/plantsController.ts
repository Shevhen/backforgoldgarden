import { Request, Response, NextFunction } from "express";

import { Plants } from "../models/plantsModel";

class PlantsController {
  public async post(req: Request, res: Response, next: NextFunction) {
    try {
      const info = req.body;
      const item = await Plants.create({ ...info });
      return res
        .status(200)
        .json({ message: "new plants was added", data: item });
    } catch (e) {
      next(e);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await Plants.find();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { plantsId } = req.params;
      const plant = await Plants.findById(plantsId);
      await Plants.deleteOne({ _id: plantsId });
      return res.json(plant);
    } catch (e) {
      next(e);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { plantsId } = req.params;
      const plant = await Plants.findById(plantsId);
      return res.json(plant);
    } catch (e) {
      next(e);
    }
  }

  public async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const { plantsId } = req.params;
      const body = req.body;
      const nPlant = await Plants.updateOne({ _id: plantsId }, { ...body });
      return res.json({ message: "plant was updated", data: nPlant });
    } catch (e) {
      next(e);
    }
  }
}

export const plantsController = new PlantsController();
