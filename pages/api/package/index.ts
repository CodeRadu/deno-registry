import { NextApiRequest, NextApiResponse } from "next";
import { getAllPackages, addPackage } from "../../../database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method
  if (method === "POST") {
    const body = JSON.parse(req.body)
    const pkg = addPackage({
      name: body.name,
    })
    res.status(200).json(pkg)
  } else
    if (method === "GET") {
      const packages = await getAllPackages()
      res.status(200).json(packages)
    }
}