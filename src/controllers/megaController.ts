// // import { Request, Response, NextFunction } from "express";
// import { Storage } from "megajs";
// // import * as path from "path";
//
// class MegaController {
//   public async UploadFileToMega() {
//     try {
//       const storage = await new Storage({
//         email: "",
//         password: "",
//       }).ready;
//
//       await storage.upload("image","C:/Users/Admin/Videos/Desktop/5.jpg", "").complete;
//       console.log("The file was uploaded!");
//     } catch (e) {
//       console.log(e);
//       process.exit(1);
//       // next(e);
//     }
//   }
// }
// export const megaController = new MegaController();
