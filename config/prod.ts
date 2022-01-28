import { Config } from "./index";

export const prod = {
  MONGODB_URI: process.env.MONGODB_URI!,
  MONGODB_DB: process.env.MONGODB_DB!,
  CLOUDINARY_URL: process.env.CLOUDINARY_URL!,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
  CLOUDINARY_CLOUD: process.env.CLOUDINARY_CLOUD_NAME!,
} as Config;
