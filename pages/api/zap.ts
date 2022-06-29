// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { load } from "cheerio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === "GET") {
    const { url } = query;

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const json = await response.json();
    res.status(200).json({ html: json });

    // try {
    //   if (!url) throw new Error("URL not provided");
    //   const response = await fetch(url as string);
    //   const htmlString = await response.text();
    //   const $ = load(htmlString);
    //   const price = $(
    //     "div.info__base > div > div:nth-child(1) > ul > li > strong"
    //   ).text();

    //   res.status(200).json({ html: price, query });
    // } catch (e: any) {
    //   res.status(500).json({ error: e.message });
    // }
  }
}
