import * as mongo from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../lib/connectDB";
import fs from "fs";

export const getImage = async (
  req: NextApiRequest & { [key: string]: string },
  res: NextApiResponse
) => {
  const { client, db } = await connectToDatabase();
  const { id } = req.query;
  client
    .connect()
    .then(() => {
      db.collection("uploads")
        .findOne({ filename: id })
        .then((result) => {
          return res.status(200).json({ message: "Found", ...result });
        })
        .catch((err) => res.status(404).json({ message: "Not Found", ...err }));
    })
    .catch((err) => {
      return res.status(400).json({ err });
    });
};
