import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "GET") return res.status(405).end()

  const id = req.query.id as string

	const user = await prisma.user.findUnique({
        where: {
            id,
        }
    });

	return res.json(user)
}