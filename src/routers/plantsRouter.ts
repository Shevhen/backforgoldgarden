import { Router } from "express";
import multer, { memoryStorage } from "multer";

import { plantsController } from "../controllers/plantsController";
import { s3BuketController } from "../controllers/s3BuketController";
import { megaController } from "../controllers/megaController";
// import * as path from "path";

const router = Router();

const storage = memoryStorage();
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "images");
//   },
//   filename(req, file, callback) {
//     console.log(file);
//     callback(null, Date.now() + path.extname(file.originalname));
//   },
// });
const upload = multer({ storage: storage });

router.post("/post", plantsController.post);
router.get("/", plantsController.getAll);
router.delete("/:plantsId", plantsController.delete);
router.get("/:plantsId", plantsController.findById);
router.put("/:plantsId", plantsController.updateById);
router.post(
  "/post/image",
  upload.single("file"),
  s3BuketController.UploadFileToS3
);

// router.post("/post/mega/file", megaController.UploadFileToMega);

export const PlantsRouter = router;
