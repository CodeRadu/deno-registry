import Link from 'next/link'
import ButtonLink from './ButtonLink'

export default function Header() {
  return (
    <div className='fixed w-screen h-10 bg-blue-600 text-white flex flex-row items-center justify-between'>
      <div className='ml-3'>
        <Link href={'/'}>
          <h1 className='text-xl'>Deno Registry</h1>
        </Link>
      </div>
      <div className='mr-3'>
        <ButtonLink />
      </div>
    </div>
  )
}
