import { Request, Response, NextFunction } from "express";

class S3BuketController {
  public async UploadFileToS3(req: Request, res: Response, next: NextFunction) {
    try {
      let buffer = {};
      buffer = req.body;
      console.log(buffer);
    } catch (e) {
      next(e);
    }
  }
}
export const s3BuketController = new S3BuketController();
