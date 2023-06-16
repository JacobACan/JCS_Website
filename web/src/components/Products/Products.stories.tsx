// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Products> = (args) => {
//   return <Products {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Products from './Products'

export const generated = () => {
  return <Products />
}

export default {
  title: 'Components/Products',
  component: Products,
} as ComponentMeta<typeof Products>
