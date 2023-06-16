import { render } from '@redwoodjs/testing/web'

import Song from './Song'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Song', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Song />)
    }).not.toThrow()
  })
})
