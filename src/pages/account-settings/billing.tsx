import type { NextComponentType } from 'next'

import { getLayout } from 'layouts/account-settings.layout'

const AccountSettingsBilling = (): NextComponentType => (
  <div>
    <div className='pt-6 pb-8 sm:pt-8'>
      <p className='text-sm text-gray-700'>Set your billing information.</p>
      <div className='mt-6'>
        <div className='max-w-4xl mx-auto'>
          <label className='block' htmlFor='credit-card'>
            <span className='block font-medium text-sm text-gray-900 leading-tight'>
              Credit card number
            </span>
            <input
              className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white mt-2'
              id='credit-card'
              placeholder='4242 4242 4242 4242'
              type='email'
            />
          </label>
          <label className='block mt-5' htmlFor='billing-address'>
            <span className='block font-medium text-sm text-gray-900 leading-tight'>
              Billing address
            </span>
            <input
              className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white mt-2'
              id='billing-address'
              placeholder='555 Party Drive'
              type='text'
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
)

AccountSettingsBilling.getLayout = getLayout

export default AccountSettingsBilling
