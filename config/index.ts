import * as prod from "./prod";

export interface Config {
  MONGODB_URI: string | undefined;
  MONGODB_DB: string | undefined;
}

const config = () => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === "development") {
    return {
      // MUST ADD in .env's
      MONGODB_URI: process.env.MONGODB_URI!,
      MONGODB_DB: process.env.MONGODB_DB!,
      CLOUDINARY_URL: process.env.CLOUDINARY_URL!,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!,
    };
  } else if (NODE_ENV === "production") {
    return { ...prod.prod };
  }
};

export default config;
