// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Package } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { addPackage, getPackage, getPackageId, Pkg, updatePackage } from '../../../database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  const name = req.query.name as string
  const repo = data.repository
  const pkgId = await getPackageId(name)
  if (!pkgId) {
    res.status(404).json({ status: "Package not found" })
    return
  }
  const pkg = await getPackage(pkgId!) as Pkg
  delete pkg?.id
  pkg!.valid = true
  pkg!.repository = repo.html_url
  pkg!.fullRepositoryName = repo.full_name
  updatePackage(pkgId!, pkg as Package)
  res.json({ status: 'ok' })
}
