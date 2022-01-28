import type { NextComponentType } from 'next'

import { getLayout } from 'layouts/account-settings.layout'

const AccountSettingsProfile = (): NextComponentType => (
  <div>
    <div className='pt-6 pb-8 sm:pt-8'>
      <p className='text-sm text-gray-700'>
        Set your your profile information here for others on the site to view.
      </p>
      <div className='mt-6'>
        <div className='mx-auto max-w-4xl'>
          <label className='block' htmlFor='display-name'>
            <span className='fon2t-medium block text-sm leading-tight text-gray-900'>
              Display name
            </span>
            <input
              className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 leading-tight focus:border-gray-600 focus:bg-white focus:outline-none'
              id='display-name'
              placeholder='John Doe'
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
)

AccountSettingsProfile.getLayout = getLayout

export default AccountSettingsProfile
