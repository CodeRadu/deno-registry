import { Package } from "@prisma/client";
import { getClient } from ".";

export interface Pkg {
  name: string;
  repositoryName?: string;
  id?: string
  repository?: string
  valid?: boolean
  fullRepositoryName?: string
}

export async function getAllPackages() {
  const client = getClient()
  const pkgs = await client.package.findMany()
  return pkgs
}

export async function getPackage(id: string) {
  const client = getClient()
  const pkg = await client.package.findFirst({
    where: {
      id
    }
  })
  return pkg
}

export async function getPackageId(repoName: string) {
  const client = getClient()
  const pkg = await client.package.findFirst({
    where: {
      name: repoName
    },
    select: {
      id: true
    }
  })
  return pkg?.id
}

export async function addPackage(pkg: Pkg) {
  const client = getClient()
  return client.package.create({
    data: {
      name: pkg.name,
      repositoryName: pkg.repositoryName,
      repository: '',
    }
  })
}

export async function updatePackage(id: string, pkg: Package) {
  const client = getClient()
  return client.package.update({
    where: {
      id
    },
    data: pkg
  })
}