import { NextApiRequest, NextApiResponse } from "next";
import { keystaticSchema } from "~/src/utils/keystatic";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:3000`;

  const raw = await fetch(`${url}/content/dzikir-sore.json`);

  const data = keystaticSchema.dzikir
    .pick({
      dzikir: true,
    })
    .parse(await raw.json());

  const addId = data.dzikir.map((item, index) => {
    return {
      id: index + 1,
      ...item,
    };
  });

  res.status(200).json(addId);
};

export default handler;
