import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "GET") return res.status(405).end()

  const categoryId = req.query.category as string

	const books = await prisma.category.findMany({
    where: {
      books: {
        some: {
          book_id: categoryId
        }
      }
    }
  })


	return res.json({ books })
}