import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { Responsitivity } from 'src/services/responsitivity'

import ProjectsPage from '../ProjectsPage/ProjectsPage'
import SongsPage from '../SongsPage/SongsPage'

import GreenStudio from './media/GreenStudio.png'

const JcsHomePage = () => {
  const r = new Responsitivity(useState())
  const scrollToLatestMusic = () => {
    const paralaxWrapper = document.getElementById('paralax-wrapper') // We must use the paralax wrapper instead of window since the wrapper is being scrolled, not the window.
    const songsPagePosition = document.getElementById('songs-page-position')
    paralaxWrapper.scrollTo({
      behavior: 'smooth',
      top: songsPagePosition ? songsPagePosition.offsetTop : 0,
    })
  }
  const scrollToLatestProducts = () => {
    const paralaxWrapper = document.getElementById('paralax-wrapper') // We must use the paralax wrapper instead of window since the wrapper is being scrolled, not the window.
    const songsPagePosition = document.getElementById('projects-page-position')
    paralaxWrapper.scrollTo({
      behavior: 'smooth',
      top: songsPagePosition ? songsPagePosition.offsetTop : 0,
    })
  }

  return (
    <>
      <MetaTags title="JcsHome" description="JcsHome page" />

      <div id="paralax-wrapper" className="paralax-wrapper">
        <section className="paralax-contents">
          <img className={`background_image`} src={GreenStudio} alt="" />
          {/* <div className="image-frame"></div>
          <div className="image-frame-fill"></div> */}
          <div className="vgrid3">
            <h1 id="home-title" className={`home-title${r.responsitivity()}`}>
              Jacob Canedy
            </h1>
            <p
              id="home-quick-description"
              className={`home-quick-description${r.responsitivity()}`}
            >
              Developer • Producer • Artist
            </p>
            <div className="vgrid3 space-y-7">
              <button
                id="home-button1"
                className={`home-button${r.responsitivity()}`}
                onClick={() => scrollToLatestMusic()}
              >
                Latest Music
              </button>
              <button
                id="home-button2"
                className={`home-button${r.responsitivity()}`}
                onClick={() => scrollToLatestProducts()}
              >
                Latest Projects
              </button>
            </div>
          </div>
        </section>
        <section className="home-page-section">
          <SongsPage />
        </section>
        <section className="home-page-section">
          <ProjectsPage />
        </section>
      </div>
    </>
  )
}

export default JcsHomePage
