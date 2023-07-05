import { MetaTags } from '@redwoodjs/web'

import PatternGreen from './media/PatternGreen.png'

interface Props {
  isPhone: boolean
}

const SongsPage = (props: Props) => {
  return (
    <>
      <MetaTags title="Songs" description="Songs page" />
      <img className="blurdark w-[100%]" src={PatternGreen} alt="" />
      <div className="margin-box"></div>
    </>
  )
}

export default SongsPage
