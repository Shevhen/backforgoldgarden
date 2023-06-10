"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantsController = void 0;
const plantsModel_1 = require("../models/plantsModel");
class PlantsController {
    async post(req, res, next) {
        try {
            const info = req.body;
            const item = await plantsModel_1.Plants.create({ ...info });
            return res
                .status(200)
                .json({ message: "new plants was added", data: item });
        }
        catch (e) {
            next(e);
        }
    }
    async getAll(req, res, next) {
        try {
            const users = await plantsModel_1.Plants.find();
            return res.json(users);
        }
        catch (e) {
            next(e);
        }
    }
    async delete(req, res, next) {
        try {
            const { plantsId } = req.params;
            const plant = await plantsModel_1.Plants.findById(plantsId);
            await plantsModel_1.Plants.deleteOne({ _id: plantsId });
            return res.json(plant);
        }
        catch (e) {
            next(e);
        }
    }
    async findById(req, res, next) {
        try {
            const { plantsId } = req.params;
            const plant = await plantsModel_1.Plants.findById(plantsId);
            return res.json(plant);
        }
        catch (e) {
            next(e);
        }
    }
    async updateById(req, res, next) {
        try {
            const { plantsId } = req.params;
            const body = req.body;
            const nPlant = await plantsModel_1.Plants.updateOne({ _id: plantsId }, { ...body });
            return res.json({ message: "plant was updated", data: nPlant });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.plantsController = new PlantsController();
