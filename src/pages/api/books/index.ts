import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const categoyBodySchema = z.object({
  category: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { category } = categoyBodySchema.parse(req.query)

  const books = await prisma.book.findMany({
    where: {
      categories: {
          some: {
            categoryId: category,
          }
      }
    }
  })

  return res.status(201).json(books)
}