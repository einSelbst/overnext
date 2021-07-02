import Link from 'next/link'
/* import { FaCarrot } from 'react-icons/fa' */

type MenuItemPropertyType = {
  path: string
  title: string
}

/**
 * A single Menu Item for usage in navigation
 */
const MenuItem = ({
  path,
  title,
}: MenuItemPropertyType): React.ReactElement => (
  /* const myIcon = React.createElement(props.icon) */
  <>
    <Link href={path}>
      <a>
        {/* {myIcon} */}
        {title}
      </a>
    </Link>
    &nbsp; &nbsp; &nbsp;
  </>
)

export default MenuItem
