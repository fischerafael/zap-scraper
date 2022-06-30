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

    try {
      if (!url) throw new Error("URL not provided");
      const response = await fetch(url as string);
      const htmlString = await response.text();
      const $ = load(htmlString);
      const price = $(
        "div.info__base > div > div:nth-child(1) > ul > li > strong"
      )
        .text()
        .split(" ")
        .filter((char) => char !== "")
        .join()
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/\D/g, "");

      const name = $(
        "#app > div > section > article.main__info.oz-info-listing.container > h1 > strong"
      )
        .text()
        .replace(/(\r\n|\n|\r)/gm, "")
        .trim();

      const size = $(
        "#app > div > section > article.main__info.oz-info-listing.container > div.box--display-flex.box--items-start > div.box--flex-grow > div.info__base > ul > li.feature__item.text-regular.js-areas > span:nth-child(2)"
      )
        .text()
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/\D/g, "")
        .trim();

      const rooms = $(
        "#app > div > section > article.main__info.oz-info-listing.container > div.box--display-flex.box--items-start > div.box--flex-grow > div.info__base > ul > li.feature__item.text-regular.js-bedrooms > span:nth-child(2)"
      )
        .text()
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/\D/g, "")
        .trim();

      const parking = $(
        "#app > div > section > article.main__info.oz-info-listing.container > div.box--display-flex.box--items-start > div.box--flex-grow > div.info__base > ul > li.feature__item.text-regular.js-parking-spaces > span:nth-child(2)"
      )
        .text()
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/\D/g, "")
        .trim();

      const bath = $(
        "#app > div > section > article.main__info.oz-info-listing.container > div.box--display-flex.box--items-start > div.box--flex-grow > div.info__base > ul > li.feature__item.text-regular.js-bathrooms > span:nth-child(2)"
      )
        .text()
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/\D/g, "")
        .trim();

      const monthly = $(
        "#app > div > section > article.main__info.oz-info-listing.container > div.box--display-flex.box--items-start > div.box--flex-grow > div.info__base > div > ul > li.price__item.condominium.color-dark.text-regular > span"
      )
        .text()
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/\D/g, "")
        .trim();

      res
        .status(200)
        .json({ price, name, size, rooms, parking, bath, monthly });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
}
