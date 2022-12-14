import { useRouteError, Link } from 'react-router-dom'
import { MdWest } from 'react-icons/md'

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string, message: string }

  return (
    <div className='grid min-h-screen place-content-center bg-neutral-800 text-center text-xl text-neutral-100' id="error-page">
      <h1>Oops!</h1>
      <p>There was an error:
        <i> {error.statusText || error.message}</i>
      </p>

      <div className='mx-auto mt-8'>
        <Link to='/' className='flex max-w-[120px] items-center gap-3 rounded-sm bg-neutral-700 py-3 px-6 shadow-md ' >
          <MdWest />
          Back
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
