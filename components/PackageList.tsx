import { Package } from '@prisma/client'
import Link from 'next/link'
import React, { useEffect } from 'react'

interface Props {
  pkgs?: Package[]
}

export default function PackageList({ pkgs }: Props) {
  useEffect(() => {
    console.log(pkgs)
  }, [pkgs])
  return (
    <div>
      {pkgs?.length == 0 || !pkgs ? (
        'No packages found'
      ) : (
        <table className=''>
          <thead>
            <tr>
              <th className='td'>Package Name</th>
              <th className='td'>Repository</th>
              <th className='td'>Use path</th>
            </tr>
          </thead>
          <tbody>
            {pkgs.map((pkg) => {
              return (
                <tr key={pkg.id}>
                  <td className='td'>{pkg.name}</td>
                  <td className='td'>
                    <Link href={pkg.repository}>
                      {pkg.repository || 'unknown'}
                    </Link>
                  </td>
                  <td className='td'>{`https://reg.venovedo.ro/api/${pkg.name}/<file>`}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
