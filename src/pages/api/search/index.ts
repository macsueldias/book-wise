import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "GET") return res.status(405).end()

  const name = req.query.name as string

  const books = await prisma.book.findMany({
    where: {
      OR: [
        {
          name: {
            contains: name,
          },
        },
        {
          author: {
            contains: name,
          },
        },
      ],
    },
  })

	return res.json({ books })
}