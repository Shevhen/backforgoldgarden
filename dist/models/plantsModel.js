"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plants = void 0;
const mongoose_1 = require("mongoose");
const plantsSchema = new mongoose_1.Schema({
    plantsName: { type: String, require: true },
    plantsAbout: { type: String },
    plantsPrice: { type: Number, require: true },
});
exports.Plants = (0, mongoose_1.model)("Plants", plantsSchema);
