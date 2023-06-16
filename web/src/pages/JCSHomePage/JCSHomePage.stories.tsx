import type { ComponentMeta } from '@storybook/react'

import JcsHomePage from './JcsHomePage'

export const generated = () => {
  return <JcsHomePage />
}

export default {
  title: 'Pages/JcsHomePage',
  component: JcsHomePage,
} as ComponentMeta<typeof JcsHomePage>
