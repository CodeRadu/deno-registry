import Head from 'next/head'
import { FormEvent, useState } from 'react'

const Add = (props: null) => {
  const [name, setName] = useState('<name>')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  function validateName() {
    const regex = /^[a-z-_]+$/
    return name.match(regex)
  }
  async function handleNameChange(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value)
    if (e.currentTarget.value === '') {
      setName('<name>')
      setLoading(true)
      return
    } else setLoading(false)
    const pkg = await (
      await fetch(`/api/package/${e.currentTarget.value}`).catch()
    ).json()
    if (!pkg.error) {
      setError('Package already exists')
      setLoading(true)
    } else {
      setError('')
      setLoading(false)
    }
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    if (!validateName()) {
      setError('Name can only contain letters a-z, A-Z underscores and dashes.')
      setLoading(false)
      return
    }
    setError('')
    fetch('/api/package', {
      method: 'POST',
      headers: {
        ContentType: 'Application/JSON',
      },
      body: JSON.stringify({
        name,
      }),
    })
  }
  return (
    <div className=''>
      <Head>
        <title>Add your package</title>
      </Head>
      <form
        className='bg-white shadow-md px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit}
      >
        {error && <div className='text-red-500'>{error}</div>}
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Package name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Name'
            required
            onChange={(e) => handleNameChange(e)}
          ></input>
        </div>
        <div className='mb-4'>
          You will need to setup a webhook on github with url
          https://reg.venovedo.ro/api/wh/{name} sending just the push event and
          type to application/json
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:hover:bg-gray-400 transition-all duration-300'
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Add
