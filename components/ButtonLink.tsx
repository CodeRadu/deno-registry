import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  to: string
}

export default function ButtonLink({ children, to }: Props) {
  return (
    <div className='link-button'>
      <Link href={to}>{children}</Link>
    </div>
  )
}
