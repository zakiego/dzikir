import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { keystaticSchema } from "~/src/utils/keystatic";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = keystaticSchema.dzikir
    .pick({
      dzikir: true,
    })
    .parse(JSON.parse(fs.readFileSync("content/dzikir-sore.json", "utf-8")));

  const addId = data.dzikir.map((item, index) => {
    return {
      id: index + 1,
      ...item,
    };
  });

  res.status(200).json(addId);
};

export default handler;
