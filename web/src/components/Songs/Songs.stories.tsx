// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Songs> = (args) => {
//   return <Songs {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Songs from './Songs'

export const generated = () => {
  return <Songs />
}

export default {
  title: 'Components/Songs',
  component: Songs,
} as ComponentMeta<typeof Songs>
