import { render } from '@redwoodjs/testing/web'

import Arrow from './Arrow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Arrow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Arrow />)
    }).not.toThrow()
  })
})
