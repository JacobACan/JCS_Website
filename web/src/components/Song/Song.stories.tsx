// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Song> = (args) => {
//   return <Song {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Song from './Song'

export const generated = () => {
  return <Song />
}

export default {
  title: 'Components/Song',
  component: Song,
} as ComponentMeta<typeof Song>
