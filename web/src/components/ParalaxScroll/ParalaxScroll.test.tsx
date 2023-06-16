import { render } from '@redwoodjs/testing/web'

import ParalaxScroll from './ParalaxScroll'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ParalaxScroll', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ParalaxScroll />)
    }).not.toThrow()
  })
})
