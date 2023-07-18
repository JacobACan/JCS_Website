import { render } from '@redwoodjs/testing/web'

import SongsPage from './SongsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SongsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SongsPage />)
    }).not.toThrow()
  })
})
