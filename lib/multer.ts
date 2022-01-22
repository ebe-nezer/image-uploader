/// Crypto is used to generate a random unique string for fileName
import * as crypto from "crypto";
import path from "path";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

interface MetaType {
  [key: string]: any;
}

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI!,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + file.originalname;
        const url =
          process.env.NODE_ENV === "production"
            ? "https://image-upload.vercel.com/public"
            : "http://localhost:3000/public/";
        const filePath = url + filename;
        const metadata: MetaType = {
          filename,
          filePath,
          uploaded: new Date(),
        };
        if (req.body && req.body.userInfo) {
          metadata["userInfo"] = { ...req.body.info };
        }
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
          metadata,
        };
        resolve(fileInfo);
      });
    });
  },
});
const checkFileType = (
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  //Alowes ext
  const fileTypes = /jpeg|jpg|png|gif|svg|webp|apng|avif|bmp|ico|tiff/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

  if (extname) {
    return cb(null, true);
  } else {
    return cb(new Error("Images Only"));
  }
};
export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => checkFileType(file, cb),
}).single("files");
