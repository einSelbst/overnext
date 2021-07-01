import Link from 'next/link'
import * as React from 'react'
/* import { FaCarrot } from 'react-icons/fa' */

/**
 * @see {@link https://gist.github.com/busypeoples/6ac09e8dd63a12f78603fd76aa9cf580}
 * @see {@link https://https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88}
 */
type InferPropertyTypes<
  PropertyTypes,
  DefaultProps = unknown,
  Props = PropertyTypes
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? DefaultProps[Key] | Props[Key]
    : Props[Key]
}

/**
 * A single Menu Item for usage in navigation
 */
const MenuItem: MenuItemProps = (props: MenuItemProps): React.ReactElement => (
  /* const myIcon = React.createElement(props.icon) */
  <>
    <Link href={props.path}>
      <a>
        {/* {myIcon} */}
        {props.title}
      </a>
    </Link>
    &nbsp; &nbsp; &nbsp;
  </>
)

type menuItemPropertyTypes = {
  path: String
  title: String
}
;/ * icon: PropTypes.func.isRequired, * /

const menuItemDefaultProps = {
  /* icon: FaCarrot, */
}

type MenuItemProps = InferPropertyTypes<
  menuItemPropertyTypes,
  typeof menuItemDefaultProps
>

export default MenuItem
