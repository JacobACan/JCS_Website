// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SoundImage> = (args) => {
//   return <SoundImage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SoundHoverImage from './SoundHoverImage'

export const generated = () => {
  return <SoundHoverImage />
}

export default {
  title: 'Components/SoundImage',
  component: SoundHoverImage,
} as ComponentMeta<typeof SoundHoverImage>
