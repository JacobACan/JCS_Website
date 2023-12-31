// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/projects" page={ProjectsPage} name="projects" />
      <Route path="/songs" page={SongsPage} name="songs" />
      <Route path="/" page={JCSHomePage} name="jcsHome" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
