import Link from 'next/link'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { FaCarrot } from 'react-icons/fa'

/**
 * @see {@link https://gist.github.com/busypeoples/6ac09e8dd63a12f78603fd76aa9cf580}
 * @see {@link https://https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88}
 */
type InferPropertyTypes<
  PropertyTypes,
  DefaultProps = unknown,
  Props = PropTypes.InferProps<PropertyTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key]
}

/**
 * A single Menu Item for usage in navigation
 */
const MenuItem: React.FC<MenuItemProps> = (
  props: MenuItemProps
): React.ReactElement => {
  const myIcon = React.createElement(props.icon)
  return (
    <>
      <Link href={props.path}>
        <a>
          {myIcon}
          {props.title}
        </a>
      </Link>
      &nbsp; &nbsp; &nbsp;
    </>
  )
}

const menuItemPropertyTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
}

const menuItemDefaultProps = {
  icon: FaCarrot,
}

type MenuItemProps = InferPropertyTypes<
  typeof menuItemPropertyTypes,
  typeof menuItemDefaultProps
>

MenuItem.propTypes = menuItemPropertyTypes
MenuItem.defaultProps = menuItemDefaultProps

export default MenuItem
