import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { z } from 'zod'

const categoyBodySchema = z.object({
  category: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "GET") return res.status(405).end()

  const { category } = categoyBodySchema.parse(req.body)

  console.log("teste")

	const categories = await prisma.category.findMany();

	return res.json({ categories })
}