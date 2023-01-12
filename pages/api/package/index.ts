import { NextApiRequest, NextApiResponse } from "next";
import { addPackage } from "../../../database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method
  if (method === "POST") {
    const body = JSON.parse(req.body)
    const pkg = addPackage({
      name: body.name,
    })
    res.status(200).json(pkg)
  }
}