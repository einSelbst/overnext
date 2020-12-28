import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../src/pages/index'

describe('home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    // inline-snapshots require 'prettier', but I use 'prettierx'
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {})
    jest.spyOn(window, 'alert').mockImplementation()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
