import * as mongo from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../lib/connectDB";
import fs from "fs";

export const getImage = async (
  req: NextApiRequest & { [key: string]: string },
  res: NextApiResponse
) => {
  console.log(req.query);
  const { client, db } = await connectToDatabase();
  const { id } = req.query;
  const _id = new mongo.ObjectId(id.toString());
  client
    .connect()
    .then(() => {
      const bucket = new mongo.GridFSBucket(db, {
        bucketName: "uploads",
        chunkSizeBytes: 1024,
      });
      bucket.find({ _id }).toArray((err, files) => {
        if (!files || typeof files === undefined || typeof files === null) {
          return res.status(404).json({
            err: "No file Exists",
          });
        }
        const fileTypesAvailable = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/gif",
          "image/svg",
          "image/webp",
          "image/apng",
          "image/avif",
          "image/bmp",
          "image/ico",
          "image/tiff",
        ];
        const fileType = files[0].contentType
          ? files[0].contentType.toString()
          : "";
        if (fileTypesAvailable.includes(fileType)) {
          res.setHeader("Content-Type", fileType);
          bucket
            .openDownloadStream(_id)
            .pipe(fs.createWriteStream("./public/" + files[0].filename))
            .on("error", ({ message }) => {
              // console.error(err.message)
              res.status(404).json({ message });
            })
            .on("finish", () => {
              let { metadata } = files[0];
              return res.status(201).json({
                id: files[0]._id,
                metadata,
                messge:
                  "File with id: " +
                  files[0]._id +
                  " has downloaded. Check your public folder to view the image.",
              });
            });
        } else {
          return res
            .status(401)
            .json({ message: "Oops.., found an Non-Image file :(" });
        }
      });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
