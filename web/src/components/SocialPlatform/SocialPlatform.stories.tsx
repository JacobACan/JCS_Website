// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SocialPlatform> = (args) => {
//   return <SocialPlatform {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SocialPlatform from './SocialPlatform'

export const generated = () => {
  return <SocialPlatform />
}

export default {
  title: 'Components/SocialPlatform',
  component: SocialPlatform,
} as ComponentMeta<typeof SocialPlatform>
