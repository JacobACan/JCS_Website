import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import SongsPage from '../SongsPage/SongsPage'

import GreenStudio from './media/GreenStudio.png'

const JcsHomePage = () => {
  const phoneWidth = 700
  const [isPhone, setIsPhone] = useState(window.innerWidth < phoneWidth)
  window.addEventListener('resize', (e: any) => {
    e.target && e.target.innerWidth < phoneWidth
      ? setIsPhone(true)
      : setIsPhone(false)
  })
  const responsitivity = (): string => {
    return isPhone ? '-phone' : '-desktop'
  }

  return (
    <>
      <MetaTags title="JcsHome" description="JcsHome page" />

      <div className="paralax-wrapper">
        <section className="paralax-contents">
          <img className={`background_image`} src={GreenStudio} alt="" />
          {/* <div className="image-frame"></div>
          <div className="image-frame-fill"></div> */}
          <div className="vgrid3">
            <h1 id="home-title" className={`home-title${responsitivity()}`}>
              Jacob Canedy
            </h1>
            <p
              id="home-quick-description"
              className={`home-quick-description${responsitivity()}`}
            >
              Developer • Producer • Artist
            </p>
            <div className="vgrid3 space-y-7">
              <button
                id="home-button1"
                className={`home-button${responsitivity()}`}
                onClick={() => {
                  console.log('scrolling')
                  window.scrollTo({ behavior: 'smooth', top: 1000 })
                }}
              >
                Latest Music
              </button>
              <button
                id="home-button2"
                className={`home-button${responsitivity()}`}
              >
                {' '}
                Products
              </button>
            </div>
          </div>
        </section>
        <SongsPage responsitivity={responsitivity} isPhone={isPhone} />
      </div>
    </>
  )
}

export default JcsHomePage
