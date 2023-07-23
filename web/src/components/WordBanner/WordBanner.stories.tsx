// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof WordBanner> = (args) => {
//   return <WordBanner {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import WordBanner from './WordBanner'

export const generated = () => {
  return <WordBanner />
}

export default {
  title: 'Components/WordBanner',
  component: WordBanner,
} as ComponentMeta<typeof WordBanner>
