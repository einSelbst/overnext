import Head from 'next/head'

import { getLayout } from 'layouts/account-settings.layout'

const AccountSettingsTeamSettings = () => (
  <>
    <Head>
      <title>Account Settings</title>
    </Head>
    <div>
      <div className='pt-6 pb-8 sm:pt-8'>
        <p className='text-sm text-gray-700'>Set your team preferences here.</p>
        <div className='mt-6'>
          <div className='max-w-4xl mx-auto'>
            <label className='block' htmlFor='team-name'>
              <span className='block font-medium text-sm text-gray-900 leading-tight'>
                Team name
              </span>
              <input
                className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white mt-2'
                id='team-name'
                placeholder='My Team'
                type='email'
              />
            </label>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-gray-200 px-0 py-5 flex justify-end'>
        <button
          className='px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400'
          type='button'>
          Cancel
        </button>
        <button
          className='ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900'
          type='button'>
          Save
        </button>
      </div>
    </div>
  </>
)

AccountSettingsTeamSettings.getLayout = getLayout

export default AccountSettingsTeamSettings
