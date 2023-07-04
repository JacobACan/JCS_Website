import { MetaTags } from '@redwoodjs/web'

import GreenStudio from './media/GreenStudio.png'
import PatternGreen from './media/PatternGreen.png'

const JcsHomePage = () => {
  return (
    <>
      <MetaTags title="JcsHome" description="JcsHome page" />

      <div className="paralax-wrapper">
        <section className="paralax-contents">
          <img className="background_image" src={GreenStudio} alt="" />
          <div className="background_break"></div>
          <div className="vgrid3">
            <h1 id="home-title">Jacob Canedy</h1>
            <p id="home-quick-description">Developer • Producer • Singer</p>
            <div className="vgrid3 space-y-7">
              <button id="home-button1">Music</button>
              <button id="home-button2"> Products</button>
            </div>
          </div>
        </section>
        <img className="blurdark w-[100%]" src={PatternGreen} alt="" />
      </div>
    </>
  )
}

export default JcsHomePage
