import { render } from '@redwoodjs/testing/web'

import WordBanner from './WordBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WordBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WordBanner />)
    }).not.toThrow()
  })
})
