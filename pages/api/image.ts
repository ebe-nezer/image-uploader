import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getImage } from "../../controller/image";
import { onError, onNoMatch } from "../../lib/functions";

const imageHandler = nc<NextApiRequest, NextApiResponse>({
  onError,
  onNoMatch,
  attachParams: true,
}).get("/api/image", getImage);

export default imageHandler;

export const config = {
  api: {
    bodyParser: false,
  },
};
