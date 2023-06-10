"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.megaController = void 0;
const megajs_1 = require("megajs");
class MegaController {
    async UploadFileToMega() {
        try {
            const storage = await new megajs_1.Storage({
                email: "shevhen9@gmail.com",
                password: "Mega05071991",
            }).ready;
            await storage.upload("C:/Users/Admin/Videos/Desktop/5.jpg").complete;
            console.log("The file was uploaded!");
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    }
}
exports.megaController = new MegaController();
