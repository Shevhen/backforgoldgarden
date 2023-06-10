"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const plantsRouter_1 = require("./routers/plantsRouter");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "10mb" }));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: "10mb" }));
app.use((0, cors_1.default)());
app.use("/plants", plantsRouter_1.PlantsRouter);
const PORT = 5100 || "backforgoldgarden-production.up.railway.app";
app.listen(PORT, () => {
    mongoose_1.default.connect("mongodb+srv://Yevhen:Yevhen@cluster0.ct2xzoh.mongodb.net/?retryWrites=true&w=majority");
    console.log("server started!!!");
});
