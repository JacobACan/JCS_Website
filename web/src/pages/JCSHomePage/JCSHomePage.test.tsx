import { render } from '@redwoodjs/testing/web'

import JcsHomePage from './JcsHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JcsHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JcsHomePage />)
    }).not.toThrow()
  })
})
