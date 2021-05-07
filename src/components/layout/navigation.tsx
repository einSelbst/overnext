import Link from 'next/link'
/* import * as React from 'react' */

type Props = {
  success: boolean
  error: boolean
}

/**
 * Usage of prop-types
 * @see {@link https://fettblog.eu/typescript-react/prop-types/}
 */
/* export const Navigation: React.ReactComponent = (props: InferProps<typeof Navigation.propTypes>): JSX.Element => { */
export const Navigation = (props: Props): JSX.Element => {
  return (
    <>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href='/dog'>
          <a>Dog</a>
        </Link>{' '}
        |{' '}
        <Link href='/page-1'>
          <a>Page 1</a>
        </Link>{' '}
        |{' '}
        <Link href='/legal/about'>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href='/legal/privacy'>
          <a>Privacy</a>
        </Link>{' '}
        |{' '}
        <Link href='/legal/contact'>
          <a>Contact</a>
        </Link>
        {/* @see https://github.com/sindresorhus/react-extras#choose */}
        <div>
          {(() => {
            if (props.success) {
              return <span>{props.success}</span>
            }

            if (props.error) {
              return <span>{props.error}</span>
            }
            return <span>�</span>
          })()}
        </div>
      </nav>
      <div className='mt-2'>
        <label htmlFor='search-global'>
          <span>Discover Vehicles</span>
          {/* ToDo: localize title */}
          <input
            title='Search on Overnext'
            type='search'
            id='search-global'
            name='Search Bar'
            className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white'
            placeholder='Search...'
          />
        </label>
      </div>
    </>
  )
}
