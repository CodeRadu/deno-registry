// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Package } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { addPackage, getPackage, getPackageId, Pkg, updatePackage } from '../../../database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.query.pkgname as string
  const pkgId = await getPackageId(name)
  const pkg = await getPackage(pkgId!)
  const redirPath = `https://raw.githubusercontent.com/${pkg?.fullRepositoryName}/main/index.ts`
  res.redirect(redirPath)
}
