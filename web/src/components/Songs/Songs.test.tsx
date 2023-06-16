import { render } from '@redwoodjs/testing/web'

import Songs from './Songs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Songs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Songs />)
    }).not.toThrow()
  })
})
