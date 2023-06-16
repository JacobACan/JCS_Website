import { render } from '@redwoodjs/testing/web'

import Products from './Products'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Products', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Products />)
    }).not.toThrow()
  })
})
