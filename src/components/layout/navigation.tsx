import MenuItem from './menu-item'

import HeartIcon from 'components/icons/heart-icon'

type Props = {
  readonly success: boolean
  readonly error: boolean
}

const Navigation = (props: Props): ComponentReturnType => (
  <nav title='Site Navigation'>
    <MenuItem path='/' title='Home' />
    <MenuItem path='/dog' title='Dog' />
    <MenuItem path='/page-1' title='Page 1' />
    <MenuItem path='/first-amp' title='First AMP' />
    <MenuItem path='/hybrid/one' title='One' />
    <MenuItem path='/hybrid/post/1' title='Post 1' />
    <MenuItem path='/hybrid/post/4' title='Post 4' />
    <MenuItem path='/hybrid/foo/bar' title='Foo Bar' />
    <MenuItem path='/legal/about' title='About' />
    <MenuItem path='/legal/privacy' title='Privacy' />
    <MenuItem path='/legal/contact' title='Contact' />
    {/* @see https://github.com/sindresorhus/react-extras#choose */}
    <div>
      {(() => {
        if (props.success) {
          return <span>{props.success}</span>
        }
        if (props.error) {
          return <span>{props.error}</span>
        }
        return <span>props unknown</span>
      })()}
    </div>
    <HeartIcon className='text-red-700' height='16px' width='48px' />
    <HeartIcon className='text-purple-700' height='32px' width='48px' />
    <HeartIcon className='text-pink-700' height='48px' width='48px' />
  </nav>
)

export default Navigation
