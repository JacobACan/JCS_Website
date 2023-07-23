import { render } from '@redwoodjs/testing/web'

import SoundHoverImage from './SoundHoverImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SoundImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SoundHoverImage />)
    }).not.toThrow()
  })
})
