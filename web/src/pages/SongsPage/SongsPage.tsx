import { useEffect, useState } from 'react'

import { BounceLoader } from 'react-spinners'

import { MetaTags, useQuery } from '@redwoodjs/web'

import Arrow, { ArrowType } from 'src/components/Arrow/Arrow'
import SocialPlatform, {
  SocialPlatforms,
} from 'src/components/SocialPlatform/SocialPlatform'
import { Responsitivity } from 'src/services/responsitivity'

import PatternGreen from './media/PatternGreen.png'

const SongsPage = () => {
  const r = new Responsitivity(useState())

  const [audio, setAudio] = useState(new Audio())
  audio.addEventListener('pause', () => {
    resetCoverAnimation()
    setIsPlaying(false)
  })
  audio.addEventListener('ended', () => {
    resetCoverAnimation()
    setIsPlaying(false)
  })
  audio.addEventListener('play', () => {
    startCoverAnimation()
    setIsPlaying(true)
  })
  const resetCoverAnimation = () => {
    const cover = document.getElementById('songs-page-song-cover')
    cover.style.animationName = 'scale-up'
  }
  const startCoverAnimation = () => {
    const cover = document.getElementById('songs-page-song-cover')
    cover.style.animationName = 'scale-down'
  }
  const [isPlaying, setIsPlaying] = useState(false)
  const [songRecency, setSongRecency] = useState(1)
  const TRACK_QUERY = gql`
    query Track($recency: Int!) {
      track(recency: $recency) {
        title
        cover
        release_date
        preview
        description
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
  const {
    data: trackData,
    loading,
    refetch,
  } = useQuery(TRACK_QUERY, {
    variables: { recency: songRecency },
    onCompleted: async (data) => {
      setAudio(new Audio(`${data.track.preview}`))
    },
  })

  const handleCoverClick = () => {
    const background = document.getElementById('songs-page-background')
    if (!loading) {
      if (!isPlaying) {
        background.style.animationName = 'scroll-right'
        audio.volume = 0.2
        audio.play()
        setIsPlaying(true)
        setTimeout(() => {
          background.style.animationName = ''
        }, 60000)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    }
  }

  useEffect(() => {
    audio.pause()
  }, [trackData])

  return (
    <section className="page-section">
      <MetaTags title="Songs" description="Songs page" />
      <div id="songs-page-position"></div>
      <div className={`theme-background${r.responsitivity()}`}>
        <img
          src={trackData ? trackData.track.cover : PatternGreen}
          className={`background-image${r.responsitivity()} blurdark`}
          id="songs-page-background"
          alt=""
        />
        <section className="margin-box mt-[2vh] h-[90vh]">
          <h1 id="songs-page-title">Latest Releases</h1>

          {trackData ? (
            <>
              <h1 id="song-title" className={`song-title${r.responsitivity()}`}>
                {trackData.track.title}
              </h1>
              <img
                src={trackData ? trackData.track.cover : ''}
                alt={`${trackData ? trackData.track.title : ''}`}
                className={`song-cover song-cover${r.responsitivity()}`}
                onClickCapture={() => handleCoverClick()}
                id="songs-page-song-cover"
              />
              {loading ? (
                <div className={`song-cover-loader${r.responsitivity()}`}>
                  <BounceLoader size={100} />
                </div>
              ) : (
                <></>
              )}
              <h2 className={`song-date${r.responsitivity()}`}>
                {trackData.track.release_date}
              </h2>
              {trackData.track.trackAudioFeatures ? (
                <p className={`song-description${r.responsitivity()}`}>
                  {trackData.track.description}
                </p>
              ) : (
                <></>
              )}
              <div className={`sub-division-grid${r.responsitivity()}`}>
                <SocialPlatform
                  name={SocialPlatforms.SPOTIFY}
                  link="https://open.spotify.com/artist/1csF3aXBFJhCXUtn8YJit6"
                />
                <SocialPlatform
                  name={SocialPlatforms.APPLE_MUSIC}
                  link="https://music.apple.com/us/artist/jacob-canedy/1481730545"
                />
                <SocialPlatform
                  name={SocialPlatforms.YOUTUBE}
                  link="https://www.youtube.com/@jacobcanedy1802"
                />
                <SocialPlatform
                  name={SocialPlatforms.INSTAGRAM}
                  link="https://www.instagram.com/jacob_jamz/"
                />
                <SocialPlatform
                  name={SocialPlatforms.DEEZER}
                  link="https://www.deezer.com/us/artist/75195292"
                />
              </div>
              <div
                className={`right-arrow-song-placement${r.responsitivity()}`}
              >
                <Arrow
                  type={ArrowType.Right}
                  handleClick={() => {
                    songRecency < 5
                      ? setSongRecency(songRecency + 1)
                      : setSongRecency(1)
                    refetch()
                  }}
                />
              </div>
              <div className={`left-arrow-song-placement${r.responsitivity()}`}>
                <Arrow
                  type={ArrowType.Left}
                  handleClick={() => {
                    songRecency > 0
                      ? setSongRecency(songRecency - 1)
                      : setSongRecency(5)
                    refetch()
                  }}
                />
              </div>
            </>
          ) : (
            <div className={`song-cover-loader${r.responsitivity()}`}>
              <BounceLoader size={100} />
            </div>
          )}
        </section>
      </div>
    </section>
  )
}

export default SongsPage
