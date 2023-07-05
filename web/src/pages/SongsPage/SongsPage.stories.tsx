import type { ComponentMeta } from '@storybook/react'

import SongsPage from './SongsPage'

export const generated = () => {
  return <SongsPage />
}

export default {
  title: 'Pages/SongsPage',
  component: SongsPage,
} as ComponentMeta<typeof SongsPage>
