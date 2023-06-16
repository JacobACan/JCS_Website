// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ParalaxScroll> = (args) => {
//   return <ParalaxScroll {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ParalaxScroll from './ParalaxScroll'

export const generated = () => {
  return <ParalaxScroll />
}

export default {
  title: 'Components/ParalaxScroll',
  component: ParalaxScroll,
} as ComponentMeta<typeof ParalaxScroll>
