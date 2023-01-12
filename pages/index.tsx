import { Package } from '@prisma/client'
import type { NextPage, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '../components/Header'
import PackageList from '../components/PackageList'
import { getAllPackages } from '../database'

interface Props {
  packages: Package[]
}

export async function getServerSideProps() {
  const pkgs = await getAllPackages()
  return { props: { packages: pkgs } }
}

const Home = ({ packages }: Props) => {
  return (
    <div className='App'>
      <Head>
        <title>Deno Registry</title>
      </Head>
      <main className='p-7'>
        <PackageList pkgs={packages} />
      </main>
    </div>
  )
}

export default Home
