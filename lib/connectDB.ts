import config from "../config";
import { MongoClient, ConnectOptions, Db } from "mongodb";
let uri = config()?.MONGODB_URI!;
let dbName = config()?.MONGODB_DB!;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside /config/dev.ts"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside /config/dev.ts"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}
