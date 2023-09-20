import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { z } from "zod"
import { buildNextAuthOptions } from "../auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  try {
    const bodySchema = z.object({
      description: z.string().max(450),
      rate: z.number().min(1).max(5),
      id: z.string(),
      userId: z.string(),
    })
    
    const { id, description, rate, userId } = bodySchema.parse(req.body)
      
    await prisma.rating.create({
      data: {
        book_id: id,
        description,
        rate,
        user_id: userId
      }
    })
  
    return res.status(201).end()
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}