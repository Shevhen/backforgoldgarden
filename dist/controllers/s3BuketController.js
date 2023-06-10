"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3BuketController = void 0;
class S3BuketController {
    async UploadFileToS3(req, res, next) {
        try {
            let buffer = {};
            buffer = req.body;
            console.log(buffer);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.s3BuketController = new S3BuketController();
