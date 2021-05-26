import * as React from 'react'
import { Home } from '../../src/pages/index'
import { render, fireEvent } from '../test-utils'

describe('home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    // inline-snapshots require 'prettier', but I use 'prettierx'
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {})
    jest.spyOn(window, 'alert').mockImplementation()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
