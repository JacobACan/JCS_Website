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
    if (isPlaying) {
      e.target.style.animationName = 'scale'
      setTimeout(() => {
        audio.play()
        setIsPlaying(false)
      }, 1100)
    } else {
      e.target.style.animationName = ''
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
        alt=""
      />
      <section className="margin-box h-[100vh]">
        {trackFetch.data ? (
          <>
            <h1 className={`song-title${responsitivity()}`}>
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
            <p className={`song-description${responsitivity()}`}>
              <br />
              {trackFetch.data.track.trackAudioFeatures ? (
                <>
                  {trackFetch.data.track.trackAudioFeatures.acousticness}
                  {trackFetch.data.track.trackAudioFeatures.danceability}
                  {trackFetch.data.track.trackAudioFeatures.energy}
                  {trackFetch.data.track.trackAudioFeatures.time_signature}
                  {trackFetch.data.track.trackAudioFeatures.valence}
                </>
              ) : (
                <></>
              )}
            </p>
          </>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

export default SongsPage
