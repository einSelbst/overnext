import Link from 'next/link'
/* import { FaBeer, FaCarrot, FaDog } from 'react-icons/fa' */
/* import { FcAbout, FcPrivacy } from 'react-icons/fc' */
/* import { GrContact } from 'react-icons/gr' */
import MenuItem from './menu-item'
import HeartIcon from 'components/icons/HeartIcon'

type Props = {
  readonly success: boolean
  readonly error: boolean
}

/* export const Navigation: React.ReactComponent = (props: InferProps<typeof Navigation.propTypes>): JSX.Element => { */
const Navigation = (props: Props): ComponentReturnType => (
  <>
    <nav title='Site Navigation'>
      {/* <MenuItem title='Home' path='/' icon={FaBeer} /> */}
      <MenuItem title='Home' path='/' />
      {/* <MenuItem title='Dog' path='/dog' icon={FaDog} /> */}
      <MenuItem title='Dog' path='/dog' />
      {/* <MenuItem title='Page 1' path='/page-1' icon={FaCarrot} /> */}
      <MenuItem title='Page 1' path='/page-1' />
      {/* <MenuItem title='About' path='/legal/about' icon={FcAbout} /> */}
      <MenuItem title='About' path='/legal/about' />
      {/* <MenuItem title='Privacy' path='/legal/privacy' icon={FcPrivacy} /> */}
      <MenuItem title='Privacy' path='/legal/privacy' />
      {/* <MenuItem title='Contact' path='/legal/contact' icon={GrContact} /> */}
      <MenuItem title='Contact' path='/legal/contact' />
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
      <HeartIcon className='text-red-700' width='48px' height='16px' />
      <HeartIcon className='text-purple-700' width='48px' height='32px' />
      <HeartIcon className='text-pink-700' width='48px' height='48px' />
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
