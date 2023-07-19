import type { ComponentMeta } from '@storybook/react'

import ProjectsPage from './ProjectsPage'

export const generated = () => {
  return <ProjectsPage />
}

export default {
  title: 'Pages/ProjectsPage',
  component: ProjectsPage,
} as ComponentMeta<typeof ProjectsPage>
