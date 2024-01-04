import { NextApiRequest, NextApiResponse } from "next";
import { getAllPackages } from "../../../database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method
  if (method === "GET") {
    const packages = await getAllPackages()
    res.status(200).json(packages)
  }
}