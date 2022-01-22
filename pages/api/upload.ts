// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { imageUpload } from "../../controller/upload";
import { onError, onNoMatch } from "../../lib/functions";
import { upload } from "../../lib/multer";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError,
  onNoMatch,
})
  .use("/", upload)
  .post(imageUpload);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
