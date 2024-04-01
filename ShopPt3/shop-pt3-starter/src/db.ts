import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri: string = process.env.MONGODB_URL || "";
console.log(uri);
const client: MongoClient = new MongoClient(uri);

export const getClient = async () => {
  await client.connect();
  return client;
};
