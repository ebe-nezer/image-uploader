import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../lib/connectDB";

interface ReqModifiedType extends NextApiRequest {
  [key: string]: any;
}
export const imageUpload = async (
  req: ReqModifiedType,
  res: NextApiResponse
) => {
  // const data = req.file;
  const { client, db } = await connectToDatabase();
  client.connect().then(() => {
    console.log("Connected to db");

    const copyPath =
      process.env.NODE_ENV === "production"
        ? "https://"
        : "http://" + req.headers.host + "/image/" + req.file.filename;
    db.collection("uploads")
      .insertOne({ ...req.file, copyPath })
      .then((response) => {
        return res.status(200).json({
          message: "uploaded",
          ...response,
          filename: req.file.filename,
        });
      })
      .catch((err) => res.status(401).json({ message: "error", err }));
  });
};
