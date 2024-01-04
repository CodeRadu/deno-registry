import { NextApiRequest, NextApiResponse } from "next";
import { addPackage, getPackage, getPackageId } from "../../../database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method
  if (method === "GET") {
    const name = req.query.name as string
    const pkgId = await getPackageId(name)
    if (!pkgId) {
      res.status(404).json({ error: true, code: 404 })
      return
    }
    const pkg = await getPackage(pkgId)
    res.status(200).json(pkg)
  }
}