import * as prod from "./prod";

export interface Config {
  MONGODB_URI: string | undefined;
  MONGODB_DB: string | undefined;
}

const config = () => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === "development") {
    return {
      // MUST ADD MONGODB URL AND DB FOR RUNNING THIS PROJECT
      MONGODB_URI: process.env.MONGODB_URI,
      MONGODB_DB: process.env.MONGODB_DB,
    };
  } else if (NODE_ENV === "production") {
    return { ...prod.prod };
  }
};

export default config;
