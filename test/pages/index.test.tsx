import { Home } from '../../src/pages'
import { fireEvent, render } from '../test-utils'

describe('home page', () => {
  it('matches snapshot', () => {
    expect.assertions(1)

    const { asFragment } = render(<Home />, {})

    // inline-snapshots require 'prettier', but I use 'prettierx'
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    expect.assertions(1)

    const { getByText } = render(<Home />, {})
    jest.spyOn(window, 'alert').mockImplementation()
    fireEvent.click(getByText('Test Button'))

    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
