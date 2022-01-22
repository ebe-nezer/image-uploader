import { Config } from "./index";

export const prod = {
  MONGODB_URI: process.env.MONGODB_URI!,
  MONGODB_DB: process.env.MONGODB_DB!,
} as Config;
