// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Arrow> = (args) => {
//   return <Arrow {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Arrow from './Arrow'

export const generated = () => {
  return <Arrow />
}

export default {
  title: 'Components/Arrow',
  component: Arrow,
} as ComponentMeta<typeof Arrow>
