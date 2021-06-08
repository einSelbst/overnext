import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getLayout as getSiteLayout } from './site.layout'

type ActiveLinkProps = {
  children: React.ReactNode
  href: string
  className?: string
}

const ActiveLink = ({ children, href, className = '' }: ActiveLinkProps) => {
  const router = useRouter()
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? 'text-gray-900 border-gray-800'
            : 'text-gray-600 hover:text-gray-700 border-transparent'
        } ${className} block pb-4 font-semibold text-sm sm:text-base border-b-2 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
      >
        {children}
      </a>
    </Link>
  )
}

const AccountSettingsLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='max-w-xl mx-auto px-8'>
    <h1 className='text-2xl text-gray-900 font-semibold'>Account Settings</h1>

    <div
      className='mt-6 flex overflow-x-auto scrollbar-none'
      style={{ boxShadow: 'inset 0 -2px 0 #edf2f7' }}
    >
      <ActiveLink href='/account-settings/basic-information'>
        Basic Information
      </ActiveLink>

      <ActiveLink className='ml-10' href='/account-settings/profile'>
        Profile
      </ActiveLink>

      <ActiveLink className='ml-10' href='/account-settings/team-settings'>
        Team Settings
      </ActiveLink>

      <ActiveLink className='ml-10' href='/account-settings/billing'>
        Billing
      </ActiveLink>

      <ActiveLink className='ml-10' href='/account-settings/notifications'>
        Notifications
      </ActiveLink>

      <ActiveLink className='ml-10' href='/account-settings/security'>
        Security
      </ActiveLink>
    </div>

    <div>{children}</div>
  </div>
)

/* export const getLayout = (page: React.ReactNode) => */
export const getLayout = (page: NextPage) =>
  getSiteLayout(<AccountSettingsLayout>{page}</AccountSettingsLayout>)

export default AccountSettingsLayout
