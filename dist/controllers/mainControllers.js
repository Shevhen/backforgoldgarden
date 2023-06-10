"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainControllers = void 0;
const plantsModel_1 = require("../models/plantsModel");
class MainControllers {
    async get(res, next) {
        try {
            const plants = await plantsModel_1.Plants.find();
            return res.json(plants);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.mainControllers = new MainControllers();
