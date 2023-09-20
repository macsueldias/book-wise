import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const book_id = req.query.id as string
  
  const rating = await prisma.rating.findMany({
    where: {
      book_id,
    }
  })

  return res.status(201).json(rating)
}