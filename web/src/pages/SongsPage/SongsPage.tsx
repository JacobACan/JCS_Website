import { useState } from 'react'

import { MetaTags, useQuery } from '@redwoodjs/web'

import PatternGreen from './media/PatternGreen.png'

interface Props {
  isPhone: boolean
  responsitivity: () => string
}

const SongsPage = ({ responsitivity }: Props) => {
  const [audio, setAudio] = useState(new Audio())
  const [isPlaying, setIsPlaying] = useState(false)
  const TRACK_QUERY = gql`
    query Track($recency: Int!) {
      track(recency: $recency) {
        title
        cover
        release_date
        preview
        trackAudioFeatures {
          acousticness
          danceability
          energy
          time_signature
          valence
        }
      }
    }
  `
  const trackFetch = useQuery(TRACK_QUERY, {
    variables: { recency: 1 },
    onCompleted: async (data) => {
      console.log('#Tacks')
      console.log(`${data.track.preview}`)
      setAudio(new Audio(`${data.track.preview}`))
    },
  })

  const handleCoverClick = (e) => {
    const background = document.getElementById('songs-page-background')
    console.log(background)
    if (isPlaying) {
      e.target.style.animationName = 'scale-down'
      background.style.animationName = 'scroll-right'
      setTimeout(() => {
        audio.volume = 0.2
        audio.play()
        setIsPlaying(false)
      }, 100)
      setTimeout(() => {
        background.style.animationName = ''
      }, 60000)
    } else {
      e.target.style.animationName = 'scale-up'
      audio.pause()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <MetaTags title="Songs" description="Songs page" />
      <div className="theme-background"></div>
      <img
        src={trackFetch.data ? trackFetch.data.track.cover : PatternGreen}
        className={`background-image${responsitivity()} blurdark`}
        id="songs-page-background"
        alt=""
      />
      <section className="margin-box mt-[10vh] h-[90vh]">
        <h1 id="songs-page-title">Latest Music</h1>

        {trackFetch.data ? (
          <>
            <h1 id="song-title" className={`song-title${responsitivity()}`}>
              {trackFetch.data.track.title}
            </h1>
            <img
              src={trackFetch.data ? trackFetch.data.track.cover : ''}
              alt={`${trackFetch.data ? trackFetch.data.track.title : ''}`}
              className={`song-cover song-cover${responsitivity()}`}
              onClickCapture={(e) => handleCoverClick(e)}
            />
            <h2 className={`song-date${responsitivity()}`}>
              {trackFetch.data.track.release_date}
            </h2>
            {trackFetch.data.track.trackAudioFeatures ? (
              <ul className={`song-description${responsitivity()}`}>
                <li>
                  Acousticness :
                  {trackFetch.data.track.trackAudioFeatures.acousticness}
                </li>
                <li>
                  Danceability :
                  {trackFetch.data.track.trackAudioFeatures.danceability}
                </li>
                <li>
                  Energy : {trackFetch.data.track.trackAudioFeatures.energy}
                </li>
                {/* <li>
                    {trackFetch.data.track.trackAudioFeatures.time_signature}
                  </li> */}
                <li>
                  Valence : {trackFetch.data.track.trackAudioFeatures.valence}
                </li>
              </ul>
            ) : (
              <></>
            )}
          </>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

export default SongsPage
