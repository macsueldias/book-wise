import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const books = await prisma.book.findMany({
    where: {
      categories: {
          some: {
            categoryId: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
          } 
     
      }
    }
  })

  return res.status(201).json(books)
}