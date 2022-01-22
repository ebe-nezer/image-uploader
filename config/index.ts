import * as prod from "./prod";
import * as dev from "./dev";

export interface Config {
  MONGODB_URI: string | undefined;
  MONGODB_DB: string | undefined;
}

const config = () => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === "development") {
    return { ...dev.dev };
  } else if (NODE_ENV === "production") {
    return { ...prod.prod };
  }
};

export default config;
