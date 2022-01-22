import { NextApiRequest, NextApiResponse } from "next";

interface ReqModifiedType extends NextApiRequest {
  [key: string]: any;
}

export const imageUpload = (req: ReqModifiedType, res: NextApiResponse) => {
  const file = req.file;
  const others = req.body;
  return res.status(200).json({ message: "Image Uploaded", file, ...others });
};
