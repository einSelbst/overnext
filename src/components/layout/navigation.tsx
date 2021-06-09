import Link from 'next/link'

type Props = {
  readonly success: boolean
  readonly error: boolean
}

/* export const Navigation: React.ReactComponent = (props: InferProps<typeof Navigation.propTypes>): JSX.Element => { */
const Navigation = (props: Props): ComponentReturnType => (
  <>
    <nav title='Site Navigation'>
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
          className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white'
          id='search-global'
          name='Search Bar'
          placeholder='Search...'
          title='Search on Overnext'
          type='search'
        />
      </label>
    </div>
  </>
)

export { Navigation }
