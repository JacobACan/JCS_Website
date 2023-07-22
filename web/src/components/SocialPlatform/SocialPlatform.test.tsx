import { render } from '@redwoodjs/testing/web'

import SocialPlatform from './SocialPlatform'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialPlatform', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialPlatform />)
    }).not.toThrow()
  })
})
