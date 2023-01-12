import Link from 'next/link'
import ButtonLink from './ButtonLink'

export default function Header() {
  return (
    <div className='w-screen h-10 bg-blue-600 text-white flex flex-row items-center justify-between z-50 box-border'>
      <div className='ml-3'>
        <Link href={'/'}>
          <h1 className='text-xl'>Deno Registry</h1>
        </Link>
      </div>
      <div className='mr-3 flex'>
        <ButtonLink to='/add'>Add your package</ButtonLink>
      </div>
    </div>
  )
}
