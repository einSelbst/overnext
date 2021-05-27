import Link from 'next/link'
import { FaBeer, FaDog } from 'react-icons/fa'
import { FcAbout, FcPrivacy } from 'react-icons/fc'
import { GrContact } from 'react-icons/gr'

type Props = {
  readonly success: boolean
  readonly error: boolean
}

/* export const Navigation: React.ReactComponent = (props: InferProps<typeof Navigation.propTypes>): JSX.Element => { */
const Navigation = (props: Props): ComponentReturnType => (
  <>
    <nav title='Site Navigation'>
      <Link href='/'>
        <a>
          <FaBeer />
          Home
        </a>
      </Link>
      &nbsp;&bull;&nbsp;
      <Link href='/dog'>
        <a>
          <FaDog />
          Dog
        </a>
      </Link>
      &nbsp;&bull;&nbsp;
      <Link href='/page-1'>
        <a>Page 1</a>
      </Link>
      &nbsp;&bull;&nbsp;
      <Link href='/legal/about'>
        <a>
          <FcAbout />
          About
        </a>
      </Link>
      &nbsp;&bull;&nbsp;
      <Link href='/legal/privacy'>
        <a>
          <FcPrivacy />
          Privacy
        </a>
      </Link>
      &nbsp;&bull;&nbsp;
      <Link href='/legal/contact'>
        <a>
          <GrContact />
          Contact
        </a>
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
      <form role='search'>
        <label htmlFor='search-global'>
          <span>Discover Vehicles</span>
          {/* ToDo [+next-i18next]: localize title */}
          <input
            aria-label='search text'
            className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white'
            id='search-global'
            name='Search Bar'
            placeholder='Search...'
            title='Search on Overnext'
            type='search'
          />
        </label>
        <button type='submit'>search</button>
      </form>
    </div>
  </>
)

export default Navigation
