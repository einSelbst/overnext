import { getLayout } from 'layouts/account-settings.layout'
import Head from 'next/head'

const AccountSettingsTeamSettings = () => (
  <>
    <Head>
      <title>Account Settings</title>
    </Head>
    <div>
      <div className='pt-6 pb-8 sm:pt-8'>
        <p className='text-sm text-gray-700'>Set your team preferences here.</p>
        <div className='mt-6'>
          <div className='mx-auto max-w-4xl'>
            <label className='block' htmlFor='team-name'>
              <span className='block text-sm font-medium leading-tight text-gray-900'>
                Team name
              </span>
              <input
                className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 leading-tight focus:border-gray-600 focus:bg-white focus:outline-none'
                id='team-name'
                placeholder='My Team'
                type='email'
              />
            </label>
          </div>
        </div>
      </div>
      <div className='flex justify-end border-t-2 border-gray-200 px-0 py-5'>
        <button
          className='rounded-lg bg-gray-300 px-4 py-3 font-semibold leading-none text-gray-900 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none'
          type='button'>
          Cancel
        </button>
        <button
          className='ml-4 rounded-lg bg-gray-800 px-6 py-3 font-semibold leading-none text-white hover:bg-gray-900 focus:bg-gray-900 focus:outline-none'
          type='button'>
          Save
        </button>
      </div>
    </div>
  </>
)

AccountSettingsTeamSettings.getLayout = getLayout

export default AccountSettingsTeamSettings
