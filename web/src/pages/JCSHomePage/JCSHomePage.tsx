import { MetaTags } from '@redwoodjs/web'

import Products from 'src/components/Products/Products'
import Song from 'src/components/Song/Song'
import Songs from 'src/components/Songs/Songs'

import Logo from './media/Logo2.png'
import Shooting_Star from './media/Shooting_Star.png'

const JcsHomePage = () => {
  return (
    <>
      <MetaTags title="JcsHome" description="JcsHome page" />

      <div className="paralax-wrapper">
        <section className="paralax-contents">
          <img className="background_logo" src={Logo} alt="" />
          <img className="background_image" src={Shooting_Star} alt="" />
          <div className="background_break"></div>
          <div>
            <Song></Song>
            <h1 className="latest_release"></h1>
          </div>
        </section>
        <Songs></Songs>
        <Products></Products>
      </div>
    </>
  )
}

export default JcsHomePage
